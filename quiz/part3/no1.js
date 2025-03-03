function changeMe(arr) {
    let result = [];
    for(identity of arr){
        let namaLengkap = identity[0]+' '+identity[1];
        let data = {}
        data[namaLengkap]= {
                'fristName': identity[0],
                'lastName': identity[1],
                'gender': identity[2],
                'age': identity[3] === undefined? 'Invalid Birth Year' : 2023-identity[3]
            }
            console.log(namaLengkap,': ',data[namaLengkap])
        }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // Christ Evans: { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 41 } 2023 - 1982 = 41 kan yak wkwk
  // Robert Downey: { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  
  //intinya bagaimana cara kalian bisa menampilkan output diatas, sebebas dan sekreatif kalian.
  
  changeMe([]); // ""