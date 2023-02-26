// Basic Types
const id: number = 5

let company: string = 'Samrat Paneru'
let isPublied: boolean = true
let x: any = 'Hello'

let age: number
let ids: number[] = [1, 2, 3, 4, 5, 6]
let arr: any[] = [1, true, 'hello']

// Tuple

let person: [number, string, boolean] = [1, 'brad', true]
// tuple Array

let employee: [number, string][]
employee = [
	[1, 'sam'],
	[1, 'sam'],
	[1, 'sam'],
]

// Union

let idea: string | number

idea = 'string'

//Enum

enum Direction1 {
	Up = 2,
	Down,
	Left,
	Right,
}

enum Direction2 {
	Up = 'Up',
	Down = 'down',
	Left = 'left',
	Right = 'right',
}

// Objects

type User = {
	id: number
	name: string
}

const user: User = {
	id: 1,
	name: 'josh',
}

// type aSSERTION

let cid: any = 1
// let customerID = <number>cid
let customerID = cid as number

// Functions

function addNum(x: number, y: number): number {
	return x + y
}
function log(message: string | number): void {
	console.log(message)
}

log('hello')

// Interfaces

interface UserInterface {
	readonly id: number
	name: string
	age?: number
}

const user1: UserInterface = {
	id: 1,
	name: 'josh',
}

interface MathFunc {
	(x: number, y: number): number
}

const add: MathFunc = (x: number, y: number) => x + y
const sub: MathFunc = (x: number, y: number) => x + y

interface PersonInterface {
	id: number
	name: string
	register(): string
}

// classes

class Person implements PersonInterface {
	id: number
	name: string

	constructor(id: number, name: string) {
		this.id = id
		this.name = name
	}

	register() {
		return `${this.name} is now registered `
	}
}
const brad = new Person(1, 'samrat')
const mike = new Person(2, 'Paneru')

// subclasses

class Employee extends Person {
	position: string

	constructor(id: number, name: string, position: string) {
		super(id, name)
		this.position = position
	}
}

const emp = new Employee(3, 'john', 'developer')

// generics
function getArray<T>(items: T[]): T[] {
	return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4, 5])
let strArray = getArray<string>(['sam', 'kus', 'san'])
