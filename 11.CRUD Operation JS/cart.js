
//Cart Page - Javscript -

//1. Updating the cart count number -

function cartCount() {

    basket = JSON.parse(localStorage.getItem("cartData")) || []; //reason why I'd make 'basket' as global variable bcz I have to access this at many places.

    document.getElementById("cartCount").innerHTML = basket.length;

    if (basket.length == 0) {

        document.querySelector(".cart-Container").innerHTML = `<h3 id="empty">Your Shopping Cart Is Empty.. &#128021; &#128722; Please Add Some!</h3>`;

        let checkout = document.getElementById("checkout");

        checkout.setAttribute("disabled", "");



    }

    // console.log(basket.length);
    // console.log(basket);

}

cartCount();

//2.fetching/rendering the added items from local storage to the cartHTML page -

function renderingCartItems() {

    // console.log(basket);// received Array data from local storage.

    basket.forEach(element => {

        //Doing Object destructing -
        let { id, title, image, price } = element;

        let cartHtml = `   

        <div class="item">

            <p class='title'>${title}</p>
            <img src="${image}" alt="">
            <p class="price">
                <span>&euro;</span>
                <span>${price}</span>     
            </p> 
            
            <button onclick= "removeItem( event , '${id}'  ) ">Remove</button>

         </div>
    
                `;

        let cartContainer = document.querySelector(".cart-Container");

        cartContainer.insertAdjacentHTML('beforeend', cartHtml);

    })


}

renderingCartItems();


//3.Defining Remove button function - (Remove item from the cart)


function removeItem(event, product_id) {


    event.target.parentElement.remove();

    // console.log(basket);

    let updated_basket = basket.filter(item => item.id != product_id);

    // console.log(updated_basket);

    localStorage.setItem("cartData", JSON.stringify(updated_basket));

    cartCount();

    totalPrice();

}

//4. SubTotal Price Function -

function totalPrice() {

    console.log(basket);


    let priceArray = basket.map(element => Number(element.price));

    let totalAmount = priceArray.reduce((Total, currentValue) => Total + currentValue, 0);

    console.log(totalAmount.toFixed(2));

    document.querySelector("Span.subTotal").innerHTML = totalAmount.toFixed(2);



}

totalPrice();

// console.log(document.querySelector(".price"));



if (basket.length == 0) {


}

// console.log(checkout);













