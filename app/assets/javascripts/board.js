$(function() {
  var cfg;
  App.chess = new Chess();
  cfg = {
    onDrop: (function(_this) {
      return function(source, target) {
        var move;
        move = App.chess.move({
          from: source,
          to: target,
          promotion: "q"
        });
        if (move === null) {
          return "snapback";
        } else {
          return App.game.perform("make_move", move);
        }
      };
    })(this)
  };
  return App.board = ChessBoard("chessboard", cfg);


  class Board() {
    constructor(){
      this.status = '';
      this.sides = [side1, side2];
    }
  }

/* mons_z = monster zone
   deck_z = deck zone
   grav_z = graveyard zone
   hand_z = hand zone
*/
  class Side{
    constructor(){
      this.mons_z = {
        template: };
      this.deck_z =;
      this.grav_z =;
      this.hand_z =;
    }
  }








});
