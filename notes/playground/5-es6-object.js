//object shorthand property
const name="neha"
const userage="20"

const user={
    name,
    userage,
    location:'india'
}
console.log(user)
//object destructuing
const product= {
    label:'red notebook',
    price:3,
    stock:201,
    saleprice:undefined
}
const {stock,price,rate=5}=product
console.log(stock)
console.log(price)
console.log(rate)
const tranction=(type,{stock,label}={})=>{
    console.log(type,stock,label)
}
tranction('order',product)