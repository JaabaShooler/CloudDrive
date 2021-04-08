const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const corsMiddleware = require('./Middleware/cors.middleware')

const authRouter = require('./Routes/auth.routes')
const fileRouter = require('./Routes/file.routes')

const app = express();

const PORT = config.get("serverPort")

app.use(corsMiddleware)
app.use(express.json())
app.use('/api/auth', authRouter);
app.use('/api/files', fileRouter);

const start = async() => {
    try{
        await mongoose.connect(config.get('url'),
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })

        app.listen(PORT, ()=> {
            console.log(`Server started on PORT: ${PORT}`)
        })
    }catch (e) {
        console.error("Error: " + e)
    }
}

start();
