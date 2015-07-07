/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({n: n}); //fixme

  for(var i = 0; i < n; i++){
    for(var j = 0; j < n; j++){
      solution.togglePiece(i, j);
      if (solution.hasAnyRooksConflicts()){
        solution.togglePiece(i, j);
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var solution = new Board({n: n});
  // debugger;
  var recursivePieceChecker = function(rowIndex){
    for (var i = 0; i < n; i++){
      solution.togglePiece(rowIndex, i);
      if(!solution.hasAnyRooksConflicts()){
        if(rowIndex === n - 1 ){
          solutionCount++
          solution.togglePiece(rowIndex, i)
          return
        }else{
          recursivePieceChecker(rowIndex + 1)
        }
      }
      solution.togglePiece(rowIndex, i)
    }
  }
  recursivePieceChecker(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n: n}); //fixme


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if(n === 0){
    return 1;
  }
  if(n === 2 || n === 3){
    return 0
  }
  var solutionCount = 0; //fixme
   var solution = new Board({n: n});
  debugger;
  var recursivePieceChecker = function(rowIndex){
    // if(rowIndex = n && !solution.hasAnyRooksConflicts()){
    //     solutionCount++;
    //     return;
    //   }
    // debugger;
    for (var i = 0; i < n; i++){
      solution.togglePiece(rowIndex, i);
      // if(rowIndex = n - 1 && !solution.hasAnyRooksConflicts()){
      //   solutionCount++;
      // }
      if(!solution.hasAnyQueensConflicts()){
        if(rowIndex === n - 1 ){
          solutionCount++
          solution.togglePiece(rowIndex, i)
          return
        }else{
          recursivePieceChecker(rowIndex + 1)
        }
      }
      // if(rowIndex = n && !solution.hasAnyRooksConflicts()){
      //   solutionCount++;
      //   return;
      solution.togglePiece(rowIndex, i)
    }
    // if(rowIndex = n && !solution.hasAnyRooksConflicts()){
    //     solutionCount++;
    //     return;
    //   }

  }
  recursivePieceChecker(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
