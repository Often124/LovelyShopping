// ===================================
// LOVELY SHOPPING - CART SYSTEM
// Système de gestion du panier
// ===================================

class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.promoCode = null;
        this.promoDiscount = 0;
        this.updateCartCount();
    }

    // Charger le panier depuis localStorage
    loadCart() {
        const cart = localStorage.getItem('lovely_cart');
        return cart ? JSON.parse(cart) : [];
    }

    // Sauvegarder le panier
    saveCart() {
        localStorage.setItem('lovely_cart', JSON.stringify(this.items));
        this.updateCartCount();
    }

    // Ajouter un produit
    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.id === product.id);

        if (existingItem) {
            // Vérifier le stock
            if (existingItem.quantity + quantity > product.stock) {
                this.showNotification('Stock insuffisant !', 'error');
                return false;
            }
            existingItem.quantity += quantity;
        } else {
            if (quantity > product.stock) {
                this.showNotification('Stock insuffisant !', 'error');
                return false;
            }
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                oldPrice: product.oldPrice,
                image: product.image,
                category: product.categoryName,
                quantity: quantity,
                stock: product.stock
            });
        }

        this.saveCart();
        this.showNotification(`${product.name} ajouté au panier !`, 'success');
        return true;
    }

    // Supprimer un produit
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.showNotification('Article supprimé du panier', 'success');
    }

    // Modifier la quantité
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
                return;
            }
            if (quantity > item.stock) {
                this.showNotification('Stock insuffisant !', 'error');
                return;
            }
            item.quantity = quantity;
            this.saveCart();
        }
    }

    // Vider le panier
    clearCart() {
        this.items = [];
        this.promoCode = null;
        this.promoDiscount = 0;
        this.saveCart();
    }

    // Obtenir le nombre total d'articles
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Calculer le sous-total
    getSubtotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Appliquer un code promo
    applyPromoCode(code) {
        const upperCode = code.toUpperCase().trim();

        if (PROMO_CODES[upperCode]) {
            const promo = PROMO_CODES[upperCode];
            this.promoCode = upperCode;

            if (promo.type === 'percent') {
                this.promoDiscount = (this.getSubtotal() * promo.discount) / 100;
            } else {
                this.promoDiscount = promo.discount;
            }

            this.showNotification(`Code ${upperCode} appliqué : ${promo.description}`, 'success');
            return { success: true, message: promo.description, discount: this.promoDiscount };
        } else {
            this.promoCode = null;
            this.promoDiscount = 0;
            this.showNotification('Code promo invalide', 'error');
            return { success: false, message: 'Code promo invalide' };
        }
    }

    // Supprimer le code promo
    removePromoCode() {
        this.promoCode = null;
        this.promoDiscount = 0;
    }

    // Calculer les frais de livraison
    getShipping() {
        const subtotal = this.getSubtotal();
        if (subtotal >= 50) return 0; // Livraison gratuite au-dessus de 50€
        return 5.99;
    }

    // Calculer le total
    getTotal() {
        const subtotal = this.getSubtotal();
        const shipping = this.getShipping();
        return Math.max(0, subtotal + shipping - this.promoDiscount);
    }

    // Mettre à jour le compteur du panier
    updateCartCount() {
        const cartCountElements = document.querySelectorAll('.cart-count');
        const totalItems = this.getTotalItems();

        cartCountElements.forEach(el => {
            el.textContent = totalItems;
            el.style.display = totalItems > 0 ? 'flex' : 'none';
        });
    }

    // Afficher une notification
    showNotification(message, type = 'success') {
        // Supprimer les notifications existantes
        const existingNotif = document.querySelector('.notification');
        if (existingNotif) {
            existingNotif.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-icon">
                ${type === 'success' ? '✓' : '✕'}
            </div>
            <span class="notification-text">${message}</span>
        `;

        document.body.appendChild(notification);

        // Animer l'apparition
        setTimeout(() => notification.classList.add('show'), 10);

        // Supprimer après 3 secondes
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Instance globale du panier
const cart = new ShoppingCart();

// Fonction pour ajouter au panier (utilisable depuis les boutons)
function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (product) {
        if (product.stock === 0) {
            cart.showNotification('Produit en rupture de stock', 'error');
            return;
        }
        cart.addItem(product);
    }
}

// Fonction pour afficher le panier
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartEmptyContainer = document.getElementById('cart-empty');
    const cartContentContainer = document.getElementById('cart-content');

    if (!cartItemsContainer) return;

    if (cart.items.length === 0) {
        if (cartEmptyContainer) cartEmptyContainer.style.display = 'block';
        if (cartContentContainer) cartContentContainer.style.display = 'none';
        return;
    }

    if (cartEmptyContainer) cartEmptyContainer.style.display = 'none';
    if (cartContentContainer) cartContentContainer.style.display = 'grid';

    cartItemsContainer.innerHTML = cart.items.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${item.category}</p>
                <div class="cart-item-price">${item.price.toFixed(2)} €</div>
            </div>
            <div class="quantity-control">
                <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">−</button>
                <span>${item.quantity}</span>
                <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                🗑️
            </button>
        </div>
    `).join('');

    updateCartSummary();
}

// Mettre à jour la quantité depuis la page panier
function updateCartQuantity(productId, newQuantity) {
    cart.updateQuantity(productId, newQuantity);
    renderCart();
}

// Supprimer du panier
function removeFromCart(productId) {
    cart.removeItem(productId);
    renderCart();
}

// Mettre à jour le résumé
function updateCartSummary() {
    const subtotalEl = document.getElementById('cart-subtotal');
    const shippingEl = document.getElementById('cart-shipping');
    const discountEl = document.getElementById('cart-discount');
    const discountRow = document.getElementById('discount-row');
    const totalEl = document.getElementById('cart-total');

    if (subtotalEl) subtotalEl.textContent = `${cart.getSubtotal().toFixed(2)} €`;
    if (shippingEl) {
        const shipping = cart.getShipping();
        shippingEl.textContent = shipping === 0 ? 'Gratuit' : `${shipping.toFixed(2)} €`;
    }

    if (discountRow && discountEl) {
        if (cart.promoDiscount > 0) {
            discountRow.style.display = 'flex';
            discountEl.textContent = `-${cart.promoDiscount.toFixed(2)} €`;
        } else {
            discountRow.style.display = 'none';
        }
    }

    if (totalEl) totalEl.textContent = `${cart.getTotal().toFixed(2)} €`;
}

// Appliquer un code promo
function applyPromoCode() {
    const input = document.getElementById('promo-input');
    const resultEl = document.getElementById('promo-result');

    if (!input) return;

    const result = cart.applyPromoCode(input.value);

    if (resultEl) {
        resultEl.innerHTML = result.success
            ? `<span class="promo-success">✓ ${result.message}</span>`
            : `<span class="promo-error">✕ ${result.message}</span>`;
    }

    updateCartSummary();
}
