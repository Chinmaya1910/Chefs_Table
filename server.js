const express=require('express');
const mongoose=require('mongoose');

const config=require('config');



const app=express();

//Bodyparser Middleware
app.use(express.json());

//DB Config

const db=config.get('mongoURI');

//Connect to mongo

mongoose.connect(db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log('MongoDB is connected'))
    .catch((err) => console.log('MongoDB connection error'));


//Use Routes
app.use('/api/recipes',require('./routes/api/recipes'));
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));

const port=process.env.PORT||5000;



app.listen(port,()=>console.log(`server started on port ${port}`));

