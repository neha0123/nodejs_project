/*setTimeout(()=>{
    console.log('2 timer out')},2000
)
const names=['neha','sanju','himi','rajjo']
const shortnames=names.filter((name)=>{
    return names.length<=4
})
const geocode=(address,callback)=>{
    setTimeout(()=>{
        const data={
            latitude:0,
            longitude:0
        }
        callback(data)
    },2000)
    
}
geocode('india',(data)=>{
    console.log(data)
})*/


//challenge based on callback function
const add=(a,b,callback)=>{
setTimeout((add)=>{
    callback(a+b)//define asynchronous function
},2000)}
add(1, 4,(sum)=>{
    console.log(sum)
})
