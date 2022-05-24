import "dotenv/config";
import "module-alias/register";
import App from "./app";
import validateEnv from "@/utils/validateEnv";


//validate env vars 
validateEnv()

//inject app controllers
const app = new App(
  [],
  Number(process.env.PORT)
);

//initialize app
app.listen();
