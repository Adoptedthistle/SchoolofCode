function shopItem(name, price, quantity, shelfNumber) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.shelfNumber = shelfNumber;
  this.sell = function() {
    this.quantity--;
  };
  this.describe = function() {
    return `${this.name}:${this.price}:only ${this.quanity} left!!`;
  };
  this.total = function() {
    return `${this.total}:${this.sell} ${this.name} left!!`;}
   } if (this.quantity <3) {
    return `WARNING there are only ${this.quantity} ${this.name} left. Reorder stock!`;
   }; return `there are ${this.newQuantity} ${this.name} left`;
};
this.moveShelf = function(newShelfNumber) {
   this.shelfNumber = newShelfNumber;
  };
  this.restock = function(newQuantity) {
    this.quantity = this.quanity + newQuantity;
  };
  this.itemOrigin = function(itemOrigin);
   return `${name}: comes from {itemOrigin}`




const bananas = new shopItem("bananas", 5, 10, 5);
const trunks = new shopItem("trunks", 100, 1000, 99);
const tea = new shopItem("tea", 20, 1500, 42 );

//task 1
//check stock method
//quantity in a string DONE
//bonus points for warning if stock <3
//task 2
//move shelf
//takein shelf shelfNumber
//set shelf number to that
//task 3
//restock
//add amount stocked to quantity

//insert prototype method
//add prototype value
