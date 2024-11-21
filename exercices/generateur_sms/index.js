let res = 0;

for (let i = 0; i < 10000; i++) {
  res += Math.floor(Math.random() * 100)  ;
}

console.log(res / 10000);