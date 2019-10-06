import { Request, Response } from "express";
import User, {IUser} from "../models/User";

const chalk = require('chalk');



export const SingUp = async (req: Request, res: Response) => {

	const user: IUser = new User({
		userName : req.body.userName,
		email: req.body.email,
		password : req.body.password
	});

	console.log(chalk.bold.blue(user));
	const savedUser = await user.save();
	console.log(chalk.bold.yellow(savedUser));
	res.send('Sign Up');
};
export const SingIn = (req: Request, res: Response) => {
	res.send('Sign In')
};
export const ViewProfile = (req: Request, res: Response) => {
	res.send('Profile')
};
