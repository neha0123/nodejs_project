const request=require('request')

const geocode=(address,callback)=>{
    //const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+ '.json? access_token=pk.
    //const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json? access_token=pk.eyJ1IjoiZ2FyZ25laGEiLCJhIjoiY2s4MWdyc2J3MDd5djNncndsb2FwNnBmcSJ9.2d0MGGuwNi1CcDVZuYfWow'
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZ2FyZ25laGEiLCJhIjoiY2s4MWdyc2J3MDd5djNncndsb2FwNnBmcSJ9.2d0MGGuwNi1CcDVZuYfWow&limit=1'
    //console.log(features[0].center[0])

    request({url,json:true},(error,{body})=>{
        if(error){
            callback('unable to find the location',undefined)
        }/*else if(response.body.features.length === 0){
            callback('wrong url ',undefined)
            console.log()
            +
            
        }*/
       else{
            callback(undefined,{
                latitude: body.features[0].center[0],
            longitude:body.features[0].center[1],
            location:body.features[0].place_name
        }) 
    
       }
    })
    }
    module.exports=geocode
    