(function () {
  console.log('1'); //

  Promise.resolve(console.log('2')); //

  setTimeout(() => {
    //
    console.log('3');
  }, 2000);

  Promise.resolve().then(() => setTimeout(() => console.log('4')));

  setTimeout(() => {
    //
    console.log('5');
  });

  console.log('6'); //

  setTimeout(() => {
    //
    console.log('7');
  }, 0);

  new Promise((res, rj) => {
    console.log('10');
    res('8');
  }).then(console.log); //

  console.log('9');
})(); //

// macro 3 5 7 4
// 1 2 6 10 9

// 1 2 6 10 9 8 5 7 4 3

