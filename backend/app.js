const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require ('dotenv').config()

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json())

const mongoURI = process.env.MONGODB_URI;
mongoose
.connect(mongoURI)
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

const noteSchema = new mongoose.Schema({
    title: {type:String,required:true},
    content: {type:String,required:true},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now}
    });

    const Note = mongoose.model('Note',noteSchema);