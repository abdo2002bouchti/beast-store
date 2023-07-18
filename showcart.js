var cart =[];

   const savedCart = localStorage.getItem('cart');
if (savedCart) {
  cart = JSON.parse(savedCart);
}


    function addtocart(a){
        cart.push({...cart[a]});
        saveCart();
        displaycart();
    }

    function delElement(a){
        cart.splice(a,1);
        saveCart();
        displaycart();
    }



    function displaycart(a){
        let j=0;
        let total =0;
        document.getElementById("count").innerHTML = cart.length;
        if(cart.length==0){
        document.getElementById("cartItem").innerHTML = "Votre panier est vide";
        document.getElementById('total').innerHTML = 'DH ' + total.toFixed(2);

        }else {

            document.getElementById("cartItem").innerHTML = cart.map((items,index)=>
            {
                var {image, title , price, quantity } =items;
                total += price*quantity;
                document.getElementById("total").innerHTML= "DH "+total+".00";
                return(
                    `<div class="cart-item">
                    <div class="row-img"> 
                    <img class="rowing" src=${image} >
                    </div>
                    <p style="font-size:18px;width:150px;margin-right:10px">${title}</p>
                    <h2 style="font-size:15px;">${price} Dh</h2>
                    <div class="quantity-input">
                <button onclick="decreaseQuantity(${index})">-</button>
                <input type="number" min="1" value="${quantity}" onchange="updateQuantity(${index}, this.value)">
                <button onclick="increaseQuantity(${index})">+</button>
              </div>
                    `+
                    "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"

                );
            }).join('')
        }
    }
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
      }

      function updateQuantity(index, newQuantity) {
        cart[index].quantity = parseInt(newQuantity, 10);
        saveCart();
        displaycart();
      }
      
      function increaseQuantity(index) {
        cart[index].quantity += 1;
        saveCart();
        displaycart();
      }
      
      function decreaseQuantity(index) {
        if (cart[index].quantity > 1) {
          cart[index].quantity -= 1;
          saveCart();
          displaycart();
        }
      }

    document.addEventListener("DOMContentLoaded", function () {
        displaycart();
      });
