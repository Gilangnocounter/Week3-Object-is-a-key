function cariMedian(arr) {
    let terurut = arr.sort((a,b) => a-b);
    if(arr.length%2 === 0){
        let index = terurut.length/2;
        return (terurut[index] + terurut[index-1])/2
    }else{
        let index = Math.floor(terurut.length/2);
        return terurut[index];
    }
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5