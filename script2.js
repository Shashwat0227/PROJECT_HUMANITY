// alert("is it working");

document.getElementById("sub1").onclick = function () {
  var a = Math.random();
  if (a > 0.5) {
    document.getElementById("res").innerHTML =
      "Congrats , You've been promoted to level 2";
    document.getElementById("lvl").innerHTML = "Current Level:2";
  } else {
    document.getElementById("res").innerHTML = "Better Luck next time";
  }
};
