const fs=require('fs')
//fs.writeFileSync('neha.txt','my name is neha garg')
//fs.appendFileSync('neha.txt',' I am student of iiit surat 2nd year student')
//const name=require('./utils.js')
//console.log(name)
//const add=require('./utils.js')
//const sum=add(9,-2)
//console.log(sum)
//const   notes=require('./notes.js')


//challenge section 3.3
const notes=require('./notes.js')// print the javascript file
//const notes=function() //call the function
//console.log(getnotes)



//const validator=require('validator')
//console.log(validator.isEmail('neha@gmail.com'))
//console.log(validator.isURL('nehagmail.com'))



//challenge
const chalk=require('chalk')
console.log(chalk.green('success!'))
console.log(chalk.bold('success!'))
//console.log(chalk.italic.red.inverse('error'))
//console.log(process.argv[2])
//const command=process.argv[2]
/*if(command==='add'){
    console.log("adding notes!")
}
else if(command==="remove"){
console.log("remove notes!")
}*/
const  yargs=require('yargs')


//cusomize yargs version
//add,remove,read,list
yargs.version('1.1.0')

// create add command
yargs.command({
    command:'add',
    describe:'adding notes according to your requirements',
    builder:{  ///setup for builderoption
        title:{
        describe:'my notes',
        demandOption:true,
       type:'string'
        },
    body:{
        describe:'add content',
        demandOption:true,
        type:'string'
    }
    },
    handler:function(argv){
        notes.addNote(argv.title,argv.body)//print placeholder msg for now
        //console.log('Body: '+argv.body)
    }
})


//for remove command
yargs.command({
    command: 'remove',
    describe:'remove the notes',
    builder:{  ///setup for builderoption
        title:{
        describe:'my notes',
        demandOption:true,
       type:'string'
        }
    },
    handler:function(argv){
        //console.log('remove those notes which are not in used')//print placeholder msg for now
        notes.removeNotes(argv.title)
    }
})


//create list command
yargs.command({
    command:'list',
    describe:'list out the elements',
    handler:function(){
        console.log('print the list of all the element')//print placeholder msg for now
    }
})

//create read command
yargs.command({
    command:'read',
    describe:'read all the command',
    handler:function(){
        console.log('read all the data ')//print placeholder msg for now
    }
})
yargs.parse()
//console.log(yargs.argv)