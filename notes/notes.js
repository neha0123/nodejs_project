const fs=require('fs')
//console.log('notes.js')
const getNotes=function(){
    return "Your notes..."//define function
}

const addNote=function(title,body){//add notes whatever we want to add
    const notes=loadNotes()
    
        notes.push({
    title:title,
    body:body
        })
    
    saveNotes(notes)
}
        const saveNotes=function(notes){
                const dataJSON=JSON.stringify(notes)
                fs.writeFileSync('notes.json',dataJSON)
        }
        const removeNotes=function(title)
        {
            const notes=loadNotes()
            const notesToKeep=notes.filter(function (note){
            return note.title!==title
            })
            saveNotes(notesToKeep)
        }
        
        


const loadNotes=function(){
   try{
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJSON=dataBuffer.tostring()
    return JSON.parse(dataJSON)
   }
   catch(e){
       return []
   }
}
   
module.exports={
 getNotes:getNotes,
 addNote:addNote,
 removeNotes:removeNotes
}

