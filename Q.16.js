"use strict";
// 16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// 1
let guestArr = ["Sufiyan", "Amir", "Asnaif", "Ashir"];
let canNotAttend = "Ashir";
let newGest = "Sheikh";
guestArr[guestArr.indexOf(canNotAttend)] = newGest;
console.log(guestArr);
let guestBegin = "Muhammad";
guestArr.unshift(guestBegin);
console.log(guestArr);
// 2
let middleGuest = "Hussain";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
// 3
guestArr.push("Mutahira");
console.log(guestArr);
// 4
guestArr.map((item) => (console.log(`Dear ${item}, You Are Codinally invited to a Dinner`)));
