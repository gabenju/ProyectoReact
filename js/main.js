const startTime = performance.now();

for (let i = 0; i < 1000; i++) {
  console.log('hola mundo');
}

const endTime = performance.now();

console.log(endTime - startTime);

/*
const startTime = performance.now();
let x = 0;
for (let i = 0; i < 1000; i++) {
  x++;
}

const endTime = performance.now();

console.log(endTime - startTime);
*/