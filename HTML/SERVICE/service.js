document.addEventListener('DOMContentLoaded', function () {
const services = [
  {
    id: 1,
    title: 'BROWSE',
    description: 'Explore our curated collection of designer wear',
    icon: 'search',
    benefits: [
      'Wide range of designer outfits',
      'Latest fashion trends',
      'Multiple size options',
      'High-quality fabrics'
    ]
  },
  {
    id: 2,
    title: 'FILTER',
    description: 'Find the perfect outfit for your occasion',
    icon: 'filter',
    benefits: [
      'Sort by occasion',
      'Filter by size & price',
      'Choose rental duration',
      'Compare similar styles'
    ]
  },
  {
    id: 3,
    title: 'BORROW',
    description: 'Rent your favorite pieces hassle-free',
    icon: 'package',
    benefits: [
      'Secure payment options',
      'Flexible rental periods',
      'Free delivery & pickup',
      'Damage protection included'
    ]
  },
  {
    id: 4,
    title: 'RETURN',
    description: 'Easy returns with free pickup',
    icon: 'rotate-ccw',
    benefits: [
      'No cleaning required',
      'Scheduled pickup',
      'Quick refunds',
      'Hassle-free process'
    ]
  }
];

const grid = document.getElementById('serviceGrid');

services.forEach(service => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <div class="front">
      <div class="card-icon">
        <div class="card-icon-inner">
          <i class="lucide lucide-${service.icon}" style="color: white;"></i>
        </div>
      </div>
      <h3 class="text-2xl font-bold mb-4">${service.title}</h3>
      <p>${service.description}</p>
    </div>
    <div class="back">
      <h3 class="text-2xl font-bold mb-4">${service.title}</h3>
      <ul>
        ${service.benefits.map(b => `
          <li>
            <i class="lucide lucide-shield"></i>
            <span>${b}</span>
          </li>`).join('')}
      </ul>
    </div>
    <div class="card-number">${service.id}</div>
  `;

  grid.appendChild(card);
});

lucide.createIcons(); // Activate all icons
});