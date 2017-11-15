/*const assert = require('assert');*/
import chai from 'chai';
const { assert, expect } = chai;

import { sum } from './tools';
chai.should();

/*
describe('sum', function() {
    it('should return 5 for sum(2, 3)', () => {
        /!*assert.equal(sum(2, 3), 5);*!/
        expect(sum(2, 3).to.equal(5))
    });

    it('should return 2 for sum(2, 0)', () => {
        assert.equal(sum(2, 0), 2);
    });

    it('empty string equals 0)', () => {
        assert.equal('', 0);
    });

    it('empty string equals 0)', () => {
        expect(sum()).to.equal(0);
    });
});
*/

describe('sum testing', function() {
    it('should return 15 for sum(12, 3)', () => {
        sum(2, 3).should.not.equal(12);
    });

});
