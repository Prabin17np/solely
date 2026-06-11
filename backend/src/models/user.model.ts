import mongoose from "mongoose";
import { lowercase, required } from "zod/mini";

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    profilePicture: {
        type: String,
        default: null, 
        },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true
    }
}, {timestamps: true});

// export interface IUser extends UserType, Document { // combine UserType and Document
//     _id: mongoose.Types.ObjectId; // mongo related attribute/ custom attributes
//     createdAt: Date;
//     updatedAt: Date;
// }

export const User = mongoose.model("User",userSchema);