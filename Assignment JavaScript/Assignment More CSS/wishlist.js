
"use strict";

function setup(){
  let buttons = document.querySelectorAll(".but"); // selecting all the buttons


  for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", addItem(e));  // adding event listener to buttons
  }
}

setup();  //will be called as soon as the page loads.

let addedItems = []; // to keep track of added items to wishlist
let wishList = [];  // actual wishlist

function addItem(e){
	let item = `item+${e.target.id}`;  // getting the id of the item

  if (!addItems.includes(items)){ // checking if item is already added or not
    wishList.push(item);
    renderWishlist(); // implement this function as per your requirement to render your wishlist
  }else{
  	alert("Item already in wishlist.");  // alerting user if item is already added
  }
}
