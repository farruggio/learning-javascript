var s = '\n';
var r = 10;
var c = 10;

for (var i = 0; i < r; i++) {
  for (var j = 0; j < c; j++) {

    if (i==j)s += '1, '; else s+='0, ';
    
  }
  s += '\n';
}
console.log(s);