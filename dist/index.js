"use strict";
// Basic Types
const id = 5;
let company = 'Samrat Paneru';
let isPublied = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3, 4, 5, 6];
let arr = [1, true, 'hello'];
// Tuple
let person = [1, 'brad', true];
// tuple Array
let employee;
employee = [
    [1, 'sam'],
    [1, 'sam'],
    [1, 'sam'],
];
// Union
let idea;
idea = 'string';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 2] = "Up";
    Direction1[Direction1["Down"] = 3] = "Down";
    Direction1[Direction1["Left"] = 4] = "Left";
    Direction1[Direction1["Right"] = 5] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "down";
    Direction2["Left"] = "left";
    Direction2["Right"] = "right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'josh',
};
// type aSSERTION
let cid = 1;
// let customerID = <number>cid
let customerID = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
log('hello');
const user1 = {
    id: 1,
    name: 'josh',
};
const add = (x, y) => x + y;
const sub = (x, y) => x + y;
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered `;
    }
}
const brad = new Person(1, 'samrat');
const mike = new Person(2, 'Paneru');
// subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'john', 'developer');
// generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['sam', 'kus', 'san']);
