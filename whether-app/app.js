const request=require('request')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
const address=process.argv[2]
console.log(address)
if(!address){
    console.log('please provide address')
}
else{
    geocode(address ,(error,{latitude,longitude,location})=>{

        if(error){
            return console.log(error)//you can use either return or else statement bcz by using return in stop here.if there is an error in geocode so forecast function also no run
        }
    //console.log('Error',error)
    //console.log('Data',data)
    forecast(longitude,latitude, (error,forecaseData)=>{
        if(error){
           return  console.log(error)
        }
        console.log(location)
        console.log(forecastData)
        //console.log('error',error)
        //console.log('data',data)
    })
    
    })
    
}
/*const url='https://api.darksky.net/forecast/1f4269abfdc6fcfb8599c27ef8fd6b0a/37.8267,-122.4233?lang=en'
request({url:url,json:true},(error,response)=>{
    //console.log(response)
    //const data=JSON.parse(response.body)
//console.log(response.body.timezone)
if(error){
    console.log('unable to connect to whether service!')//low level error generate due to lost of network.
}
else if(response.body.error) {
    console.log('unable to find location')// error occur due to given wrong url
}
else
{
console.log(response.body.daily.data[0].summary+"It is currently "+response.body.currently.temperature+" degrees out." +"There is a "+response.body.currently.precipProbability+ "% chances of rain")
}
//console.log(response.body.currently.precipProbability)

})*/


///challenge
/*const geocodeurl="https://api.mapbox.com/geocoding/v5/mapbox.places/12hat.json?access_token=pk.eyJ1IjoiZ2FyZ25laGEiLCJhIjoiY2s4MWdyc2J3MDd5djNncndsb2FwNnBmcSJ9.2d0MGGuwNi1CcDVZuYfWow"
request({url:geocodeurl,json:true},(error,response)=>{
    if(error){
        console.log('please cconnect with network')
    }
    else if(response.body.features.length===0){
        console.log('something missing in url')
    }
    else{
    //const data=JSON.parse(response)
    console.log("longitude is "+ response.body.features[0].center[0]+ " and latitude is "+response.body.features[0].center[1])
    }
})*/






