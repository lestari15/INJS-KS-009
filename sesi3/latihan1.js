let orang = [
    { name: "Yusuf",noAbsen : "1" },
    { name: "Wahyu",noAbsen : "2" },
    { name: "Hafid",noAbsen : "3" },
    { name: "Raka",noAbsen : "4" },
    { name: "Rizky",noAbsen : "5" },
    { name: "Yolan",noAbsen : "6" },
  ]
// console.log(orang)

  // const ganjil = orang.filter(data => data.noAbsen % 2 == 1);
  // const genap = orang.filter(data => data.noAbsen % 2 == 0);

  //   console.log("==============ganjil==============")
  //   console.log(ganjil);
  //   console.log("==============genap==============")
  //   console.log(genap);



// const descending = orang.sort(function(atas, bawah){return bawah.noAbsen-atas.noAbsen});

//   console.log(descending)  



var result = orang.reduce(function(author, val, index) {
    var koma = orang.length ? "," : "";
    
    return author + val.name + koma ;
  }, '');

    console.log(result);