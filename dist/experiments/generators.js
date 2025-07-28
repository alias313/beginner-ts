"use strict";
// “Factory” iterable, stateless and only provide [Symbol.iterator]()
// that returns a new iterator each time
const simpleIterator = {
    [Symbol.iterator]: function () {
        return {
            index: -1,
            next() {
                this.index++;
                // access ten numbers then indicate done
                return {
                    value: this.index,
                    done: this.index > 9
                };
            },
        };
    },
    // entries() returns a fresh IterableIterator<[index, value]>
    *entries() {
        let i = 0;
        for (const v of this) {
            yield [i++, v];
        }
    },
};
for (const num of simpleIterator) {
    console.log(`Number: ${num}`);
}
console.log('...simpleIterator:', ...simpleIterator);
console.log('[...simpleIterator]:', [...simpleIterator]);
const randomIterator = {
    index: -1,
    next() {
        this.index++;
        // access five random numbers then indicate done
        return {
            value: Math.random(),
            done: this.index > 4
        };
    },
    [Symbol.iterator]() {
        return this;
    },
    // generator method instad of a regular method that has to return an IteratorResult
    // explicitly and needs conditional logic to work correctly
    *entries() {
        let localIndex = 0;
        // for…of this will call this[Symbol.iterator]() once, then .next() repeatedly
        for (const value of this) {
            yield [localIndex++, value];
        }
    },
};
const randomNumbers = [...randomIterator];
randomNumbers.forEach((num, index) => {
    console.log(`Random number ${index + 1}: ${num}`);
});
for (const [index, num] of randomIterator.entries()) {
    console.log(`Random number ${index + 1}: ${num}`);
}
const [first, second, ...rest] = randomIterator;
console.log(`First random number: ${first}`);
console.log(`Second random number: ${second}`);
console.log(`Rest of random numbers: ${rest.join(", ")}`);
