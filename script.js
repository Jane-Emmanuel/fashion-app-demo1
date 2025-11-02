// Auto-load products and config data
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const config = await fetch("data/config.json").then(r => r.json());
    const products = await fetch("data/products.json").then(r => r.json());

    const productList = document.getElementById("product-list");
    const whatsapp = config.whatsapp || "08108179570";

    products.forEach(p => {
      const item = document.createElement("div");
      item.className = "product";
      item.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <div class="product-details">
          <h3>${p.name}</h3>
          <span class="price">${config.currency}${p.price}</span>
          <a href="https://wa.me/${whatsapp}?text=Hi! I'm interested in ${p.name} (${p.price}${config.currency})"
             class="buy-btn" target="_blank">Contact via WhatsApp</a>
        </div>
      `;
      productList.appendChild(item);
    });
  } catch (err) {
    console.error("Error loading data:", err);
  }
});
