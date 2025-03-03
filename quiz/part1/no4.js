function cariModus(arr) {
    let checked = [];
    let MaxFreq = 0;
    let modus = -1;
    for(let i=0; i<arr.length; i++){

        //Memastikan elemen tidak dicek lebih dari 1 kali
        if(checked.includes(arr[i])) continue;
        checked.push(arr[i]);

        //akan dijalankan jika elemen belum dicek sebelumnya
        freq = 0;
        for(let j=i; j<arr.length; j++){
            if(arr[i] === arr[j]){
                freq +=1;
            }
        }

        if(freq > MaxFreq){
            MaxFreq = freq;
            modus = arr[i];
        }
    }
    return MaxFreq === 1 || MaxFreq === arr.length ? -1 : modus;
}
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4,])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1