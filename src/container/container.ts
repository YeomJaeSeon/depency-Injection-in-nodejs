import { Container } from "inversify";
import { IDice, RandomDice, StaticDice } from "../dice";
import { INJECT_TYPES } from "./constants";

const container = new Container();

container.bind<number>(INJECT_TYPES.MIN).toConstantValue(1)
container.bind<number>(INJECT_TYPES.MAX).toConstantValue(7)
container.bind<IDice>(INJECT_TYPES.DICE).to(StaticDice)

export default container;