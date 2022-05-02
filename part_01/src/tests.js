let tab = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];

for (var i = 0; i < 5; ++i) {
    for (let j = 0; j < 2; j++) {
        // console.log(tab[i][j]);
        setTimeout(function () {
            console.log(tab[i][j]); // output 0, 1, 2, 3, 4 
          }, 1000);
    }
}