function removeDuplicate(names){
    const unique=[];
    for ( let i = 0; i < names.length; i++){
        const element= names[i];
        if(unique.includes(element)===false){
            unique.push(element)
        }
    }
    return unique;
}

const names=['abul', 'sayem', 'jamal', 'kamal', 'sami','sayem', 'mun', 'apu', 'abul','sayem', 'jamal', 'sami', 'kabbo', 'abul', 'mun', 'jamal', 'sami', 'sayem',];
const uniqueNames=removeDuplicate(names);
console.log(uniqueNames);