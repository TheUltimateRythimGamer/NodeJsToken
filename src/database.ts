import mongoose from "mongoose";
const chalk = require('chalk');
mongoose.connect('mongodb://localhost/test',{
	useNewUrlParser:true,
	useUnifiedTopology:true,
	useCreateIndex: true
})
	.then( db => console.log(chalk.bold.blue('Database is connected')))
	.catch(err => console.log(err));