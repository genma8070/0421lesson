const btn = document.querySelector("#btn")
const brunch = document.querySelector("#c1")
const buffet = document.querySelector("#c2")
const rice = document.querySelector("#c3")
const noodle = document.querySelector("#c4")
const others = document.querySelector("#c5")
const result = document.querySelector("#result")

fetch("mealList.json").then(function(response){

    return response.json();
})
.then(function(data){
    mealList =[...data];
    console.log(mealList);

})
.catch(function(error){
    console.log(error);
})


// const mealList = [
//     {
//         "name": "食在一方",
//         "category": ["brunch"],
//         "filter": false
//     },
//     {
//         "name": "日十",
//         "category": ["brunch"],
//         "filter": false
//     },
//     {
//         "name": "鹽行站",
//         "category": ["buffet", "rice"],
//         "filter": false
//     },
//     {
//         "name": "鍋燒麵",
//         "category": ["noodle"],
//         "filter": false
//     },
//     {
//         "name": "炒飯",
//         "category": ["rice"],
//         "filter": false
//     },
//     {
//         "name": "八方雲集",
//         "category": ["others"],
//         "filter": false
//     },
//     {
//         "name": "火鍋",
//         "category": ["others"],
//         "filter": false
//     },
//     {
//         "name": "韓式料理",
//         "category": ["rice", "noodle"],
//         "filter": false
//     },
//     {
//         "name": "小飯糰大飯糰",
//         "category": ["rice"],
//         "filter": false
//     },
//     {
//         "name": "後校門滷肉飯",
//         "category": ["rice", "noodle"],
//         "filter": false
//     },
//     {
//         "name": "魚耶",
//         "category": ["brunch", "rice", "noodle"],
//         "filter": false
//     },
//     {
//         "name": "吳家鴨香飯",
//         "category": ["rice", "noodle"],
//         "filter": false
//     }
// ]

const checkList = [brunch,buffet,rice,noodle,others]

let getList = []
let trueList = []


btn.addEventListener("click",function(){
    let getList = []
    let trueList = []
    //找勾選的選項
    trueList = checkList.filter(function(i){
    
        console.log(i.checked)
        if((i.checked) === true){
            return i;
        }
   
   })
   console.log(trueList)
   
   
   //從勾選的選項中去找出相對應的餐廳
   trueList.forEach(function(i){
    console.log(i)
    mealList.forEach(function(j){
        console.log(j)
        j.category.forEach(function(x){
            if(x === (i.value)){
                console.log(x)
                getList.push(j.name) ;
            }
        })
        })
   })
   console.log(getList)
    
    // console.log(getList[Math.floor(Math.random()*(getList.length))])
    if(trueList.length === 0){
        result.innerText = "至少勾選一個選項拉哭喔"
    }
    else{
    result.innerText = getList[Math.floor(Math.random()*(getList.length))] 
    console.log(result)
   }
})


// mealList.forEach(function(i){
// console.log(i.name);

// })




















//     console.log(divorce.result.records[3].sex)
    
//     divorce.result.records.forEach((i) => {
//         console.log(i.marry_count);
//     })



// const person = {
//     name: ["genma",
//             "maboroshin"
// ],
//     age: 24,
//     email: "oshiemasen7414@gmail.com",
//     address: "assassin"
// }

// console.log(person);
// console.log(person["name"]);
// console.log(person.age);





