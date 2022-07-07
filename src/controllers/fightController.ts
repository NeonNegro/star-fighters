import { Request, Response } from "express";
import * as fightService from "../services/fightService.js"

interface BattleRequestBody {
    firstUser: string;
    secondUser: string;
}

export async function battle(req: Request, res: Response){
    const { firstUser, secondUser }: BattleRequestBody = req.body;

    if(!firstUser || !secondUser) {
        return res.sendStatus(422);
    }

    const battleResult = await fightService.battle(firstUser, secondUser);
    res.send(battleResult);

}

export async function ranking(req: Request, res: Response){
    const ranking = await fightService.find();
    res.send(ranking);
}
