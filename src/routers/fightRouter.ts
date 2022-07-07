import { Router } from "express";
import { battle, ranking } from "../controllers/fightController.js" ;


const fightRouter = Router();

fightRouter.post("/battle", battle);
fightRouter.get("/ranking", ranking);


export default fightRouter;