function shoppingTime(memberId, money) {
    // you can only write your code here!
    if(!memberId) return 'Mohon maaf, Toko X hanya berlaku untuk member saja';
    if(money<50000) return 'Mohon maaf, uang tidak cukup';

    var listProduct = {
        'Sepatu Stacattu': 1500000,
        'Baju Zoro': 500000,
        'Baju H&M': 250000,
        'Sweater Uniklooh': 175000,
        'Casing Handphone': 50000,
    }

    //Sorting berdasarkan harga tertinggi ke terendah(misal saja list product tidak terururt berdasarkan harga tertinggi)
    let sorting = Object.entries(listProduct).sort((a,b) => b[1]-a[1])
    let listProductSorted = {};
    for(product of sorting){
        listProductSorted[product[0]] = product[1]
    }

    let listPurchased = [];
    let changeMoney = money;
    for(const product in listProductSorted){
        if(changeMoney >= listProductSorted[product]){
            listPurchased.push(product)
            changeMoney -= listProductSorted[product]
            if(changeMoney<50000) break;
        }
    }

    const data = {
        memberId,
        money,
        listPurchased,
        changeMoney
    }
    return data;
        
}
  
  // TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja