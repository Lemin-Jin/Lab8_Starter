// unit.test.js
const functions = require('../code-to-unit-test/unit-test-me.js');

test('isPhone Number', () => {
    let truVal = ["111-111-1111", "000-000-0000"];
    let falseVal = ["bbbbsss","@##$@#%@%#"];
    for(const item of truVal){
        expect(functions.isPhoneNumber(item)).toBe(true);
    };

    for(const item of falseVal){
        expect(functions.isPhoneNumber(item)).toBe(false);
    };

  });


  test('isEmail returns', () => {
    let truVal = ["jim_liem@kfcg.com", "lejin@ucsd.edu"];
    let falseVal = ["ab.org","a!b.org"];
    for(const item of truVal){
        expect(functions.isEmail(item)).toBe(true);
    };

    for(const item of falseVal){
        expect(functions.isEmail(item)).toBe(false);
    };

  });

  test('isStrongPassword', () => {
    let truVal = ["a1_abz", "z___ss"];
    let falseVal = ["ab","12"];
    for(const item of truVal){
        expect(functions.isStrongPassword(item)).toBe(true);
    };

    for(const item of falseVal){
        expect(functions.isStrongPassword(item)).toBe(false);
    };

  });

  test('isDate', () => {
    let truVal = ["11/20/2022", "11/20/2021"];
    let falseVal = ["ab","12"];
    for(const item of truVal){
        expect(functions.isDate(item)).toBe(true);
    };

    for(const item of falseVal){
        expect(functions.isDate(item)).toBe(false);
    };

  });

  test('isHexColor', () => {
    let truVal = ["#69DDFF", "#EAF8BF"];
    let falseVal = ["ab","12"];
    for(const item of truVal){
        expect(functions.isHexColor(item)).toBe(true);
    };

    for(const item of falseVal){
        expect(functions.isHexColor(item)).toBe(false);
    };

  });




  