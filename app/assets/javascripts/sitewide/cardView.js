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

class Deck{
  
}