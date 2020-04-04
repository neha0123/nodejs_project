const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url='https://api.darksky.net/forecast/1f4269abfdc6fcfb8599c27ef8fd6b0a/'+latitude+','+longitude


request({url,json:true},(error,{body})=>{
    if(error){
        callback('unable to find the location',undefined)
    }else if(body.error){
        callback('wrong url ',undefined)}
        else{
            callback(undefined,
                body.daily.data[0].summary+"It is currently "+body.currently.temperature+" degrees out." +"There is a "+body.currently.precipProbability+ "% chances of rain")
        }
    
       })
    
}
module.exports=forecast