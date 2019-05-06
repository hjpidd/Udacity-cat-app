var pics = document.getElementsByClassName('img');
var count = document.getElementsByClassName('score');
var cats = document.getElementsByClassName('cat_item');
var list = document.getElementsByClassName('list')[0];
var catSel = [];
var catList = [
  {name: 'Mittens', clicks: 0, pic: 'cat.jpg'},
  {name: 'Bear', clicks: 0, pic: 'cat.jpg'},
  {name: 'Dave', clicks: 0, pic: 'cat.jpg'},
  {name: 'Boris', clicks: 0, pic: 'cat.jpg'},
  {name: 'Max', clicks: 0, pic: 'cat.jpg'}
];
var counter = -1;

window.addEventListener('DOMContentLoaded', function() {
  // name();
  lister();
  putter();
  clickCount();
});

function lister() {
  for (i = 0; i < catList.length; i++) {
    var elem = document.createElement('span');
    elem.innerHTML = catList[i].name;
    list.appendChild(elem);
    catSel.push(elem);
  };
};

// function name() {
//   for (i=0;i<cats.length;i++) {
//     cats[i].children[0].innerHTML = catList[i].name;
//   };
// };

function putter() {
  catSel.forEach(function(cat) {
    var name = cat.innerHTML
    cat.addEventListener('click', (function(nameCopy) {
      return function() {
        counter++;
        var catName = nameCopy;
        if (counter < cats.length) {
          var thisCat = cats[counter];
          var newCatName = document.createElement('h3');
          newCatName.innerHTML = catName;
          var newCatPic = document.createElement('img');
          newCatPic.classList.add('img');
          newCatPic.src = catList[counter].pic;
          var newCatDiv = document.createElement('div');
          newCatDiv.classList.add('score');
          var countUp = document.createElement('h1');
          countUp.innerHTML = 'Cat clicks: 0';
          newCatDiv.appendChild(countUp);
          thisCat.appendChild(newCatName);
          thisCat.appendChild(newCatPic);
          thisCat.appendChild(newCatDiv);
          thisCat.classList.remove('hide');
        }
        else {
          alert('That\'s enough cats for one day!');
        };
      };
    })(name));
  });
};

function clickCount() {
  var score = 0;
  for (i = 0; i < cats.length; i++) {
    cats[i].addEventListener('click', (function(countOne) {
      return function() {
        countOne++;
        this.children[2].children[0].innerHTML = 'Cat clicks: ' + countOne;
      };
    })(score));
  };
};
