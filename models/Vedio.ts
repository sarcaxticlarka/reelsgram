import mongoose, { Schema , model, models} from "mongoose";

export const VEDIO_DIMENSIONS ={
    width:1080,
    height: 1920
} as const

export interface IVedio {
    _id?: mongoose.Types.ObjectId;
    title:string;
    descriptin: string;
    vedioUrl: string;
    thumbnailUrl:string;
    controls?: boolean;
    transformation?:{
        height: number
        width:number,
        quality?:number
    };
    createdAt?: Date;
    updatedAt: Date
}

const vedeoSchema = new Schema<IVedio>({
    title: {
        type:String,
        required:true, 
    },
    descriptin:{
        type:String,
        required:true, 
    },
    vedioUrl:{
        type:String,
        required:true, 
    },
    thumbnailUrl:{
        type:String,
        required:true, 
    },
    controls:{
        type: Boolean,
        default: true
    },
    transformation:{
        height:{type:Number,default:VEDIO_DIMENSIONS.height},
        width:{type:Number,default:VEDIO_DIMENSIONS.width},
        quality:{type:Number, min:1,max:100}

    }
}, {timestamps:true})


const Vedio = models?.Vedio || model<IVedio>("User",vedeoSchema)

export default Vedio