// the first line contains a single integer N
// the number of rows and columns in the matrix arr
// each of the next N  lines describes a row, arr[i]
// and consists of N, space-separated integers arr[i][j]

//1
function diagonalDifference(arr) {
  // Write your code here
  let primDiag = 0;
  let secDiag = 0;
  let n = arr.length;

  for (var i = 0, j = n - 1; i < n; i++, j--) {
    primDiag += arr[i][i];
    secDiag += arr[i][j];
  }
  return Math.abs(primDiag - secDiag);
}

/*2

var n = parseInt(readLine());
var suma = 0, sumb = 0;
for(var i = 0; i < n; i++){
   var line = readLine().split(' ');
   suma += Number(line[i]);
   sumb += Number(line[n-i-1]);
}
console.log(Math.abs(sumb-suma));

*/
