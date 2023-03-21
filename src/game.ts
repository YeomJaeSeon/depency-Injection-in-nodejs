import { inject } from "inversify";
import { INJECT_TYPES } from "./container/constants";
import { IDice } from "./dice";

export class Game{
    private _locaiton = 0;

    constructor(
        @inject(INJECT_TYPES.DICE)
        private readonly _dice: IDice
    ){}

    public move(){
        const number = this._dice.getNumber()
        if(number >= 4){
            this._locaiton += 1;
        }else{
            this._locaiton += 2;
        }
    }

    public get location(){
        return this._locaiton;
    }
}
