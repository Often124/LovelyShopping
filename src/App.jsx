import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  Search,
  User,
  Menu,
  X,
  Heart,
  Star,
  ArrowRight,
  Truck,
  Shield,
  Gift,
  Headphones,
  Instagram,
  Facebook,
  Twitter,
  CreditCard,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

// Données des produits
const products = [
  {
    id: 1,
    name: "Stylo Plume Marbre Rose",
    category: "Papeterie",
    price: 85,
    oldPrice: null,
    image: "/assets/pen.png",
    rating: 5,
    badge: "Nouveau"
  },
  {
    id: 2,
    name: "Flora Luna - Eau de Parfum",
    category: "Parfums",
    price: 120,
    oldPrice: 150,
    image: "/assets/perfume.png",
    rating: 5,
    badge: "Best-seller"
  },
  {
    id: 3,
    name: "Ensemble Soie & Dentelle",
    category: "Lingerie",
    price: 155,
    oldPrice: null,
    image: "/assets/lingerie.png",
    rating: 5,
    badge: null
  }
];

// Données des catégories
const categories = [
  {
    id: 1,
    name: "Papeterie de Luxe",
    count: "24 produits",
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Parfums d'Exception",
    count: "18 produits",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Lingerie Fine",
    count: "32 produits",
    image: "https://images.unsplash.com/photo-1617331721458-bd3bd3f9c7f8?auto=format&fit=crop&w=800&q=80"
  }
];

// Composant Navbar
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">LOVELY<span>.</span></div>

        <ul className="nav-links">
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Boutique</a></li>
          <li><a href="#">Collections</a></li>
          <li><a href="#">À Propos</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="nav-icons">
          <button className="nav-icon"><Search size={20} /></button>
          <button className="nav-icon"><User size={20} /></button>
          <button className="nav-icon">
            <ShoppingBag size={20} />
            <span className="cart-badge">3</span>
          </button>
          <button className="nav-icon" onClick={() => setIsMobileMenuOpen(true)} style={{ display: 'none' }}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'white',
              zIndex: 2000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2rem'
            }}
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none' }}
            >
              <X size={28} />
            </button>
            <a href="#" style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif' }}>Accueil</a>
            <a href="#" style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif' }}>Boutique</a>
            <a href="#" style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif' }}>Collections</a>
            <a href="#" style={{ fontSize: '1.5rem', fontFamily: 'Cormorant Garamond, serif' }}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Composant Hero
const Hero = () => (
  <section className="hero">
    <div className="hero-container">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="hero-subtitle">✨ Nouvelle Collection 2026</span>
        <h1 className="hero-title">
          L'élégance au <span>féminin</span>
        </h1>
        <p className="hero-description">
          Découvrez notre sélection raffinée de papeterie de luxe, parfums envoûtants
          et lingerie délicate. Des pièces uniques pour sublimer chaque instant.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">
            Découvrir <ArrowRight size={18} />
          </button>
          <button className="btn-secondary">
            Nos Collections
          </button>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="hero-image-container">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
            alt="Femme élégante"
          />

          <motion.div
            className="hero-floating-card card-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="floating-card-icon"><Gift size={24} /></div>
            <div className="floating-card-title">Livraison Offerte</div>
            <div className="floating-card-text">Dès 50€ d'achat</div>
          </motion.div>

          <motion.div
            className="hero-floating-card card-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="floating-card-icon"><Sparkles size={24} /></div>
            <div className="floating-card-title">-20%</div>
            <div className="floating-card-text">1ère commande</div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

// Composant Categories
const Categories = () => (
  <section className="categories">
    <div className="section-header">
      <p className="section-subtitle">Explorez</p>
      <h2 className="section-title">Nos <span>Univers</span></h2>
    </div>

    <div className="categories-grid">
      {categories.map((cat, index) => (
        <motion.div
          key={cat.id}
          className="category-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <img src={cat.image} alt={cat.name} />
          <div className="category-overlay">
            <h3 className="category-name">{cat.name}</h3>
            <p className="category-count">{cat.count}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// Composant Product Card
const ProductCard = ({ product, index }) => (
  <motion.div
    className="product-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    <div className="product-image-wrapper">
      <img src={product.image} alt={product.name} />
      {product.badge && <span className="product-badge">{product.badge}</span>}
      <button className="product-wishlist"><Heart size={20} /></button>
      <button className="product-quick-add">
        <ShoppingBag size={16} /> Ajouter au panier
      </button>
    </div>
    <div className="product-info">
      <p className="product-category">{product.category}</p>
      <h3 className="product-name">{product.name}</h3>
      <div className="product-rating">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill={i < product.rating ? "currentColor" : "none"} />
        ))}
      </div>
      <p className="product-price">
        {product.oldPrice && <span className="old-price">{product.oldPrice}€</span>}
        {product.price}€
      </p>
    </div>
  </motion.div>
);

// Composant Products
const Products = () => (
  <section className="products">
    <div className="section-header">
      <p className="section-subtitle">Sélection</p>
      <h2 className="section-title">Nos <span>Coups de Cœur</span></h2>
    </div>

    <div className="products-grid">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  </section>
);

// Composant Promo Banner
const PromoBanner = () => (
  <section className="promo-banner">
    <div className="promo-container">
      <motion.div
        className="promo-content"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="promo-title">
          Offre <span>Exclusive</span>
        </h2>
        <p className="promo-text">
          Profitez de notre offre de bienvenue et bénéficiez d'une réduction
          exceptionnelle sur l'ensemble de votre première commande.
        </p>
        <button className="promo-btn">
          J'en profite <ArrowRight size={18} />
        </button>
      </motion.div>

      <motion.div
        className="promo-discount"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <p className="promo-discount-text">Jusqu'à</p>
        <p className="promo-discount-value">20<span>%</span></p>
      </motion.div>
    </div>
  </section>
);

// Composant Features
const Features = () => {
  const features = [
    { icon: Truck, title: "Livraison Rapide", text: "Expédition sous 24h" },
    { icon: Shield, title: "Paiement Sécurisé", text: "Transactions protégées" },
    { icon: Gift, title: "Emballage Cadeau", text: "Écrin offert" },
    { icon: Headphones, title: "Service Client", text: "7j/7 à votre écoute" }
  ];

  return (
    <section className="features">
      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="feature-icon">
              <feature.icon size={28} />
            </div>
            <h4 className="feature-title">{feature.title}</h4>
            <p className="feature-text">{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Composant Newsletter
const Newsletter = () => (
  <section className="newsletter">
    <motion.div
      className="newsletter-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="newsletter-title">Rejoignez notre <span style={{ fontStyle: 'italic', color: '#D4919A' }}>cercle privé</span></h2>
      <p className="newsletter-text">
        Inscrivez-vous à notre newsletter pour recevoir en avant-première
        nos nouvelles collections et offres exclusives.
      </p>
      <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          className="newsletter-input"
          placeholder="Votre adresse email"
        />
        <button type="submit" className="newsletter-btn">S'inscrire</button>
      </form>
    </motion.div>
  </section>
);

// Composant Footer
const Footer = () => (
  <footer className="footer">
    <div className="footer-grid">
      <div className="footer-brand">
        <div className="footer-logo">LOVELY<span>.</span></div>
        <p className="footer-description">
          Votre destination pour une sélection raffinée de produits féminins.
          Élégance, qualité et délicatesse au cœur de chaque pièce.
        </p>
        <div className="footer-socials">
          <a href="#" className="footer-social"><Instagram size={18} /></a>
          <a href="#" className="footer-social"><Facebook size={18} /></a>
          <a href="#" className="footer-social"><Twitter size={18} /></a>
        </div>
      </div>

      <div className="footer-column">
        <h4>Boutique</h4>
        <ul className="footer-links">
          <li><a href="#">Nouveautés</a></li>
          <li><a href="#">Papeterie</a></li>
          <li><a href="#">Parfums</a></li>
          <li><a href="#">Lingerie</a></li>
          <li><a href="#">Promotions</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Informations</h4>
        <ul className="footer-links">
          <li><a href="#">À propos</a></li>
          <li><a href="#">Livraison</a></li>
          <li><a href="#">Retours</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Contact</h4>
        <ul className="footer-links">
          <li><a href="#">hello@lovely.shop</a></li>
          <li><a href="#">+33 1 23 45 67 89</a></li>
          <li><a href="#">Paris, France</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <p className="footer-copyright">© 2026 Lovely Shopping. Tous droits réservés.</p>
      <div className="footer-payments">
        <CreditCard size={24} />
        <span>Visa</span>
        <span>Mastercard</span>
        <span>PayPal</span>
      </div>
    </div>
  </footer>
);

// App Principal
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <PromoBanner />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
