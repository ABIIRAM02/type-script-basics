"use strict";
let age = 21;
if (age < 50)
    age += 10;
console.log(age);
let numArr = [0, 1, 3];
let user = [1, 'abi'];
const myStage = 2;
console.log(myStage);
function checkVoteAge(age, name) {
    if (age >= 18)
        return `${(name || 'user')} eligible for vote`;
    return `${name || 'user'} is not eligible for vote`;
}
checkVoteAge(21);
let emp = { id: 1, name: 'abi' };
let emp1 = {
    id: 2,
    name: 'ram',
    passport: true
};
emp1 = {
    id: 22,
    name: 'ram'
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return console.log(weight * 2.2);
    else
        return console.log(parseInt(weight) * 2.2);
}
kgToLbs("71");
let quantity = 50;
function check(name) {
    if (name)
        console.log(name.toLocaleUpperCase());
    else
        console.log('hakunamatata');
}
check(null);
//# sourceMappingURL=index.js.map