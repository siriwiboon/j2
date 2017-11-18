// const http = require('http')
// const fs = require('fs')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//     fs.writeFile('mn.txt', 'mn best', (err) => {
//         if (err) console.log("file err")
//         console.log('file is saves');
//         fs.readFile('mn.txt', (eer,data) => {
//             res.statusCode = 200
//             res.setHeader('Content-Type', 'text/plain')
//             res.end(data.toString())
//             if (eer) {
//                 console.log(eer)
//             }
//         })

//     })
// })


// server.listen(port, hostname, () => {
//     console.log("listen")
// })
const express = require('expoess')

const app = express()

app0get('/',(req,res)=>{
    res.send('Hello')
})

app.get('/user',(req,res)=>{
    res.status(200).json({
        name: "Siri",
        NickName:"A"
    })
})
app.listen(3333,()=>{
    console.log("listen on poost 3333")
})