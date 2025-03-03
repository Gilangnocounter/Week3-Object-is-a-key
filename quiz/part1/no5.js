function ubahHuruf(kata) {
    let result = '';
    for(let i=0; i<kata.length; i++){
        result += kata[i] === 'z' ? 'a' : String.fromCharCode(kata.charCodeAt(i)+1) 
    }
    return result;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu