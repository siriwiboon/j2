import { setTimeout } from 'timers';
 import { request } from 'http';
const fs = require('fs')

const async = require('async')

const items = []
const q = async.queue((task,calback)=>{
   fs.writeFile("mn"+task.number+".txt","this is from process",task.number,()=>{
console.log("Create file"+task.number+"complete")
callback()
   })
   },1)
        
      
q.drain = () =>{
console.log("all items have been process")
}

for(i=1 ; i<100; i++){
ittems.push({number: i})
}

q.push(items,(err)=>{
    console.log('finish process foo')
})


