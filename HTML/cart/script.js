const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartModal = document.getElementById('cartModal');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const emptyMessage = document.getElementById('emptyMessage');

let cart = [
  {
    id: '1',
    name: 'Maxi Dress',
    price: 1499,
    deposit: 300,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1585487000143-9bcec9b8e483?w=200&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'Party Gown',
    price: 2499,
    deposit: 500,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=200&h=300&fit=crop'
  }
];

function renderCart() {
  cartItemsContainer.innerHTML = '';
  if (cart.length === 0) {
    cartItemsContainer.classList.add('hidden');
    emptyMessage.classList.remove('hidden');
    updateSummary();
    return;
  }

  cartItemsContainer.classList.remove('hidden');
  emptyMessage.classList.add('hidden');

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="item-info">
        <h4>${item.name}</h4>
        <p>₹${item.price} + ₹${item.deposit} deposit</p>
        <div class="quantity-control">
          <button onclick="changeQuantity('${item.id}', -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="changeQuantity('${item.id}', 1)">+</button>
        </div>
        <button onclick="removeItem('${item.id}')">Remove</button>
      </div>
    `;
    cartItemsContainer.appendChild(div);
  });

  updateSummary();
}

function updateSummary() {
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const deposit = cart.reduce((sum, i) => sum + i.deposit * i.quantity, 0);
  const convenienceFee = cart.length > 0 ? 99 : 0;
  const total = subtotal + deposit + convenienceFee;

  document.getElementById('subtotal').textContent = `₹${subtotal}`;
  document.getElementById('deposit').textContent = `₹${deposit}`;
  document.getElementById('fee').textContent = `₹${convenienceFee}`;
  document.getElementById('total').textContent = `₹${total}`;
}

function changeQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.quantity = Math.max(1, Math.min(5, item.quantity + delta));
  renderCart();
}

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  renderCart();
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  alert("Order placed successfully!");
  cart = [];
  renderCart();
}

function closeCart() {
  cartModal.classList.add('hidden');
}

openCartBtn.onclick = () => {
  cartModal.classList.remove('hidden');
  renderCart();
};

closeCartBtn.onclick = closeCart;
