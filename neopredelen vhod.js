function uniteUnique() {
    let inputArr = Array.prototype.slice.call(arguments);
    console.log(inputArr)// exit is [ [ 1, 3, 2 ], [ 5, 2, 1, 4 ], [ 2, 1 ] ]
  }
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
