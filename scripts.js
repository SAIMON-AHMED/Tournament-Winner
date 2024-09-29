function tournamentWinner(competitions, results) {
  const pointTable = {};
  let max = 0;
  let winner = '';
  for (let i = 0; i < results.length; i++) {
    let matchWinner = (results[i] == 1) ? competitions[i][0] : competitions[i][1];
    
    if (pointTable.hasOwnProperty(matchWinner)) {
      pointTable[matchWinner] += 3;
    } else {
      pointTable[matchWinner] = 3;
    }
    if (pointTable[matchWinner] > max) {
      max = pointTable[matchWinner];
      winner = matchWinner;
    }
  } 
  return winner;
}
