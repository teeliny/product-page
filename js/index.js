const hamburger = document.querySelector('.hamburger');
const sideNav = document.querySelector('.side__nav');


hamburger.addEventListener('click', (e) => {
    hamburger.classList.toggle('toggle__menu');
    sideNav.classList.toggle('hidenav');
})









// arr = [1,2,3,1,1,3];
// let count = 0;
// let i = 0;
// let j = 1;
// while (j < arr.length) {
//     if (arr[i] === arr[j]) {
//         count++
//     }
//     if (j === arr.length - 1) {
//         i++;
//         j = i + 1;
//     }
//     else {
//         j++;
//     }
//     return count;
// }
// console.log(count);