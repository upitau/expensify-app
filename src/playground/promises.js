const promise = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   resolve({name: 'Yury', age: 33});
  // }, 1500);
  reject('Something went wrong!');
});

console.log("Before");

promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log('error: ', error);
});

console.log("After");
