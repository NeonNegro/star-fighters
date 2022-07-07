import { Router } from "express";
import fightRouter from "./fightRouter";


const router = Router();

router.use(fightRouter);

export default router;