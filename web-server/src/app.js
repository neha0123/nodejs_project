const path = require('path')
const express = require('express')
 const app = express()
 const hbs=require('hbs')
 const geocode=require('./utils/geocode')
 const forecast=require('./utils/forecast')
 const port=procee.env.PORT||3000
//app.js
//app/js/help
//app.js/about
console.log(__dirname)
console.log(path.join(__dirname, '../public'))
//define path for express config
const directorypath = path.join(__dirname, '../public')
const viewspath = path.join(__dirname, '../templates/views')
const partialsspath = path.join(__dirname, '../templates/partials')
//setup handlebars engine and views location
app.set('view engine', 'hbs')//hbs=handlebars/use for displaying dynamic data 
app.set('views', viewspath)
hbs.registerPartials(partialsspath )
//setup static directory
app.use(express.static(directorypath))
app.get('', (req, res) => {
    res.render('index',{
        title: 'WHETHER APP', 
        name: 'neha'})
    //use of render for dynamic webpage
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'ABOUT ME ',
        name: 'neha'
    })//use of render for dynamic webpage
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'HELP APP',
        name: 'nikky'
    })//use of render for dynamic webpage
})
app.get('/help/*',(req,res)=>{
    res.render('404',{
        name:'nikky',
    title:'errorpage',
    errormessage:' help page not found'
    })///for represent error
    })
    /*app.get('/products',(req,res)=>{
        if(!req.query.search){
           return res.send({
                error:'please enter the search term'
            })
        }
console.log(req.query.search)
        res.send({
            products:[]
        })
    })*/
    app.get('/weather',(req,res)=>{
        if(!req.query.address){
          return   res.send({
                error:"please enter the address here"
            })   
        }
        //console.log(res.query.address)
        //res.send({
           // location:"india",
        //forecast:'38degree',
    
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send({error})
        }
    
forecast(longitude,latitude, (error,data)=>{
    if(error){
        return res.send({error})
    }
    res.send({
         forecast:data,
         location,
         address:req.query.address

    })
})
        //address:req.query.address
        })
    })
    
    
    
    //represent error
app.get('*',(req,res)=>{
res.render('404',{
    name:'nikky',
    title:'errorpage',
    errormessage:'page not found'

})///for represent error
})
/*app.get('',(req,res)=>{
    res.send('<h1>weather</h1>')//req=request,res=response
})
app.get('/help',(req,res)=>{
    res.send([{
        name:'neha',
        age:'20'
    },
{
    name:"nikky",
    age:"19"
}])//req=request,res=response
})
app.get('/about',(req,res)=>{
    res.send('<h1>ABOUT</h1>')//req=request,res=response
})
app.get('/weather',(req,res)=>{
    res.send({
        location:"india",
        forecast:'38degree'
    })//req=request,res=response
})*/


app.listen(port, () => {
    console.log('server is on port '+port)
})
    

