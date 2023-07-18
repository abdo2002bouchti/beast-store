
const product = [
    {
        id:0,
        image :'images/coffe.jpg',
        title : "Dark coffe ",
        price : 120, 
        link : "description.html",
        quantity: 1,
    },
    {
        id:1,
        image :"images/examle.jpg",
        title : "No one can touche you ",
        price : 150, 
        link : "description.html",
        quantity: 1,
    },
    {
        id:2,
        image :"images/examle.jpg",
        title : "One can touche you ",
        price : 230, 
        link : "description.html",
        quantity: 1,
    },
    {
        id:3,
        image :"images/nat.jpg",
        title : "yup he s death",
        price : 233, 
        link : "description.html",
        quantity: 1,
    },
]

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image , title , price , link} = item;
        return(
            `<div class="product-card" >
            <a href=${link}>
             <img src=${image} alt="nike" class="product-image"></a>
            <div class="half-white">
            <h3 class="product-name">${title}</h3>
            <p class="product-price">${price} DH</p>` +
            "<button onclick='addtocart("+(i++)+")' class='button-cart'>Add to cart</button>"+
        ` </div>
     </div>`
        )
    }).join('');

    var cart =[];
    
   const savedCart = localStorage.getItem('cart');
if (savedCart) {
  cart = JSON.parse(savedCart);
}


function addtocart(a) {
    const selectedItem = categories[a];
  
    // Check if the item already exists in the cart
    const isItemInCart = cart.some((item) => item.id === selectedItem.id);
  
    if (isItemInCart) {
      // Show a message that the item is already in the cart
      alert("This item is already in your cart.");
    } else {
      cart.push({ ...selectedItem });
      saveCart();
      displaycart();
    }
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
        document.getElementById("total").innerHTML = "DH "+0+".00";
        }else {

            document.getElementById("cartItem").innerHTML = cart.map((items)=>
            {
                var {image, title,price} =items ;
                total=total+price;
                document.getElementById("total").innerHTML= "DH "+total+".00";
                return(
                    `<div class="cart-item">
                    <div class="row-img"> 
                    <img class="rowing" src=${image} >
                    </div>
                    <p style="font-size:15px;">${title}</p>
                    <h2 style="font-size:15px;">${price} Dh</h2>
                    `+
                    "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"

                );
            }).join('')
        }
    }
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        
      }

    document.addEventListener("DOMContentLoaded", function () {
        displaycart();
      });
console.log(cart);

