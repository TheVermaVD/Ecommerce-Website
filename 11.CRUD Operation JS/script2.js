async function products() {

    // let resp = await fetch("https://fakestoreapi.com/products");
    let resp = await fetch("JSONdata.json");

    let dataa = await resp.json();


    displayData(dataa);

    // return dataa ; //we have directly displayed over the screen so no need to return received data to function.

}

products().catch(err => console.log(err));


function displayData(dataa){


      for (let v in dataa) {

    //     // console.log(dataa[v].title);
    //     // document.write(`${dataa[v].title} --  ${dataa[v].price} <br>`)
        // document.write(`<img src=""  >`)

        htmlEachProduct = `

         <div class="product" id="${dataa[v].id}">

            <img src="${dataa[v].image}" alt="">
            <p class="title"> ${dataa[v].title}</p>
            <p class="price">
                 <span>${dataa[v].price}</span>
                <span>&euro;</span>
            </p>

            <button onclick="addToCart(\` ${dataa[v].description} \`) ">Add to cart<span>&#x1F6D2;</span></button> 
            
  
        </div>      ` ;

           
        document.querySelector(".products-container").innerHTML += htmlEachProduct;


    }


}



function addToCart(desc){

    // console.log(id);
    // console.log(price);
    console.log(desc);

}


