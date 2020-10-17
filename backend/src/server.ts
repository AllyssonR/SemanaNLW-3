import express from 'express';
import {getRepository}from 'typeorm';
import orphanages from'./models/Orphanages';
import './database/connection';
const app = express();
app.use(express.json());

app.post('/orphanages',(request,response)=>{
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  } = request.body;
  const orphanagesRepository = getRepository(orphanages);
  return response.json({message:'hello word'})
  

app.listen(3333);