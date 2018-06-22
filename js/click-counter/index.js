function main () {
  var panelsElements = document.querySelector('.wrapper');
  [].slice.apply(panelsElements.children).forEach(function (panelElement) {
    var panel = new Panel();
    panel.init(panelElement);
  });
}

window.onload = main;

var Panel = function() {

    this.clicks = 0;

    this.init = (el) => {
        var classAttr = el.getAttribute("class"),
            counter = document.querySelector(`.${classAttr}-counter`);

        el.onclick = () => {
            counter.innerHTML = ++this.clicks;
        }
    }
}
