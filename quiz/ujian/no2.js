function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    let result = [];
    for(const penumpang of arrPenumpang){
        let data = {
            'Penumpang': penumpang[0],
            'naikDari': penumpang[1],
            'tujuan': penumpang[2],
            'bayar': 0
        }
        let from = false;
        let harga = 0;
        for(jalan of rute){
            if(from){
                harga += 2000;
                if(jalan === penumpang[2]){
                    break;
                }
            }

            if(penumpang[1] === jalan){
                from = true;
            }
                
        }
        data.bayar = harga;
        result.push(data);
    }
    return result;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]