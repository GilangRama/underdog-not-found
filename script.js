function draw(text) {
  var canvas = document.getElementById("idCanvas");
  var context = canvas.getContext("2d");

  var imageObj = new Image();

  imageObj.onload = function () {
    context.drawImage(imageObj, 0, 0);
    context.font = "40px Monospace";
    context.fillStyle = "white";
    context.fillText(text, 250, 490); // left, top

    var canvas = document.getElementById("idCanvas");
    var dataURL = canvas.toDataURL();

    if (dataURL) {
      setTimeout(() => {
        var w = window.open("about:blank");
        w.document.body.appendChild(w.document.createElement("iframe")).src =
          dataURL;
        w.document.body.style.margin = 0;
        w.document.getElementsByTagName("iframe")[0].style.width = "100%";
        w.document.getElementsByTagName("iframe")[0].style.height = "100%";
        w.document.getElementsByTagName("iframe")[0].style.border = 0;
      }, 0);
    }
  };
  imageObj.setAttribute("crossOrigin", "anonymous");
  imageObj.src = "invitation-card.png";
}

function getText(e) {
  var text = document.getElementById("inputText").value;
  draw(text);
  var canvas = document.getElementById("idCanvas");
  //   canvas.classList.remove("hide");
}
