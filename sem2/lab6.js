let cart = []; 

function addToCart(productId) {
    let quantityInput = document.getElementById("quantity" + productId);
    let quantity = parseInt(quantityInput.value);

    if (quantity >= 1 && quantity <= 10) {
        for (let i = 0; i < quantity; i++) {
            cart.push(productId); 
        }
        updateCart();
        alert("Se han agregado " + quantity + " unidad(es) del Producto " + productId + " al carrito");
    } else {
        alert("Por favor, ingrese una cantidad válida entre 1 y 10.");
        quantityInput.value = 1; 
    }
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = ""; 

    let total = 0;
    let itemCount = {}; 
    for (let productId of cart) {
        let productPrice = getProductPrice(productId);
        total += productPrice;
        itemCount[productId] = (itemCount[productId] || 0) + 1; // Incrementar la cantidad de este producto en el carrito
        let listItem = document.createElement("li");
        listItem.textContent = "Producto " + productId + " - Precio: $" + productPrice.toFixed(2);
        cartItems.appendChild(listItem);
    }

    if (cart.length >= 3) {
        let discount = total * 0.10;
        total -= discount;
        alert("¡Felicidades! Se ha aplicado un descuento del 10% en su compra total.");
    }

    let iva = total * 0.13;
    let totalPayable = total + iva;

    if (itemCount[3] && itemCount[3] >= 1) {
        let message = document.createElement("p");
        message.textContent = "¡Envío gratis en compras que incluyan Producto 3!";
        cartItems.appendChild(message);
    }

    document.getElementById("total").textContent = "$" + total.toFixed(2);
    document.getElementById("iva").textContent = "$" + iva.toFixed(2);
    document.getElementById("total-payable").textContent = "$" + totalPayable.toFixed(2);
}

function getProductPrice(productId) {
    let basePrice;
    let promotion;

    switch (productId) {
        case 1:
            basePrice = 20.00;
            promotion = "Compre uno, llévese otro gratis";
            break;
        case 2:
            basePrice = 15.00;
            promotion = "20% de descuento en la siguiente compra";
            break;
        case 3:
            basePrice = 25.00;
            promotion = "Envío gratis en compras superiores a $20";
            break;
        default:
            basePrice = 0;
            promotion = "";
    }

    switch (promotion) {
        case "Compre uno, llévese otro gratis":
            return basePrice / 2;
        case "20% de descuento en la siguiente compra":
            return basePrice * 0.8;
        case "Envío gratis en compras superiores a $20":
            return basePrice >= 20.00 ? basePrice : basePrice + 5.00; 
        default:
            return basePrice;
    }
}
