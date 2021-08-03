const newArray =[
    {pageviews: '10K PAGEVIEWS',
    price: '8'},
    {pageviews: '50K PAGEVIEWS',
    price: '12'},
    {pageviews: '100K PAGEVIEWS',
    price: '16'},
    {pageviews: '500K PAGEVIEWS',
    price: '24'},
    {pageviews: '1M PAGEVIEWS',
    price: '36'},
]



const myCheckbox = document.querySelector('.checkbox');

const duration = document.querySelector(".price-container .per-month");

const price = document.querySelector('.price-container .price');

const secDuration = document.querySelector(".secondary-price-container  .per-month");

const secPrice = document.querySelector(".secondary-price-container .price");

const range = document.getElementById("myrange");

const pageViews = document.querySelector('.pageviews');


myCheckbox.onclick = ( ) => {
let value = range.value;
const item = newArray[value];
 if (myCheckbox.checked == true){
     price.textContent = `${((item.price * .75) * 12)}`
     secPrice.textContent =` ${((item.price * 0.75) * 12)}`;
     duration.textContent = `/year`;
     secDuration.textContent =`/year`;
 } else {
    price.textContent = item.price;
    secPrice.textContent = item.price;
    secDuration.textContent =`/month`;
    duration.textContent = `/month`;
 }
}



const conditionals = ( ) => {
range.oninput = () => {
    let value = range.value;
    const item = newArray[value];
    if(value == 0){
        if(myCheckbox.checked == true){
            price.textContent = 72;
            secPrice.textContent = 72;
        }else{
            price.textContent = item.price;
            secPrice.textContent = item.price;
        }
        pageViews.textContent = item.pageviews;
    }

    if(value == 1){
        if(myCheckbox.checked == true){
            price.textContent = 108;
            secPrice.textContent = 108;
        }else{
            price.textContent = item.price;
            secPrice.textContent = item.price;
        }
        pageViews.textContent = item.pageviews;
    }

    if(range.value == 2){
        if(myCheckbox.checked == true){
            price.textContent = 144;
            secPrice.textContent = 144;
        }else{
            price.textContent = item.price;
            secPrice.textContent = item.price;
        }
        pageViews.textContent = item.pageviews;
    }

    if(value == 3){
        if(myCheckbox.checked == true){
            price.textContent = 216;
            secPrice.textContent = 216;
        }else{
            price.textContent = item.price;
            secPrice.textContent = item.price;
        }
        pageViews.textContent = item.pageviews;
    }

    if(value == 4){
        if(myCheckbox.checked == true){
            price.textContent = 324;
            secPrice.textContent = 324;
        }else{
            price.textContent = item.price;
            secPrice.textContent = item.price;
        }
        pageViews.textContent = item.pageviews;
    }
}
}
 conditionals();
