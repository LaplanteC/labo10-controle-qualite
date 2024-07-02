const myApp = require('../src/app');

/*
test('add 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});
*/
describe('math operations', () => {
    beforeAll(() =>
        console.log('1 - beforeAll')
    );

    afterAll(() =>
        console.log('1 - afterAll')
    );

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    test('adds 2 integer and the result is valid', () => {
        let number1 = getRandomInt(100);
        let number2 = getRandomInt(100);
        let total = myApp.sum(number1, number2);

        expect(total).toBe(number1 + number2);
    });
});

describe('test if palindrome', () => {
    beforeAll(() =>
        console.log('2 - beforeAll')
    );

    afterAll(() =>
        console.log('2 - afterAll')
    );
    describe('positive, is a palindrome', () => {
        beforeAll(() =>
            console.log('2.1 - beforeAll')
        );
    
        afterAll(() =>
            console.log('2.1 - afterAll')
        );
        test('a', () => {
            expect(myApp.isPalindrome("a")).toBeTruthy();
        });
        test('aaaa', () => {
            expect(myApp.isPalindrome("aaaa")).toBeTruthy();
        });
        test('laval', () => {
            expect(myApp.isPalindrome("laval")).toBeTruthy();
        });
        test('racecar', () => {
            expect(myApp.isPalindrome("racecar")).toBeTruthy();
        });
    });
    describe('negative, not a palindrome', () => {
        beforeAll(() =>
            console.log('2.2 - beforeAll')
        );
    
        afterAll(() =>
            console.log('2.2 - afterAll')
        );
        test('ab', () => {
            expect(myApp.isPalindrome("ab")).toBeFalsy();
        });
        test('launchcode', () => {
            expect(myApp.isPalindrome("launchcode")).toBeFalsy();
        });
        test('abA', () => {
            expect(myApp.isPalindrome("abA")).toBeFalsy();
        });
        test('so many dynamos', () => {
            expect(myApp.isPalindrome("so many dynamos")).toBeFalsy();
        });
    });
});

describe('currency conversion', () => {
    beforeAll(() =>
        console.log('3 - beforeAll')
    );

    afterAll(() =>
        console.log('3 - afterAll')
    );
    test('from Euro to Dollar', () => {
        expect(myApp.fromEuroToDollar(10)).toEqual(12);
    });
    test('from Euro to Japan Yen', () => {
        expect(myApp.fromEuroToJapanYen(10)).toEqual(1279);
    });
    test('from Euro to British Pound', () => {
        expect(myApp.fromEuroToBritish(10)).toEqual(8);
    });
});