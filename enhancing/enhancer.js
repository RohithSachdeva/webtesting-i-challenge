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
  return { ...item, enhancement: item.enhancement + 1 };
} else if (item.enhancement === 20) {
  return(item)
}
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
