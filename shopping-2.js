/// camera higest price check
const phones=[
    {name: 'samsung', camera: 20, storage: '32 gb', price: 36000, color: 'silver'},
    {name: 'walton', camera: 12, storage: '32 gb', price: 46000, color: 'silver'},
    {name: 'iphone', camera: 99, storage: '32 gb', price: 86000, color: 'silver'},
    {name: 'xami', camera: 110, storage: '32 gb', price: 50000, color: 'silver'},
    {name: 'nokia', camera: 102, storage: '32 gb', price: 6000, color: 'silver'},
    {name: 'oppo', camera: 150, storage: '32 gb', price: 48000, color: 'silver'},
    {name: 'symphony', camera: 12, storage: '32 gb', price: 5000, color: 'silver'},
];


function cheapestPhone(phones){
    let highest=phones[0];
    for ( let i= 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.camera > highest.camera){
            highest=phone;
        }
    }
    return highest;
}
const mySelect=cheapestPhone(phones);
console.log(mySelect);