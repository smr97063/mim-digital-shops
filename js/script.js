const products=[
 {id:1,name:"Premium T-Shirt",cat:"Fashion",price:650,icon:"👕"},
 {id:2,name:"Stylish Hoodie",cat:"Fashion",price:1200,icon:"🧥"},
 {id:3,name:"Smart Watch",cat:"Fashion",price:1850,icon:"⌚"},
 {id:4,name:"Digital Template Pack",cat:"Digital",price:450,icon:"📁"},
 {id:5,name:"Website UI Kit",cat:"Digital",price:900,icon:"💻"},
 {id:6,name:"Social Media Bundle",cat:"Digital",price:550,icon:"📱"},
 {id:7,name:"Casual Sneakers",cat:"Fashion",price:1500,icon:"👟"},
 {id:8,name:"E-book Collection",cat:"Digital",price:300,icon:"📚"}
];
let cart=[],activeFilter="All";
function renderProducts(){
 let list=products.filter(p=>activeFilter==="All"||p.cat===activeFilter);
 const sort=document.getElementById("sort").value;
 if(sort==="low") list.sort((a,b)=>a.price-b.price);
 if(sort==="high") list.sort((a,b)=>b.price-a.price);
 document.getElementById("products").innerHTML=list.map(p=>`
 <article class="product"><div class="pic">${p.icon}</div><div class="info">
 <small>${p.cat}</small><h3>${p.name}</h3><div class="price">৳${p.price}</div>
 <button onclick="addToCart(${p.id})">Add to Cart</button></div></article>`).join("");
}
function filterProducts(cat){activeFilter=cat;renderProducts();location.hash="shop"}
function addToCart(id){let p=products.find(x=>x.id===id);cart.push(p);updateCart();alert(p.name+" added to cart");}
function updateCart(){document.getElementById("cartCount").textContent=cart.length;document.getElementById("cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-row"><span>${p.name}</span><b>৳${p.price} <button onclick="removeCart(${i})">×</button></b></div>`).join(""):"<p>Your cart is empty.</p>";document.getElementById("cartTotal").textContent=cart.reduce((s,p)=>s+p.price,0)}
function removeCart(i){cart.splice(i,1);updateCart()}
function openCart(){updateCart();document.getElementById("cartModal").style.display="flex"}
function closeCart(){document.getElementById("cartModal").style.display="none"}
function showLogin(){document.getElementById("loginModal").style.display="flex"}
function closeLogin(){document.getElementById("loginModal").style.display="none"}
function checkout(){if(!cart.length)return alert("Your cart is empty.");alert("Checkout demo ready. Connect backend + bKash/Nagad/Stripe/SSLCommerz for real payments.")}
renderProducts();