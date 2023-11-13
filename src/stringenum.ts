export function StringEnum<T>(target: typeof StringEnumValue<T>, context: any) {
    context.addInitializer(function (this: any) {
        Object.entries(this).forEach((entry: [string, any]) => {
            const [key, value] = entry;
            if (key === '__value__') {
                return;
            }
            if (value.value === key) {
                return;
            }
            Object.defineProperty(this, value.value, {
                value: value
            });
        });
    });
}

export class StringEnumValue<T> {
    value: string;

    constructor(enumValue: string) {
        this.value = enumValue;

    }

    equals<T>(other: any) {
        if (other instanceof StringEnumValue) {
            return this.value === other.value;
        } else if (typeof other == 'string' || other instanceof String) {
            return this.value === other;
        } else {
            return undefined;
        }
    }

    static parse<T>(val: string): T | undefined {
        if (Object.hasOwn(this, val)) {
            // @ts-ignore
            return this[val];
        } else {
            return undefined;
        }
    }
}
