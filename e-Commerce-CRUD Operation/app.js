
async function products() {

    // let resp = await fetch("https://fakestoreapi.com/products");
    let resp = await fetch("JSONdata.json");

    let dataa = await resp.json();


    displayData(dataa);

    // return dataa ; //we have directly displayed over the screen so no need to return received data to function.

}

products().catch(err => console.log(err));




//Displaying data -

function displayData(dataa) {

    //Using forEach loop -

    dataa.forEach((element, index) => {
        // console.log(index);
        // console.log(element.title);
        // console.log(element.price); 

//Let'structure the object items i.e current object 'element' here for our easy work -
    let {id, title, image, price} = element;


    let eachProduct = `

        <div class="product" id="${element.id}">

           <img src="${element.image}" alt="">
           <p class="title"> ${element.title}</p>
           <p class="price">
                <span>${element.price}</span>
               <span>&euro;</span>
           </p>

           <button  onclick="addToCart( '${id}' , '${title}' , '${image}' , '${price}' )" > Add To Cart <span>&#x1F6D2;</span></button> 
 
       </div>      ` ;

        // Note : For image and string type data, must pass it in quotes - to access these, else give error.


        document.querySelector(".products-container").insertAdjacentHTML('beforeend', eachProduct);

    

    })
}

//Note : To work with two seperate HTML page or For two seperate HTML page, you cant call one HTML page element to other html page, Works on same page. To work like this, put this data in a state or in storage i.e DB, cookies, local or session storage. //this data can be in a state, or DB.


//Now storing data into local storage for getting/fetching same at cart page -

let basket = JSON.parse(localStorage.getItem("cartData")) || [ ] ; //Here, we have trying to access/get the already exist 'cartData' in the 'basket' varibale if there present and if not present there then asssign an empty array [] into the basket variable.


  let addToCart = (id, title, image, price)=>{

    // console.log(title);
    // console.log(image);
    // console.log(price);

    basket.push({
        id:id,
        title:title,
        image:image,
        price:price
    }); //passing data as object to basket and later we covert into JSON string while sending it to local storage.


    localStorage.setItem("cartData", JSON.stringify(basket));

    cartCount(); //To get cart number update simultaneouly, No need to refresh the page to see updated cart number.

  
    };


//For updating the cart count Number -  
function cartCount(){

document.getElementById("cartCount").innerHTML= basket.length;
}

cartCount();






















