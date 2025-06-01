import {userRouter} from "./user"
import {spaceRouter} from "./space"
import {adminRouter} from "./admin"
import {Router} from "express"
// import { SignupSchema } from "@metaver/zod/zodtypes"
import client from "@repo/db/client"
export const apiV1 = Router()



apiV1.post("/signup",async(req,res)=>{
    // const parsedData = SignupSchema.safeParse(req.body)
    // if(!parsedData.success){
    //      res.status(400).json({
    //         message:"Invalid data",
    //         errors:parsedData.error.flatten()
    //     })
    //     return
    // }
    // try{
    //     const createUser = await client.user.create({
    //         data:{
    //             username:parsedData.data.username,
    //             password:parsedData.data.password,
    //             role:parsedData.data.type === "admin" ? "Admin" : "User",
    // }
    //     })
    //     res.status(201).json({
    //         userId: createUser.id,
    //     })
    // }
    // catch(e){
    //     if(e instanceof Error){
    //         res.status(400).json({
    //             message:"User already exists",
    //             error:e.message
    //         })
    //     }
    //     else{
    //         res.status(500).json({
    //             message:"Internal server error",
    //             error:e
    //         })
    //     }
    // }
})


apiV1.post("/signin",(req,res)=>{
    res.json({
        message:"Signin"
    })
})

apiV1.get("/elements",(req,res)=>{

})

apiV1.get("/avatars",(req,res)=>{

})

apiV1.use("/user",userRouter)
apiV1.use("/space",spaceRouter)
apiV1.use("/admin",adminRouter)