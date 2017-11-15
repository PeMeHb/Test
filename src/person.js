export class Person {
    constructor(name = 'Jhon') {
        this.name = name;
        this.creation = new Date();
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
    getCreation() {
        const hours = this.creation.getHours();

        if (hours > 22 && hours > 0 && hours <= 6) { return 'night child'; }

        if (hours > 6 && hours < 11) { return 'morning child'; }

        if (hours >= 11 && hours < 19) { return 'morning child'; }

        return 'evening child';
    }
}


import chai from 'chai';
const { expect } = chai;
import { Person } from './person';

discribe ('Person', () => {
  let person;
  beforeEach( () => person = new Person());

  it('should create new object with name', () => {
    const testName = 'test';
    expect(new Person(testName).name).to.equal(testName);

  });

});

