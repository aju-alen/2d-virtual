import express from 'express';
import { apiV1 } from './routes/v1';
import client from '@repo/db/client'
const app = express();
app.use(express.json())

app.use("/api/v1",apiV1)

app.listen(process.env.PORT || 3000,()=>{
    console.log(`server started at PORT ${process.env.PORT || 3000}`);
    
})
