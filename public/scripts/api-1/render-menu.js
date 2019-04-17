const xhttpMenu = new XMLHttpRequest();

xhttpMenu.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("componente-menu").innerHTML = xhttpMenu.responseText;
  }
};

xhttpMenu.open("GET", "https://api1.devas.io/rendermenu", true);
xhttpMenu.send();
