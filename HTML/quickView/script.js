const products = [
  {
    id: 1,
    brand: 'MAYKR',
    category: 'Smart Casual Wear',
    price: 599,
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=600&fit=crop'
  },
  {
    id: 2,
    brand: 'ISHRANSH',
    category: "Women's Fancy Footwear",
    price: 499,
    image: 'https://images.unsplash.com/photo-1585487000143-9bcec9b8e483?w=400&h=600&fit=crop'
  },
  {
    id: 3,
    brand: 'FIT & FLARE',
    category: 'Designer Dresses',
    price: 799,
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&h=600&fit=crop'
  },
  {
    id: 4,
    brand: 'ETHNIC PLUS',
    category: 'Traditional Wear',
    price: 899,
    image: 'https://images.unsplash.com/photo-1594387303881-0c0bd29c0e10?w=400&h=600&fit=crop'
  },
  {
    id: 5,
    brand: 'URBAN STYLE',
    category: 'Casual Collection',
    price: 699,
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=600&fit=crop'
  },
  {
    id: 6,
    brand: 'LUXE WEAR',
    category: 'Premium Fashion',
    price: 999,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop'
  }
];

// Inject products
const productList = document.getElementById('product-list');

products.forEach(product => {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.brand}" />
    </div>
    <div class="product-info">
      <h3>${product.brand}</h3>
      <p>${product.category}</p>
      <p class="price">Under ₹${product.price}</p>
    </div>
  `;
  productList.appendChild(slide);
});

// Initialize Swiper
new Swiper('.swiper', {
  slidesPerView: 1.2,
  spaceBetween: 16,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    480: { slidesPerView: 1.5 },
    640: { slidesPerView: 2.2 },
    768: { slidesPerView: 2.5 },
    1024: { slidesPerView: 3.2 },
    1280: { slidesPerView: 4.2 }
  }
});
