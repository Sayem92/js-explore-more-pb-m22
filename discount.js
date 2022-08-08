///lika ace lekioh

function tricketPrice(tricketQuantity){
    const first100Rate= 100;
    const second100Rate= 90;
    const restTricketRate= 70;
    if(tricketQuantity <= 100){
        const price= tricketQuantity * first100Rate;
        return price;
    }
    else if( tricketQuantity <=200){
        const first100Price= 100 * first100Rate;
        const restTricketQuantity = tricketQuantity - 100;
        const restTricketPrice= restTricketQuantity * second100Rate;
        const totalPrice= first100Price + restTricketPrice;
        return totalPrice;
    }
    else{
        const first100Price= 100 * first100Rate;
        const second100Price= 100 * second100Rate;
        const restTricketQuantity = tricketQuantity - 200;
        const restTricketPrice= restTricketQuantity * restTricketRate; 
        const totalPrice= first100Price + second100Price + restTricketPrice;
        return totalPrice;
    }
}
// icca moto input dew 
const price=tricketPrice(210);
console.log(price);