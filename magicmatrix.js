function formingMagicSquare(s) {
  let corners = [],
      mids = [],
      mid;
   for (let i = 0; i < s.length; i++) {
     for (let j = 0; j < s.length; j++) {
       if (i % 2 === 0 && j % 2 === 0) {
         corners.push(s[i][j])
       } else if (i === 1 & j === 1) {
         mid = s[i][j]
       } else {
         mids.push(s[i][j])
       }
     }
   }

   return 'corners: ' + corners + '\nmids: ' + mids + '\nmiddle: ' + mid
}

console.log(formingMagicSquare([[4, 9, 2],
[3, 5, 7],
[8, 1, 5]]))
