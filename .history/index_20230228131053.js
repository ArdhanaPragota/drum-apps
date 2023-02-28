var drumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i<drumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("i got clicked");
    });
}

