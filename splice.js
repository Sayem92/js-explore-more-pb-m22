const friends=[12, 56, 58, 68, 98, 75, 65, 99, 77, 22];
// Removes elements from an array 
// and, if necessary, inserts new elements in their place,
//  returning the deleted elements.
// will chage the original array.
const partial=friends.splice(2, 6, 1111, 69, 28000);
// 2 taki suru kore ar porer 6ta nibo,----------------------------- 
// ar pore ja diba ta add hobe main arrya the----------------------------
console.log(partial);
// splice pore baki ja take oi gula asbe array ar
console.log(friends);