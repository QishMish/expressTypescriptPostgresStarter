import express, { Application, ErrorRequestHandler } from "express";
import asyncHandler from "express-async-handler";
import cors from "cors";
import Controller from "@/utils/interfaces/controller.interface";
import { AppDataSource } from "@/config/data-source";


class App {

    public express: Application;
    public port: number;
  
    constructor(controllers: Controller[], port: number) {
      this.express = express();
      this.port = port;
  
      this.initialiseMiddleware();
      this.initialiseControllers(controllers);
      this.initialiseErrorHandling();
      this.initialiseDatabase();
    }
    private initialiseMiddleware(): void {
      this.express.use(cors());
      this.express.use(express.json());
      this.express.use(express.urlencoded({ extended: false }));
    }
  
    private initialiseControllers(controllers: Controller[]): void {
      controllers.forEach((controller: Controller) => {
        this.express.use("/api/v1", asyncHandler(controller.router));
      });
    }
  
    private initialiseErrorHandling(): void {
    }
    private initialiseDatabase(): void {
        AppDataSource.initialize()
            .then(async () => {
            console.log("Data source succesfully initialized...");
            })
            .catch((error) => console.log(error));
        
    }
    public listen(): void {
      this.express.listen(this.port, () => {
        console.log(`App listening on the port ${this.port}`);
      });
    }
  }
  
  export default App;