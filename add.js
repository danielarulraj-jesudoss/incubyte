function add(inputstr,intx) {
  var str = inputstr.replace(/[^0-9]/g, "");
  console.log("str", str);
  let sumOf = 0;
  for (var i = 0; i < str.length; i++) {
    sumOf += parseInt(str.charAt(i));
    console.log(str.charAt(i));
  }
  document.getElementById("resultX"+intx).innerHTML = sumOf;
}
add("1,5",1);
add("1\n2,3",2);
add("//;\n1;2",3); 
