var funcs = [];
// let's create 3 functions
for (let i = 0; i < 3; i++) {
  // and store them in funcs
  funcs[i] = function() {
    // each should log its value.
    console.log("My value: " + i);
  };
  funcs[i]();
}


funcs[0]();
funcs[1]();
funcs[2]();

for (var j = 0; j < 3; j++) {
  // and now let's run each one to see
  funcs[j]();
}

var func1=function(){
  var i=0;
  return function(){
    console.log(i++);
  }
};

var func2=func1;

func1();
func2();
func2();