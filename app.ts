console.log("hllo");
function add(n1: number, n2: number, showResults: boolean) {
  if (showResults) {
    console.log(n1 + n2);
  } else {
    return n1 + n2;
  }
}

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}
const n1 = 1;
const n2 = 2;
const printResults = true;

add(n1, n2, printResults);
