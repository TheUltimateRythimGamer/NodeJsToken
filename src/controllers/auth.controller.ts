import { Request, Response } from "express";

export const SingUp = (req: Request, res: Response) => {
	console.log(req.body);
	
	res.send('Sign Up');
};
export const SingIn = (req: Request, res: Response) => {
	res.send('Sign In')
};
export const ViewProfile = (req: Request, res: Response) => {
	res.send('Profile')
};
