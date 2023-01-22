var index = 1;
var index0 = 0;
var index1 = 0;
var added = false;
var deleted = false;
var nsrc = 1
const src = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"]
var quantity = document.getElementById("quantity")
const plus = document.getElementById("plus")
const minous = document.getElementById("minous")
const oper = document.getElementById("operation")
const total = document.getElementById("total")
quantity.textContent = "0"

function hideimages(event){
    if(event.target.tagName.toLowerCase() == 'path'){
        console.log(event.target)
        event.target.parentElement.parentElement.parentElement.style.display = "none"
    }

    else if(event.target.tagName.toLowerCase() == 'svg'){
        console.log(event.target)
        event.target.parentElement.parentElement.style.display = "none"
    }
    document.getElementsByClassName("root")[0].style.opacity = "1"
    nsrc = 1
}

function showimage(event){
    document.getElementsByClassName("root")[0].style.opacity = "0.3"
    document.getElementsByClassName("product_images2")[0].style.opacity = "1"
    document.getElementsByClassName("product_images2")[0].style.display = "flex"
    document.getElementsByClassName("img")[0].children[0].src = event.target.src.replace("-thumbnail","")
    
}


document.getElementsByClassName("cart")[0].addEventListener("click",(event) => {
        

    if(index % 2 == 1){
        document.body.style.overflow = 'hidden'
        document.getElementsByClassName('cart-box')[0].style.animation = 'scale-up-ver-top 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'
        document.getElementsByClassName('cart-box')[0].style.display ='block';index+=1
    }

    else{
        document.body.style.overflow = "visible"
        document.getElementsByClassName('cart-box')[0].style.animation = 'animation:scale-out-ver-top .5s cubic-bezier(.55,.085,.68,.53) both;animation:scale-out-ver-top .5s cubic-bezier(.55,.085,.68,.53) both'
        document.getElementsByClassName('cart-box')[0].style.display ='none';
        index+=1
    }
})


document.getElementById("remove").addEventListener("click", (event) =>{
    added = false
    quantity.textContent = "0"
    document.getElementsByClassName("nproduct")[0].textContent = quantity.textContent
    event.target.parentElement.parentElement.parentElement.style.display = "none"
    document.getElementById("empty").style.display = "flex"
    
})


plus.addEventListener("click", (event) =>{
    quantity.textContent = parseInt(quantity.textContent) + 1
})

minous.addEventListener("click", (event) =>{
    if(quantity.textContent != "0"){
        quantity.textContent = parseInt(quantity.textContent) - 1
}})

document.getElementsByClassName("add-to-cart")[0].addEventListener("click",(event)=>{
    if(quantity.textContent == "0"){
        document.getElementsByClassName("notempty")[0].style.display = "none"
        document.getElementById("empty").style.display = "flex"
        deleted = true
        added = false
    }

    if(quantity.textContent != "0"){
        document.getElementsByClassName("notempty")[0].style.display = "flex"
        document.getElementById("empty").style.display = "none"
        deleted = false
        added = true
    }

    if(quantity.textContent == "0" && added == false && deleted == false){
    quantity.textContent = parseInt(quantity.textContent) + 1;    
    document.getElementById("empty").style.display = "none"
    document.getElementsByClassName("notempty")[0].style.display = "flex"
    };

    document.getElementsByClassName("nproduct")[0].textContent = quantity.textContent;
    total.textContent = "$" + parseFloat(parseFloat(document.getElementsByClassName("current_price")[0].children[0].textContent.split("$")[1]) * parseFloat(quantity.textContent))
    oper.textContent = document.getElementsByClassName("current_price")[0].children[0].textContent + " x " + quantity.textContent + " "
    document.getElementsByClassName("nproduct")[0].style.transition = "1s"
    document.getElementsByClassName("nproduct")[0].style.backgroundColor = "hsl(25, 100%, 94%)"
    setTimeout(()=>{document.getElementsByClassName("nproduct")[0].style.backgroundColor = "hsl(26, 100%, 55%)"},1000)
})

document.getElementsByClassName("arrow")[0].addEventListener("click", (event) => {
    console.log(nsrc)
    if(nsrc == 0){
        nsrc = 3
        document.getElementsByClassName("img")[0].children[0].src = src[3]
    }

    else{
        nsrc -= 1
        document.getElementsByClassName("img")[0].children[0].src = src[nsrc]
    }
    console.log(nsrc)

})

document.getElementsByClassName("arrow")[1].addEventListener("click", (event) => {
    console.log(nsrc)
    if(nsrc == 3){
        nsrc = 0
        document.getElementsByClassName("img")[0].children[0].src = src[0]
    }

    else{
        nsrc += 1
        document.getElementsByClassName("img")[0].children[0].src = src[nsrc]
    }

    console.log(nsrc)
})

document.getElementsByClassName("arrow")[2].addEventListener("click", (event) => {
    if(nsrc == 0){
        nsrc = 3
        document.getElementsByClassName("img")[1].children[0].src = src[3]
    }

    else{
        nsrc -= 1
        document.getElementsByClassName("img")[1].children[0].src = src[nsrc]
    }
    console.log(nsrc)

})

document.getElementsByClassName("img")[1].children[0].addEventListener("click",(event)=>{
    document.getElementsByClassName("arrow")[2].style.display = "flex";
    document.getElementsByClassName("arrow")[3].style.display = "flex";
    setTimeout(()=>{
        document.getElementsByClassName("arrow")[2].style.display = "none";
        document.getElementsByClassName("arrow")[3].style.display = "none";
    },3000)
})

document.getElementsByClassName("arrow")[3].addEventListener("click", (event) => {
    if(nsrc == 3){
        nsrc = 0
        document.getElementsByClassName("img")[1].children[0].src = src[0]
    }

    else{
        nsrc += 1
        document.getElementsByClassName("img")[1].children[0].src = src[nsrc]
    }

    console.log(nsrc)
})

document.getElementsByClassName("nav-key")[0].addEventListener("click",(event) => {
    index0+=1;
    if(index0 % 2 == 1){
        document.getElementsByClassName('root')[0].style.opacity = "0.3";
        document.getElementsByClassName("linkmobile")[0].style.display = "flex"
        document.getElementsByClassName("mur")[0].style.display = "block"
        document.getElementsByClassName('cart-box')[0].style.display ='none';
        index++;
    }
})

document.getElementsByClassName("close-link")[1].children[0].addEventListener("click",(event) => {
    console.log("hfuhuhuuh")
    index0+=1;
    if(index0 % 2 == 0){
        document.getElementsByClassName('root')[0].style.opacity = "1";
        document.getElementsByClassName("mur")[0].style.display = "none"
        document.getElementsByClassName("linkmobile")[0].style.display = "none"

    }
})