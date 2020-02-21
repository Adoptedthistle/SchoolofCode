var generatedId = (function() {
  var id = 2;
  console.log("initial function:", id);
  return function() {
    id += 1;
    console.log("child function:", id);
    return id;
  };
})();

function makeAdder(a)
