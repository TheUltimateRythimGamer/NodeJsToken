import { Request, Response } from "express";
import User, {IUser} from "../models/User";
import jwt from "jsonwebtoken";

const chalk = require('chalk');



export const SingUp = async (req: Request, res: Response) => {
	/**
	 * Saving a user
	 */
	const user: IUser = new User({
		userName : req.body.userName,
		email: req.body.email,
		password : req.body.password
	});
	const savedUser = await user.save();
	console.log(chalk.bold.yellow(savedUser));
	/**
	 * Creating a token
	 */
	const token : string = jwt.sign({_id : savedUser._id}, process.env.TOKEN_SECRET || 'tokentest'); 
	
	res.json(token);
};
export const SingIn = (req: Request, res: Response) => {
	res.send('Sign In')
};
export const ViewProfile = (req: Request, res: Response) => {
	res.send('Profile')
};
