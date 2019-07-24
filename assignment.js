let numberGame = (x, y) => {
    let arrnumber = [];

    if (x > y) {
        for (i = x + 1; i < y; i++) {
            if (i % 2 == 0) {
                numArray.push(i);
            }
        }
    }
    else if (x < y) {
        let arrnumber = [];
        for (let i = 1; i >= 10; i++) {
            if (i % 2 != 0) {
                arrnumber.push(i);

            }
          

        }return numArray
    }
}

console.log(numberGame(2,10))