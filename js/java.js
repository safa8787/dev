let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

setInterval(() => {
    plusSlides(1)
}, 2000)








// Get the modal
let modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
let btn = document.getElementsByClassName("myBtn");


// When the user clicks the button, open the modal 

  // for (let i = 0; i < btn.length; i++) {
  //   btn[i].addEventListener('click', function(){

  //    modal[i].style.visibility = "visible";
  //    console.log(modal)

  //   })

   
    // function ooopen(){
      
      for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function(){
      modal[0].style.visibility = "visible";
    })
  }
    function X(){
      for (let i = 0; i < btn.length; i++) {
      modal[i].style.visibility = "hidden";
    }}
  
































    const cartButtons = document.querySelectorAll(".cart-button");
const productCarts=document.querySelectorAll('.sol-cloth')
const shoppingCart=document.querySelector(".shopping-cart")



cartButtons.forEach((button,i) =>{
    button.addEventListener("click",()=> cartClick(button,i));
});

function cartClick(button,i) {
    if(!button.classList.contains("clicked")){
    button.classList.add("clicked");

    // create image
    const image=document.createElement("img")
    image.src=productCarts[i].getElementsByTagName("img")[0].src

    // create title
    const title=document.createElement('p') 
    title.innerText=productCarts[i].querySelector('h4').innerText

    // create unit price
    const unitPrice=document.createElement('h5')
    unitPrice.innerText=productCarts[i].getElementsByTagName("h5")[1].innerText

        //  create quantity input
    const quantity=document.createElement('input')
    quantity.type="number"
    quantity.value=1
    quantity.min=1


    
    // total product
    const totalProduct=document.createElement('h5')
    totalProduct.innerText=productCarts[i].getElementsByTagName("h5")[1].innerText


    quantity.addEventListener('change',(e)=>{
        const val=e.target.value
        totalProduct.innerText=" $"+parseFloat(parseInt(unitPrice.innerText.substring(1))*val).toFixed(2)
        console.log(parseInt(unitPrice.innerText.substring(1))*val)
    })


    // create remove button
    const removeBtn=document.createElement('button')
    removeBtn.innerText="Remove"
    removeBtn.classList.add("remove-product")
    removeBtn.addEventListener('click',()=>removeBtn.parentElement.remove())


    // create DIV

    const cart=document.createElement("div")
    cart.classList.add("shop-cont")
    cart.append(image,title,unitPrice,quantity,removeBtn,totalProduct)
    const sC=document.getElementsByClassName('s-c')[0].classList.remove("hide-me-please")
    document.getElementsByTagName('h2')[0].classList.add('hide-me-please')
    shoppingCart.appendChild(cart)}
}




// ==========================================================================

const panier=document.getElementsByClassName('shopping-container')[0]

panier.addEventListener('click',()=>{
    document.getElementsByClassName('shopping-cart')[0].classList.toggle('hide-me-please')
})



























// <div class="shop-cont">
    // <img src="clothes-1.jpg">
    // <p>relaxed short full sleeve t-shirt</p>
    // <h5>$12.00</h5>
    // <input type="number" value="2" min="0">
    // <button class="remove-product">Remove</button>
    // <h5>$24.00</h5>
// </div>const cartButtons = document.querySelectorAll(".cart-button");
//const productCarts=document.querySelectorAll('.sol-cloth')
//const shoppingCart=document.querySelector(".shopping-cart")



 /*cartButtons.forEach((button,i) =>{
    button.addEventListener("click",()=> cartClick(button,i));
});

function cartClick(button,i) {
    if(!button.classList.contains("clicked")){
    button.classList.add("clicked");

    // create image
    const image=document.createElement("img")
    image.src=productCarts[i].getElementsByTagName("img")[0].src

    // create title
    const title=document.createElement('p') 
    title.innerText=productCarts[i].querySelector('h4').innerText

    // create unit price
    const unitPrice=document.createElement('h5')
    unitPrice.innerText=productCarts[i].getElementsByTagName("h5")[1].innerText

        //  create quantity input
    const quantity=document.createElement('input')
    quantity.type="number"
    quantity.value=1
    quantity.min=1


    
    // total product
    const totalProduct=document.createElement('h5')
    totalProduct.innerText=productCarts[i].getElementsByTagName("h5")[1].innerText


    quantity.addEventListener('change',(e)=>{
        const val=e.target.value
        totalProduct.innerText=" $"+parseFloat(parseInt(unitPrice.innerText.substring(1))*val).toFixed(2)
        console.log(parseInt(unitPrice.innerText.substring(1))*val)
    })


    // create remove button
    const removeBtn=document.createElement('button')
    removeBtn.innerText="Remove"
    removeBtn.classList.add("remove-product")
    removeBtn.addEventListener('click',()=>removeBtn.parentElement.remove())


    // create DIV

    const cart=document.createElement("div")
    cart.classList.add("shop-cont")
    cart.append(image,title,unitPrice,quantity,removeBtn,totalProduct)
    const sC=document.getElementsByClassName('s-c')[0].classList.remove("hide-me-please")
    document.getElementsByTagName('h2')[0].classList.add('hide-me-please')
    shoppingCart.appendChild(cart)}
}




// ==========================================================================

const panier=document.getElementsByClassName('shopping-container')[0]

panier.addEventListener('click',()=>{
    document.getElementsByClassName('shopping-cart')[0].classList.toggle('hide-me-please')
})















// <div class="shop-cont">
    // <img src="clothes-1.jpg">
    // <p>relaxed short full sleeve t-shirt</p>
    // <h5>$12.00</h5>
    // <input type="number" value="2" min="0">
    // <button class="remove-product">Remove</button>
    // <h5>$24.00</h5>
// </div>