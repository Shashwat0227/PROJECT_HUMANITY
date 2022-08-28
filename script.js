//ReDirection

let ans1, ans2;
let ans3;

document.getElementById("sign_up").onclick = function () {
  ans1 = document.getElementById("email").value;
  ans2 = document.getElementById("full-name").value;
  ans3 = document.getElementById("select-where").value;
  console.log(ans3);
  if (ans1 === "" && ans2 === "") {
    alert("Please complete your Verification");
  } else {
    location.href =
      "file:///C:/Users/jaina/OneDrive/Documents/HACKFORSOC/ProjectHumanity/index2.html";
  }
};

document.getElementById("insta").onclick = function () {
  location.href = "https://www.instagram.com/humanity_uplifting_mankind/?hl=en";
};

document.getElementById("linkdin").onclick = function () {
  location.href =
    "https://www.linkedin.com/company/humanity-uplifting-mankind/?originalSubdomain=in";
};

document.getElementById("facebook").onclick = function () {
  location.href =
    "https://m.facebook.com/True.Humans.of.Visakhapatnam/posts/192594602272903?locale=hi_IN&_rdr";
};

document.getElementById("op1").onclick = function () {
  location.href =
    "file:///C:/Users/jaina/OneDrive/Documents/HACKFORSOC/ProjectHumanity/interface1.html";
};

document.getElementById("op2").onclick = function () {
  location.href =
    "file:///C:/Users/jaina/OneDrive/Documents/HACKFORSOC/ProjectHumanity/interface2.html#";
};

//Scroll

var btn1 = document.getElementById("books");
btn1.scrollIntoView();
