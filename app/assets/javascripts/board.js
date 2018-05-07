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
});
