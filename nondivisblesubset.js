function nonDivisibleSubset(S, k) {
  let divisibles = {},
      len = S.length,
      l = 0,
      min = 0;

    while (l < len) {
        divisibles[S[l]] = [];
        divisibles[S[l]].non = [];
        for (let i = 0; i < S.length; i++) {
            if ((S[l] + S[i]) % k !== 0) {
                divisibles[S[l]].push(S[i])
            } else {
              divisibles[S[l]].non.push(S[i])
            }
        }
        l++
    }
    return divisibles
}

console.log(nonDivisibleSubset([278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436], 7))
