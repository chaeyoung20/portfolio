// header
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".top-header").addClass("up");
    } else {
        $(".top-header").removeClass("up");
    }
});

// modal
var modals = document.getElementsByClassName("modal");
var btns = document.getElementsByClassName("btnModal");
var spanes = document.getElementsByClassName("close");
var funcs = [];


function Modal(num) {
  return function () {

    btns[num].onclick = function () {
      modals[num].style.display = "flex";
      if (num === 0) {
        checkServiseTermClick = true;
      } else if (num === 1) {
        checkPersonalTermClick = true;
      }
      document.body.style.overflow = "hidden";
      console.log(num);
    };

    spanes[num].onclick = function () {
      modals[num].style.display = "none";
      document.body.style.overflow = "auto";
    };
  };
}

for (var i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}

for (var j = 0; j < btns.length; j++) {
  funcs[j]();
}

window.onclick = function (event) {
  if (event.target.className == "modal") {
    event.target.style.display = "none";
  }
};

$(document).ready(function() {
	$(".close").click(function() {
		$(".modal1,.modal2,.modal3,.modal4,.modal5,.modal6,.modal00,.modal01").css({
			"display": "none"
		});
        $('html').css({overflowY:'scroll'});
	});
  $(".btnModal-web1").click(function() {
		$(".modal00").css({
			"display": "flex"
		});
        $('html').css({overflowY:'hidden'});
	});
  $(".btnModal-web2").click(function() {
		$(".modal01").css({
			"display": "flex"
		});
        $('html').css({overflowY:'hidden'});
	});
	$(".btnModal1").click(function() {
		$(".modal1").css({
			"display": "flex"
		});
        $('html').css({overflowY:'hidden'});
	});
    $(".btnModal2").click(function() {
		$(".modal2").css({
			"display": "flex"
		});
    $('html').css({overflowY:'hidden'});
	});
    $(".btnModal3").click(function() {
		$(".modal3").css({
			"display": "flex"
		});
    $('html').css({overflowY:'hidden'});
	});
    $(".btnModal4").click(function() {
		$(".modal4").css({
			"display": "flex"
		});
    $('html').css({overflowY:'hidden'});
	});
    $(".btnModal5").click(function() {
		$(".modal5").css({
			"display": "flex"
		});
    $('html').css({overflowY:'hidden'});
	});
    $(".btnModal6").click(function() {
		$(".modal6").css({
			"display": "flex"
		});
     $('html').css({overflowY:'hidden'});
	});
});