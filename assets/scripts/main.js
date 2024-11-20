function insert(num) {
  var result = document.getElementById("screen").innerHTML;
  document.getElementById("screen").innerHTML = result + num;
}

function clean() {
  let result = (document.getElementById("screen").innerHTML = "");
  document.getElementById("screen").innerHTML = result;
}

function back() {
  let result = document.getElementById("screen").innerHTML;
  document.getElementById("screen").innerHTML = result.substring(0, result.length - 1);
}

function calc() {
  let result = document.getElementById("screen").innerHTML;
  if (result) {
    document.getElementById("screen").innerHTML = eval(result);
  } else {
    document.getElementById("screen").innerHTML = "Result Not Found";
  }
}
