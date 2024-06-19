import "reflect-metadata"
import { AppDataSource } from "./config";
import { serverInitializer } from "./server";


AppDataSource.initialize()
.then(() => {
console.log ("Database connected");
serverInitializer();
})
.catch((err) => {
    console.log (err);
});