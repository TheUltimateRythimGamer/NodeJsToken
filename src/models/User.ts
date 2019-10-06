import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
	userName : string, 
	email:string,
	password : string
}

const userSchema = new Schema({
	userName : {
		type: String, 
		required: true,
		min: 4,
		lowercase: true,
	},
	email : {
		type: String, 
		unique: true, 
		required: true, 
		lowercase:true
	},
	password:{
		type:String,
		required:true
	}
});
export default model<IUser>('User', userSchema);