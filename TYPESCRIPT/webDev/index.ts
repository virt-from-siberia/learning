const createPassword = (name: string, age?: string | number) => `${name}${age}`;

createPassword('Aleksey', 34)
createPassword('Aleksey')

const createSkills = (name: string, ...skills: Array<string>) => {
    `${name}, my skills are ${skills.join()}`
}

const add: (arg1: number, arg2) => string = (arg1, arg2 = 'string') => {
    return arg1 + arg2
}
add(24, 'lol');
const err = (msg: string): never => {
    throw new Error(msg)
}
err('lol')


type objType = {
    name: string,
    age: number,
    nickname?: string,
    getPass?: (data: string) => boolean
}

let user: objType = {
    name: 'Aleksey',
    age: 30,
    nickname: 'Virt'
}
let user2: objType = {
    name: 'Aleksey',
    age: 30,
    getPass: (data) => {
        if (data) {
            return true
        }
    }
}

class User {
    constructor(
        public name: string,
        public age: number = 34,
        public nickName: string = 'V1rt',
        private pass: number = 123123123,
    ) { }
    getPass(): string {
        return 'pass'
    }
}

const alex = new User('Aleksye')

console.log(alex.getPass())


class UserTwo {
    static secret = 123123123;

    constructor(public name: string, public age: number) { }

    getPass(): string {
        return `${this.name} ${UserTwo.secret}`
    }
}

const double = new UserTwo('Aleksey', 34)

console.log(double.getPass())


class Inheritant {
    private nickNmae: string = 'Aleksey'
    static secret = 123123123

    constructor(public name: string, public age: number) { }

    getPass(): string {
        return `${this.name}${Inheritant.secret}`
    }
}

class Yanvgen extends Inheritant {
    name: string = 'Yavgen'

    constructor(age: number) {
        super(name, age);
    }

    getPass(): string {
        return `${this.name}${this.age}${Inheritant.secret}`
    }
}


abstract class Abstract {
    constructor(public name: string, public age: number) { }

    greet(): void {
        console.log(this.name)
    }
    abstract getPass(): string
}

class Alex extends Abstract {
    name: string = 'Aleksey'

    constructor(age: number) {
        super(name, age)
    }

    getPass() {
        return `${this.name}`
    }
}

interface UserInterface {
    name: string,
    age: number
}

const interfaceObj: UserInterface = {
    name: 'Aleksey',
    age: 32
}
interfaceObj.name = 'lol'

interface newIter {
    name: string,
    age: number
    //Добавлениие строоквого индекса для расширения интерфейса
    [propName: string]: any
}

const exploreInter: newIter = {
    name: 'Aleksey',
    age: 32,
    nickNmae: 'v1rt',
    jextText: 'jest',

}

interface ObjectInterface {
    name: string,
    age: number,
    getPass(): string
}

class ObjectExploreInterface implements ObjectInterface {
    name: 'Aleksey';
    age: 34;
    getPass() {
        return 'Aleksey'
    }
}

interface TwoInterface {
    name: string,
    age: number,
}

interface ThreeTwoInterface {
    getPass(): string
}

class Thriple implements TwoInterface, ThreeTwoInterface {
    name: 'string';
    age: 12;

    getPass() {
        return 'asdasd'
    }
}

interface ExtandedInterface {
    name: string,
    age: number,
}

interface AdminInterface extends ExtandedInterface {
    getPass(): string
}

class NewUserExtendsInterface implements AdminInterface {
    name: 'string';
    age: 12;

    getPass() {
        return 'asdasd'
    }
}

const getter = <T>(data: T): T => data

getter(10)
getter('test').length


class Generoc<NT, AT>{
    static nameOfClass = { Generoc }
    constructor(public name: NT, public age: AT) { }

    public getInfo(): string {
        return `${this.name}${this.age}${Generoc.nameOfClass}`
    }
}

const tryCreateNewUser = new Generoc('Aleksey', 34)

const tryCreateNewUse2r = new Generoc('Aleksey', 34)


class GenericNumAndString<N, A, C extends number>{

    constructor(public name: N, public age: A, public num: C) { }

    public getInfo(): string {
        return `${this.name}${this.age}`
    }
    public setNum(): number {
        return this.num * 2
    }
}




