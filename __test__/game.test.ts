import { describe, expect, test } from "@jest/globals";
import { RandomDice } from "../src/dice";
import { Game } from "../src/game";

describe('move unit test', () => {
    test('move시 location 1 증가', () => {
        //given
        const game = new Game(new RandomDice(4, 7));

        //when
        game.move();

        //then
        expect(game.location).toEqual(1);
    })

    test('move시 location 2 증가', () => {
        //given
        const game = new Game(new RandomDice(1, 3));

        //when
        game.move();

        //then
        expect(game.location).toEqual(2);
    })
})