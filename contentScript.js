
const script = function () {

    setInterval(() => {

    var shortsAtt = document.querySelectorAll('[overlay-style="SHORTS"]');
    var newItem = document.createElement('div');

    for (i = 0; i < shortsAtt.length; i++) {
         shortsAtt[i].parentNode.parentNode.parentNode.parentNode.parentNode.replaceWith(newItem);
    }

  }, 1100)

}

script();
