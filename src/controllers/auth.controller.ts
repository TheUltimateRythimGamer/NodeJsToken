import { Request, Response, request, response } from "express";
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

	user.password = await user.encryptPassword(user.password);

	const savedUser = await user.save();
	console.log(chalk.bold.yellow(savedUser));
	/**
	 * Creating a token
	 */
	const token : string = jwt.sign({_id : savedUser._id}, process.env.TOKEN_SECRET || 'tokentest'); 
	
	res.header('auth-token', token).json(savedUser);
};
export const SingIn = async (req: Request, res: Response) => {
	const user = await User.findOne({email : req.body.email});
	if(!user) return res.status(400).json('Email or password is wrong');

	const correctPassword : boolean = await user.validatePassword(req.body.password);
	
	if(!correctPassword) return res.status(400).json('Invalid password');
	
	const token : string = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET || 'tokentest', {
		expiresIn: 60 * 60 * 24
	});
	res.header('auth-token', token).json(user);
};
export const ViewProfile = (req: Request, res: Response) => {
	res.send('Profile')
};
