const country= 'Bangladesh';
const age= 22;
const isIndefendent= true;
const student= {id:  1212, class: 10, name: 'sayem'};
const friends= [12, 52, 50, 63, 25, 85, 66, 89, 54];
function add(num1, num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndefendent);
console.log(typeof student);
// type of is not found the array below the right system------------------------
console.log(Array.isArray(friends));
console.log(typeof add);


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log(friends.includes(50));
console.log(friends.includes(53));


if(friends.indexOf(256) !== -1){

}


// concat-------------------------mane array add kora join kora

const newfriendsAge= [33, 44, 11, 7, 9];
const allfriends=newfriendsAge.concat(friends);
console.log(allfriends);
