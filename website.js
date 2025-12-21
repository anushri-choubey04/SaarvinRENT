//NavBar
    // Searchbar suggestions
    const searchBox = document.getElementById("searchBox");
    const suggestions = document.getElementById("suggestions");

    const data = ["Saree", "Lehenga", "Kurta", "Western Dress", "Party Wear", "Sherwani", "Jewellery", "Handbags"];

    searchBox?.addEventListener("input", () => {
      let value = searchBox.value.toLowerCase();
      suggestions.innerHTML = "";
      if (value) {
        let filtered = data.filter(item => item.toLowerCase().includes(value));
        if (filtered.length) {
          suggestions.style.display = "block";
          filtered.forEach(item => {
            let div = document.createElement("div");
            div.textContent = item;
            div.onclick = () => {
              searchBox.value = item;
              suggestions.style.display = "none";
            };
            suggestions.appendChild(div);
          });
        } else {
          suggestions.style.display = "none";
        }
      } else {
        suggestions.style.display = "none";
      }
    });

    // Mobile menu toggle
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeMenu = document.getElementById("closeMenu");

    hamburger.addEventListener("click", () => {
      mobileMenu.classList.add("active");
    });
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });

    // Support dropdown
    document.getElementById("supportToggleBtn").addEventListener("click", () => {
      document.getElementById("supportItems").classList.toggle("active");
    });

// END OF NAVBAR








 



 
  // Quick View js code
  const quickViewButton = document.getElementById("quickViewButton");
  const products = [
  {
    id: 1,
    brand: 'MAYKR',
    category: 'Smart Casual Wear',
    price: 599,
    image: 'Hero/gown1.png'
  },
  {
    id: 2,
    brand: 'ISHRANSH',
    category: "Women's Fancy Gown",
    price: 499,
    image: 'Hero/gown2.png'
  },
  {
    id: 3,
    brand: 'FIT & FLARE',
    category: 'Designer Dresses',
    price: 799,
    image: 'Hero/lehnga3.png'
  },
  {
    id: 4,
    brand: 'ETHNIC',
    category: 'Traditional Wear',
    price: 899,
    image: 'ProductSection/IMAGES/sherwani.jpeg'
  },
  {
    id: 5,
    brand: 'STYLE',
    category: 'Stylish Collection',
    price: 699,
    image: 'Hero/lehnga2.png'
  },
  {
    id: 6,
    brand: 'LUXE WEAR',
    category: 'Premium Fashion',
    price: 999,
    image: 'ProductSection/IMAGES/sherwani2.jpeg'
  },
  {
    id: 7,
    brand: 'WEAR',
    category: 'Premium',
    price: 999,
    image: 'ProductSection/IMAGES/tuexdo.jpeg'
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
// End Quick View js code

//Video Section js code
const videos = Array.from(document.querySelectorAll(".auto-video"));
      function tryPlay(v) {
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
      }
      function onEnter(v) {
        if (!v.src && v.dataset.src) v.src = v.dataset.src;
        tryPlay(v);
      }
      function onLeave(v) {
        if (!v.paused) v.pause();
      }

      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const v = entry.target;
              if (entry.isIntersecting) onEnter(v);
              else onLeave(v);
            });
          },
          { threshold: 0.25 }
        );
        videos.forEach((v) => io.observe(v));
      } else {
        videos.forEach((v) => {
          if (v.dataset.src) v.src = v.dataset.src;
          tryPlay(v);
        });
      }

      // Tap to toggle mute/unmute
      document.addEventListener("click", (e) => {
        const v = e.target.closest("video.auto-video");
        if (!v) return;
        v.muted = !v.muted;
        tryPlay(v);
      });

      // End of Video Section js code
      

  // Footer section js code
      document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const isActive = button.classList.contains('active');
  
      document.querySelectorAll('.accordion-toggle').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.accordion-content').forEach(content => content.style.display = 'none');
  
      if (!isActive) {
        button.classList.add('active');
        content.style.display = 'block';
      }
    });
  });
  // End of Footer section js code
    
  