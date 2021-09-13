var num = 56;

//!..................................1

// if(num == 2){
//     console.log(num*2);
// }
// else if(num == 5){
//     console.log(num*5);
// }
// else if(num == 7){
//     console.log(num*7);
// }
// else if(num == 10){
//     console.log(num*10);
// }
// else{
//     console.log(num);
// }

//!..................................3

// switch (num) {
//     case 1:
//         console.log("sunday");
//         break;
//     case 2:
//         console.log("monday");
//         break;
//     case 3:
//         console.log("tuesday");
//         break;
//     case 4:
//         console.log("wednesday");
//         break;
//     case 5:
//         console.log("thursday");
//         break;
//     case 6:
//         console.log("friday");
//         break;
//     case 7:
//         console.log("saturday");
//         break;
//     default:
//         console.log("NaN");
//         break;
// }

//!.................................4

// userObject = {
//     name: "shalom",
//     email: "shalom@shlomo.com",
//     userType: "admin"
// }

// switch(userObject.userType){
//     case "client":
//         console.log("you are our loyal client");
//         break;
//     case "admin":
//         console.log("you are admin");
//         break;
//     default:
//         console.log( "you are a super admin");

// }

//!.................................5

// var fruits = document.getElementsByClassName("fruits");

// for (let i = 0; i < fruits.length; i++) {
//   fruits[i].onclick = () => {fruitByBtn(fruits[i].innerText)};
// }

// function fruitByBtn(fruit) {
//   switch (fruit) {
//     case "Apple":
//       console.log("Apple");
//       break;

//     case "Banana":
//       console.log("Banana");
//       break;

//     case "Cocus":
//       console.log("cocus");
//       break;

//     case "Melon":
//       console.log("Melon");
//       break;

//     case "Avocado":
//       console.log("Avocado");
//   }
// }


//!.................................6

var cars = [
    {
        model: "volvo",
        year: 2015,
        price: 20000,
        discount: 3,
        img:"https://cdn.pixabay.com/photo/2017/06/12/16/24/volvo-2396040__340.jpg"
    },

    {
        model: "toyota",
        year: 2001,
        price: 100000,
        discount: 25,
        img:"https://cdn.pixabay.com/photo/2021/09/06/19/03/luxury-car-6602359__340.jpg"
    },
    
    {
        model: "BMW",
        year: 2015,
        price: 80000,
        discount: 7,
        img:"https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408__340.jpg"
    },

    {
        model: "reno",
        year: 2018,
        price: 15000,
        discount: 10,
        img:"https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__340.jpg"
    },

    {
        model: "mitsubishi",
        year: 2021,
        price: 200000,
        discount: 3,
        img:"https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220__340.jpg"
    }
]


var container = document.getElementById("container")
var discountShow

for (let i = 0; i < cars.length; i++) {
    switch (cars[i].discount){
        case 3:
            discountShow = "this is joke"
            break;
        case 7:
            discountShow = "not bad"
            break;
        case 10:
            discountShow = "good deal for you"
            break;
        case 25:
            discountShow = "crazy sell"
    }

    container.innerHTML += 
    `<article> <img src="${cars[i].img}"><br>
    <p>regular price: ${cars[i].price}<br>
    discount price: ${cars[i].price-cars[i].price/100*cars[i].discount}
    <h1>${discountShow}</h1></p><br><br></article>`

}


