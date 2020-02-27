function simpleArraySum(ar) {
  var sum = 0;
  for (var i = 0; i < ar.length; i++) {
    sum += ar[i]; // sum = sum + ar[i];
  }
  return sum;
}

function main() {
  var n = parseInt(readLine());
  var ar = readLine().split(" ");
  ar = ar.map(Number); // mapping(Number)
  var result = simpleArraySum(ar);
  process.stdout.write("" + result + "\n");
}
/*
 * Complete the simpleArraySum function below.

  1.The first line contains an integer, , denoting the size of the array.
  2.The second line contains  space-separated integers representing the array's              elements.
    
   * 0 < n, 
   * ar[i] <= 1000

   * 6 (denoting the size of the array)
   * 1 2 3 4 10 11 (Elements)
    => 31 

 */
