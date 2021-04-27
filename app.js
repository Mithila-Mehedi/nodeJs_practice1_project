const express = require('express')
const morgan = require('morgan')
const contactRoutes = require('./contactRouters')


const app = express()
app.use(morgan('dev'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use('/contacts',contactRoutes)

// app.get('/',(req,res)=>{
//     res.send('<h1>app.js is listening</h1>')
// })

app.get('*',(req,res)=>{
    res.send('<h1>404 not found</h1>')
})

const PORT = process.env.PORT||8080
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})