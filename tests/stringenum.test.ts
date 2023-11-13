import {StringEnum, StringEnumValue} from "../src/stringenum";

@StringEnum
class Fruit extends StringEnumValue<Fruit> {
    static Apple = new Fruit("APPLE");
    static Banana = new Fruit("BANANA");
}

describe('StringEnum', () => {
    test('Fruit.Apple should equal Fruit.Apple', () => {
        expect(Fruit.Apple).toEqual(Fruit.Apple);
    });

    test('Fruit.Apple should not equal Fruit.Banana', () => {
        expect(Fruit.Apple).not.toEqual(Fruit.Banana);
    });

    test("Parsing 'APPLE' yields Fruit.Apple", () => {
        expect(Fruit.parse("APPLE")).toEqual(Fruit.Apple);
    });

    test("Fruit.Apple equals method 'APPLE' should be true", () => {
        expect(Fruit.Apple.equals("APPLE")).toEqual(true);
    });

    test("Fruit.Apple equals method Fruit.Apple should be true", () => {
        expect(Fruit.Apple.equals(Fruit.Apple)).toEqual(true);
    });

    test("Fruit.Apple equals method 'test' should be false", () => {
        expect(Fruit.Apple.equals("test")).toEqual(false);
    });

    test("Fruit.Apple equals method Fruit.Banana should be true", () => {
        expect(Fruit.Apple.equals(Fruit.Banana)).toEqual(false);
    });

    test("Parsing 'test' yields undefined", () => {
        expect(Fruit.parse("test")).toEqual(undefined);
    });
});