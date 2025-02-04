function add(inputstr, intx) {
  var isNegative = inputstr.match(/-?\d+/g).map(Number);
  console.log("isNegative", isNegative);
  let negativeNumbers = isNegative.filter((num) => num < 0);
  console.log("isNegative", negativeNumbers);
  if (negativeNumbers.length > 0) { 
    document.getElementById("resultX" + intx).innerHTML = "negative numbers not allowed " + negativeNumbers.toString();
  } else {
    var str = inputstr.replace(/[^0-9]/g, "");
    console.log("str", str);
    let sumOf = 0;
    for (var i = 0; i < str.length; i++) {
      sumOf += parseInt(str.charAt(i));
      console.log(str.charAt(i));
    }
    document.getElementById("resultX" + intx).innerHTML = sumOf;
  }
}
add("1,5", 1);
add("1\n2,3", 2);
add("//;\n1;2", 3);
add("-2,3,-5,-52", 4);