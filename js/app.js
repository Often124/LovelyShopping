// ===================================
// LOVELY SHOPPING - MAIN APP
// Application principale
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    initApp();
});

function initApp() {
    initHeader();
    initMobileMenu();
    initSearch();
    initNewsletterForm();
    initAnimations();

    // Initialiser selon la page
    if (document.getElementById('featured-products')) {
        renderFeaturedProducts();
    }
    if (document.getElementById('categories-grid')) {
        renderCategories();
    }
    if (document.getElementById('products-grid')) {
        initProductsPage();
    }
    if (document.getElementById('cart-items')) {
        renderCart();
    }
    if (document.getElementById('product-detail-container')) {
        initProductDetail();
    }
}

// ===== Header =====
function initHeader() {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ===== Mobile Menu =====
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.mobile-menu-close');

    if (toggle && mobileMenu) {
        toggle.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        }
    }
}

// ===== Search =====
function initSearch() {
    const searchBtn = document.querySelector('.search-btn');
    const searchModal = document.querySelector('.search-modal');
    const searchInput = document.querySelector('.search-modal input');
    const searchResults = document.querySelector('.search-results');

    if (searchBtn && searchModal) {
        searchBtn.addEventListener('click', () => {
            searchModal.classList.add('open');
            if (searchInput) searchInput.focus();
        });

        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                searchModal.classList.remove('open');
            }
        });

        if (searchInput && searchResults) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();

                if (query.length < 2) {
                    searchResults.innerHTML = '';
                    return;
                }

                const results = PRODUCTS.filter(p =>
                    p.name.toLowerCase().includes(query) ||
                    p.description.toLowerCase().includes(query) ||
                    p.categoryName.toLowerCase().includes(query)
                ).slice(0, 5);

                if (results.length === 0) {
                    searchResults.innerHTML = '<p style="text-align: center; color: var(--gray-500); padding: 1rem;">Aucun résultat trouvé</p>';
                } else {
                    searchResults.innerHTML = results.map(product => `
                        <a href="product-detail.html?id=${product.id}" class="search-result-item">
                            <img src="${product.image}" alt="${product.name}" class="search-result-image">
                            <div class="search-result-info">
                                <h4>${product.name}</h4>
                                <p>${product.price.toFixed(2)} €</p>
                            </div>
                        </a>
                    `).join('');
                }
            });
        }
    }

    // Fermer avec Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal) {
            searchModal.classList.remove('open');
        }
    });
}

// ===== Categories Grid =====
function renderCategories() {
    const grid = document.getElementById('categories-grid');
    if (!grid) return;

    grid.innerHTML = CATEGORIES.slice(1).map(cat => `
        <a href="products.html?category=${cat.id}" class="category-card">
            <div class="category-icon">${cat.icon}</div>
            <div class="category-name">${cat.name}</div>
            <div class="category-count">${cat.count} articles</div>
        </a>
    `).join('');
}

// ===== Featured Products =====
function renderFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;

    // Sélectionner les nouveautés et les promos
    const featured = PRODUCTS.filter(p => p.isNew || p.isSale).slice(0, 8);

    container.innerHTML = featured.map(product => createProductCard(product)).join('');
}

// ===== Products Page =====
let currentCategory = 'all';
let currentSort = 'default';
let currentSearch = '';

function initProductsPage() {
    // Récupérer la catégorie depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    currentCategory = urlParams.get('category') || 'all';

    renderFilters();
    renderProducts();
    initProductsSorting();
    initProductsSearch();
}

function renderFilters() {
    const filtersContainer = document.getElementById('category-filters');
    if (!filtersContainer) return;

    filtersContainer.innerHTML = CATEGORIES.map(cat => `
        <div class="filter-category ${cat.id === currentCategory ? 'active' : ''}" 
             onclick="filterByCategory('${cat.id}')">
            <span>${cat.icon} ${cat.name}</span>
            <span>${cat.count}</span>
        </div>
    `).join('');
}

function filterByCategory(categoryId) {
    currentCategory = categoryId;

    // Mettre à jour les filtres actifs
    document.querySelectorAll('.filter-category').forEach(el => {
        el.classList.remove('active');
        if (el.onclick.toString().includes(`'${categoryId}'`)) {
            el.classList.add('active');
        }
    });

    renderProducts();

    // Mettre à jour l'URL
    const url = new URL(window.location);
    if (categoryId === 'all') {
        url.searchParams.delete('category');
    } else {
        url.searchParams.set('category', categoryId);
    }
    window.history.pushState({}, '', url);
}

function initProductsSorting() {
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderProducts();
        });
    }
}

function initProductsSearch() {
    const searchInput = document.getElementById('products-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase().trim();
            renderProducts();
        });
    }
}

function renderProducts() {
    const grid = document.getElementById('products-grid');
    const countEl = document.getElementById('products-count');
    if (!grid) return;

    // Filtrer les produits
    let filtered = [...PRODUCTS];

    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }

    if (currentSearch) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(currentSearch) ||
            p.description.toLowerCase().includes(currentSearch)
        );
    }

    // Trier les produits
    switch (currentSort) {
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'newest':
            filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
            break;
    }

    // Afficher le nombre de produits
    if (countEl) {
        countEl.innerHTML = `<strong>${filtered.length}</strong> produit${filtered.length > 1 ? 's' : ''} trouvé${filtered.length > 1 ? 's' : ''}`;
    }

    // Afficher les produits
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">😢</div>
                <h3>Aucun produit trouvé</h3>
                <p style="color: var(--gray-500);">Essayez de modifier vos filtres</p>
            </div>
        `;
    } else {
        grid.innerHTML = filtered.map(product => createProductCard(product)).join('');
    }
}

// ===== Product Card =====
function createProductCard(product) {
    const stockStatus = getStockStatus(product.stock);

    return `
        <div class="product-card fade-in">
            <div class="product-image">
                <a href="product-detail.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-badges">
                    ${product.isNew ? '<span class="badge badge-new">Nouveau</span>' : ''}
                    ${product.isSale ? '<span class="badge badge-sale">Promo</span>' : ''}
                    ${product.stock === 0 ? '<span class="badge badge-out">Épuisé</span>' : ''}
                </div>
                <div class="product-actions">
                    <button class="product-action" onclick="addToWishlist(${product.id})" title="Ajouter aux favoris">
                        ♡
                    </button>
                    <button class="product-action" onclick="quickView(${product.id})" title="Aperçu rapide">
                        👁
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.categoryName}</div>
                <h4 class="product-title">
                    <a href="product-detail.html?id=${product.id}">${product.name}</a>
                </h4>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">
                        <span class="price-current">${product.price.toFixed(2)} €</span>
                        ${product.oldPrice ? `<span class="price-old">${product.oldPrice.toFixed(2)} €</span>` : ''}
                    </div>
                    <div class="product-stock">
                        <span class="stock-indicator ${stockStatus.class}"></span>
                        ${stockStatus.text}
                    </div>
                </div>
                <button class="product-add-cart" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                    ${product.stock === 0 ? 'Rupture de stock' : '🛒 Ajouter au panier'}
                </button>
            </div>
        </div>
    `;
}

function getStockStatus(stock) {
    if (stock === 0) {
        return { class: 'stock-out', text: 'Épuisé' };
    } else if (stock <= 5) {
        return { class: 'stock-low', text: `Plus que ${stock}` };
    } else {
        return { class: 'stock-in', text: 'En stock' };
    }
}

// ===== Product Detail =====
function initProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (!productId) {
        window.location.href = 'products.html';
        return;
    }

    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) {
        window.location.href = 'products.html';
        return;
    }

    renderProductDetail(product);
}

function renderProductDetail(product) {
    const container = document.getElementById('product-detail-container');
    if (!container) return;

    const stockStatus = getStockStatus(product.stock);
    const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

    container.innerHTML = `
        <div class="product-detail-layout">
            <div class="product-gallery">
                <div class="product-main-image">
                    <img src="${product.image}" alt="${product.name}" id="main-image">
                </div>
                ${product.images && product.images.length > 1 ? `
                    <div class="product-thumbnails">
                        ${product.images.map((img, index) => `
                            <div class="product-thumbnail ${index === 0 ? 'active' : ''}" onclick="changeImage('${img}', this)">
                                <img src="${img}" alt="${product.name}">
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
            <div class="product-detail-info">
                <span class="product-detail-category">${product.categoryName}</span>
                <h1 class="product-detail-title">${product.name}</h1>
                
                <div class="product-detail-price">
                    <span class="current">${product.price.toFixed(2)} €</span>
                    ${product.oldPrice ? `
                        <span class="old">${product.oldPrice.toFixed(2)} €</span>
                        <span class="discount">-${discount}%</span>
                    ` : ''}
                </div>
                
                <p class="product-detail-description">${product.description}</p>
                
                <div class="product-detail-stock ${stockStatus.class === 'stock-in' ? 'in-stock' : stockStatus.class === 'stock-low' ? 'low-stock' : 'out-of-stock'}">
                    <span class="stock-indicator ${stockStatus.class}"></span>
                    ${product.stock > 0 ? `${product.stock} article${product.stock > 1 ? 's' : ''} en stock` : 'Rupture de stock'}
                </div>
                
                <div class="product-detail-actions">
                    <div class="quantity-control" id="detail-quantity">
                        <button onclick="changeDetailQuantity(-1)">−</button>
                        <span id="detail-qty">1</span>
                        <button onclick="changeDetailQuantity(1)">+</button>
                    </div>
                    <button class="btn btn-primary btn-lg" onclick="addToCartWithQty(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                        🛒 Ajouter au panier
                    </button>
                    <button class="btn btn-secondary" onclick="addToWishlist(${product.id})">
                        ♡
                    </button>
                </div>
                
                <div class="product-detail-features">
                    <div class="feature">
                        <div class="feature-icon">🚚</div>
                        <div class="feature-text">Livraison gratuite dès 50€</div>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">↩️</div>
                        <div class="feature-text">Retour sous 30 jours</div>
                    </div>
                    <div class="feature">
                        <div class="feature-icon">🔒</div>
                        <div class="feature-text">Paiement sécurisé</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Mettre à jour le titre de la page
    document.title = `${product.name} | Lovely Shopping`;
}

let detailQuantity = 1;

function changeDetailQuantity(delta) {
    const qtyEl = document.getElementById('detail-qty');
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = PRODUCTS.find(p => p.id === productId);

    if (!product) return;

    detailQuantity = Math.max(1, Math.min(product.stock, detailQuantity + delta));
    if (qtyEl) qtyEl.textContent = detailQuantity;
}

function addToCartWithQty(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
        cart.addItem(product, detailQuantity);
        detailQuantity = 1;
        const qtyEl = document.getElementById('detail-qty');
        if (qtyEl) qtyEl.textContent = '1';
    }
}

function changeImage(src, el) {
    const mainImage = document.getElementById('main-image');
    if (mainImage) {
        mainImage.src = src;
    }

    document.querySelectorAll('.product-thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    el.classList.add('active');
}

// ===== Wishlist (simple pour démo) =====
function addToWishlist(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
        cart.showNotification(`${product.name} ajouté aux favoris ♡`, 'success');
    }
}

function quickView(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

// ===== Newsletter =====
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input');
            if (input && input.value) {
                cart.showNotification('Merci ! Vous êtes inscrit(e) à notre newsletter 💌', 'success');
                input.value = '';
            }
        });
    }
}

// ===== Animations =====
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .product-card, .category-card').forEach(el => {
        observer.observe(el);
    });
}

// ===== Utility Functions =====
function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
    }).format(price);
}
