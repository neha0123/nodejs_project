const https=require('https')
const url='https://api.darksky.net/forecast/1f4269abfdc6fcfb8599c27ef8fd6b0a/40,-75'
const request=https.request(url,(response)=>{
    let data=''
    response.on('data',(chunk)=>{
        data=data+chunk.toString()
//console.log(chunk)
    })
    response.on('end',()=>{
//console.log(data)
const body=JSON.parse(data)
console.log(body)
    })
})
request.on('error',(error)=>{
    console.log('an error',error)
})
request.end()