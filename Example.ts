interface IExample {
    name: string,
    surname: string,
    age: number,
    email: string,
    password: string,
    friends: string[],
    favouriteNumber: number
}

type TAvailableKeysToModify = {
    email: string,
    password: string,
    friends: string[],
    favouriteNumber: number
}

class Example implements IExample {
    public name: string
    public surname: string
    public age: number
    public email: string
    public password: string
    public friends: string[]
    public favouriteNumber: number

    constructor() {
        this.name = "Foo"
        this.surname = "Bar"
        this.age = 20
        this.email = "whatever@foo.bar"
        this.password = "notAStrongOne!"
        this.friends = ["Bolly", "Lolly", "Molly"]
        this.favouriteNumber = 3
    }

    update<T extends keyof TAvailableKeysToModify>(key: T, value: this[T]): void {
        // <------------------------ Optional Logic Validation ------------------------>

        if (typeof value === "string") {
            // <---------- Optional Buissnenss Validation for "string" values ---------->
        }

        if (typeof value === "number") {
            // <---------- Optional Buissnenss Validation for "number" values ---------->

        }

        if (value instanceof Array) {
            // <---------- Optional Buissnenss Validation for "array" values ---------->

        }
        //etc

        this[key] = value
    }
}