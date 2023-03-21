import { inject, injectable } from "inversify";
import { INJECT_TYPES } from "./container/constants";

export interface IDice{
    getNumber(): number;
}

@injectable()
export class RandomDice implements IDice{
    constructor(
        @inject(INJECT_TYPES.MIN)
        private readonly _min: number, 
        @inject(INJECT_TYPES.MAX)
        private readonly _max: number
    ){}

    public getNumber(){
        return Math.floor(Math.random() * this._max) + this._min;
    }
}

@injectable()
export class StaticDice implements IDice{
    constructor(
        @inject(INJECT_TYPES.MIN)
        private readonly _min: number, 
        @inject(INJECT_TYPES.MAX)
        private readonly _max: number
    ){}

    public getNumber(){
        return this._max -this._min;
    }
}