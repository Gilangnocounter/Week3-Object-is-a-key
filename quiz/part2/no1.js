function digitPerkalianMinimum(angka) {
    let smallest = Infinity;
    for(let i=0; i<=Math.sqrt(angka); i++){
        if(angka%i === 0){
            let digit = `${i}${angka/i}`
            smallest = Math.min(smallest,digit.length);
        }
    }
    return smallest;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(12)); // 2