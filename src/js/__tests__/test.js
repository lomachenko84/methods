import { Bowman } from "../app"
import { Swordsman } from "../app"
import { Magician } from "../app"
import { Undead } from "../app"
import { Zombie } from "../app"
import { Daemon } from "../app"
import { Character } from "../app"

test('test error health', () => {
    expect(() => {
        let healths = new Bowman("Sveta");
        healths.health = 0;
        healths.levelUp();

    }).toThrow(new Error("нельзя повысить левел умершего"));
});



test('test error name', () => {
    expect(() => {
        let names = new Bowman("N");

    }).toThrow(new Error("no name"));
});
test('test error type', () => {
    expect(() => {
        let tyres = new Character("Nadya", "Bog");

    }).toThrow(new Error("no type"));
});

test("test Bowman", () => {
    let character1 = new Bowman("Nadya");
    let expected = {
        name: "Nadya",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }
    expect(character1).toMatchObject(expected)
})

test("test Swordsman", () => {
    let character2 = new Swordsman("Anna");
    let expected = {
        name: "Anna",
        type: "Swordsman",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    }
    expect(character2).toMatchObject(expected)
})
test("test Magician", () => {
    let character3 = new Magician("Ben");
    let expected = {
        name: "Ben",
        type: "Magician",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    }
    expect(character3).toMatchObject(expected)
})
test("test Undead", () => {
    let character4 = new Undead("Jack");
    let expected = {
        name: "Jack",
        type: "Undead",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }
    expect(character4).toMatchObject(expected)
})
test("test Zombie", () => {
    let character5 = new Zombie("Sofia");
    let expected = {
        name: "Sofia",
        type: "Zombie",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    }
    expect(character5).toMatchObject(expected)
})
test("test Daemon", () => {
    let character6 = new Daemon("Tom");
    let expected = {
        name: "Tom",
        type: "Daemon",
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    }
    expect(character6).toMatchObject(expected)
})
test("test level", () => {
    let loss = new Zombie("Sveta"); 
    loss.levelUp();
    let stage = {
        name: "Sveta",
        type: "Zombie",
        health: 100,
        level: 2,
        attack: 48,
        defence: 12,
    }
    expect(loss).toMatchObject(stage)
   
})
test("test damage", () => {
    let loss = new Zombie("Sveta"); 
    loss.damage(10);
    let stage = {
        name: "Sveta",
        type: "Zombie",
        health: 91,
        level: 1,
        attack: 40,
        defence: 10,
    }
    expect(loss).toMatchObject(stage)
})