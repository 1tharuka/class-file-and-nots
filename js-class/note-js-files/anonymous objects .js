// anonymou =  objects without a name
//                     Not directly referenced
//                     less syntax no need for uniquenames
                    

class crte {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}
let cards = [
 new crte("A", "Herds"),
 new crte("A", "Spades"),
 new crte("A", "Diamonds"),
 new crte("A", "clubs"),
 new crte("2", "Herds"),
 new crte("2", "Spades"),
 new crte("2", "Diamonds"),
 new crte("2", "clubs"),
]

console.log(cards[0].value + "  " +cards[0].suit);
cards.forEach(crte => console.log(`${crte.value} ${crte.suit}`))
