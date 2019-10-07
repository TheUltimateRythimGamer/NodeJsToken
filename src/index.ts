import dotenv from "dotenv";
import app from "./app";
import "./database";
const chalk = require('chalk');

dotenv.config();

function main(){
	app.listen(app.get('port'));
	console.log(chalk.bold.green('Server on port', app.get('port') ));
}
main();