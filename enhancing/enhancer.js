module.exports = {
  success,
  fail,
  repair,
  get,
};

// - a `success(item)` method that accepts an `item` object and **returns a new item** object modified according to the rules defined by the client for enhancement success. 
//So enhancement will be a manual value inserted into the tests?  
//If level is 20 .. not changed... so either < 20 or !== 20?  



function success(item) {
  if (item.enhancement < 20) {
  return item.enhancement + 1 ;
} else if (item.enhancement === 20) {
  return item.enhancement = 20;
}
}


// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

function fail(item) {
  if (item.enhancement < 15) {
    return item.durability - 5;
  }  else if (item.enhancement === 15) {
    item.durability = item.durability - 10;
    return{...item};
  } else if (item.enhancement > 16) {
    item.durability = item.durability - 10;
    item.enhancement = item.enhancement - 1;
    return { ...item };
  }

}

function repair(item) {
  let repairedItem = {
    ...item,
    durability: 100,
  };
  return repairedItem;
}

// `item` object and **returns a new item** with the durability restored to 100.

function get(item) {
  return { ...item };
}
