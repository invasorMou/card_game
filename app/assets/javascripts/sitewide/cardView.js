function cardView(card,skills){
  $view = $('.cardPic');
  $desc = $('.description');
  $view.empty();
  $desc.empty();
  $view.attr("src",card)
  $desc.append(skills)
}

function addCard(card, id){
  var img = '<img src='+card+' width="100" onclick="removeCard(this)" data-id='+id+'>';
  $deck = $('.deck-content');
  $deck.append(img);
}

function removeCard(card){
  card.remove()
}

function loadDeck(ele){
  $.get( "/deck/"+ele)
  .done(function( data ) {
    var length = data.payload.length;
    $deck = $('.deck-content');
    for(var x = 0; x < length; x ++){
      var img = '<img src='+data.payload[x]+' width="100" data-skills="none" onclick="removeCard(this)" onmousemove="cardView(this.src, this.getAttribute("data-skills"))>';
      $deck.append(img);
    }
  });
}

class Deck{
  
}