const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('siapa namamu? ', (nama) => {
            console.log(`hallo ${nama}`);
            rl.close();
})
