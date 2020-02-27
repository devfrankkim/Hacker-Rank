// 1)
function compareTriplets(a, b) {
  var score = [0, 0];

  for (var i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      score[0]++;
    } else if (a[i] < b[i]) {
      score[1]++;
    }
  }
  return score;
}

// 2)
function compareTriplets(a, b) {
  let res = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      a[i] > b[i] ? res[0]++ : res[1]++;
    }
  }
  return res;
}
