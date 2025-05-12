const categories = [
  { name: "For You", icon: "https://via.placeholder.com/40?text=FY" },
  { name: "Grocery", icon: "https://via.placeholder.com/40?text=Gr" },
  { name: "Fashion", icon: "https://via.placeholder.com/40?text=Fa" },
  { name: "Appliances", icon: "https://via.placeholder.com/40?text=Ap" },
  { name: "Mobiles", icon: "https://via.placeholder.com/40?text=Mo" },
  { name: "Electronics", icon: "https://via.placeholder.com/40?text=El" },
  { name: "Smart Gadgets", icon: "https://via.placeholder.com/40?text=SG" },
  { name: "Home", icon: "https://via.placeholder.com/40?text=Ho" },
  { name: "Beauty & Care", icon: "https://via.placeholder.com/40?text=BC" },
];

const categoryList = document.getElementById("categoryList");

categories.forEach(cat => {
  const div = document.createElement("div");
  div.className = "category";
  div.innerHTML = `<img src="${cat.icon}" /><span>${cat.name}</span>`;
  div.onclick = () => alert(`Selected: ${cat.name}`);
  categoryList.appendChild(div);
});
