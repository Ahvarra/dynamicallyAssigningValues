# Update your object with dynamically assigning values
That code is supposed to change dynamically values of object's keys respecting their types

## It is common rule to limit keys of object which might be updated or not
Underneath with the help of Typescript we are able to do that

## All you need to do:

#### 1. Create a Class with some properties (strings, numbers, arrays etc.) 
```javascript

// (optional interface)
interface IExample {
    name: string,
    surname: string,
    age: number,
    email: string,
    password: string,
    friends: string[],

// (optional implementation)
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
}
```

#### 2. Define the Type, which will work like a guardian for keys able to get modified
```javascript
// Example of Type only with keys able to get modified
type TAvailableKeysToModify = {
    email: string,
    password: string,
    friends: string[],
    favouriteNumber: number
}
```

#### 3. Create an Update method which accepts 2 parameters: "key" and "value"
Because of "T extends keyof TAvailableKeysToModify" the key will be only limited to the ones from created Type. Assigning type T to key parameter and this[T] to value parameter, typescript automatically is able to detect concrete type of value after passing one of available keys.

```javascript
...
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
...
```

#### 4. The final part is to create an instance of Example Class and try to update one of keys

```javascript
// creating an instance
const example = new Example()

// possible
example.update("password", "yupStrongOne")
example.update("friends", ["Mark", "Ada"])
example.update("favouriteNumber", 22)

//impossible
example.update("email", 12345678)
example.update("friends", "A lot")
example.update("favouriteNumber", [5])

//results
console.log(example.password) // "yupStrongOne"
console.log(example.friends) // ["Mark", "Ada"]
console.log(example.favouriteNumber) // 22
```