import 'reflect-metadata';

import container from "./container/container";
import { INJECT_TYPES } from "./container/constants";
import { IDice } from "./dice";
import { Game } from "./game";

const dice = container.get<IDice>(INJECT_TYPES.DICE);

const game = new Game(dice);

game.move()
console.log(game.location)