
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    const test = process.env.FAT;
    console.log("Microservices rock!");
    console.log(test);
    await sleep(5000);
  }
}

main();
