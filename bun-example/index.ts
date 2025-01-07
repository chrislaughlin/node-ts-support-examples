console.log("Hello via Bun!");

console.log('Starting loop');
let total = 0;
for (let i = 0; i < 1000000; i++) {
    total += i;
    // console.log(i);
}

console.log('Finished loop');