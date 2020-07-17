type UserType = {
    firstName: string
    lastName: string
    age: number
}

type PhotoType = {
    large: string
    small: string
}

type ServerResponseType<D> = {
    errorCode: number
    messages: Array<string>
    data: D
}

const response1: ServerResponseType<UserType> = {
    errorCode: 1,
    messages: ['ok', 'asics'],
    data: {
        firstName: 'Aleksey',
        lastName: 'Elchin',
        age: 34
    }
}
const response2: ServerResponseType<PhotoType> = {
    errorCode: 1,
    messages: ['ok', 'asics'],
    data: {
        large: 'Aleksey',
        small: 'Elchin',
    }
}

type Nullable<T> = null | T

const initial = {
    age: 10 as Nullable<number>,
    name: 'Dimych' as Nullable<string>,
    user: null as Nullable<UserType>,
    photo: null as Nullable<PhotoType>,
}

type StateType = typeof initial

type ActionsTypes = ReturnType<typeof AC1> | ReturnType<typeof AC2>

const reducer = (state: StateType = initial, action: ActionsTypes) => {
    switch (action.type) {
        case "SET-AGE":
            return { ...state, age: action.age }
        case "SET-NAME":
            return { ...state, firstName: action.firstName }
    }
}




const AC1 = (age: number) => ({ type: 'SET-AGE', age } as const)
const AC2 = (firstName: string, lastName: string) => ({ type: 'SET-NAME', firstName, lastName } as const)



type HipHop<T> = T extends 'user' ? UserType : PhotoType

let a: HipHop<'user'> = {
    firstName: 'Aleksey',
    lastName: 'Elchin',
    age: 34
}
let b: HipHop<'photo'> = {
    large: 'qwelekasdasdsey',
    small: '234hasdin',
}


// const action1: AC1Type = { type: 'SET-AGE', age: 21 }