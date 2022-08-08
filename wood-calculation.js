function woodcalculation(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood= 10; 
    const perTableWood= 20;
    const perBedWood= 50;

    const ChairWood= chairQuantity * 10;
    const TableWood= tableQuantity * 10;
    const BedWood= bedQuantity * 10;

    const totalWood= ChairWood + TableWood + BedWood;

    return totalWood;

}

const allWood=woodcalculation(12, 22, 5);
console.log(allWood);