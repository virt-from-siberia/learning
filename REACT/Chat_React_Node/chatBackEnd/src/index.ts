import mongoose from "mongoose";
import express from "express";

import dotenv from 'dotenv'
import { createServer } from "http";

//NOTE/: Connect to db mongoDB
import './core/db'
import createRoutes from './core/routes'
import createSocket from './core/socket'


const app = express();
const http = createServer(app);
const io = createSocket(http);

dotenv.config();

//TODO:===
createRoutes(app, io)




//NOTE/: socket IO


http.listen(process.env.PORT, function () {
    console.log(`Server : http://localhost:${process.env.PORT}`);
})
