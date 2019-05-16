// Model

var displayedCat = document.getElementById('cat_item');
var list = document.getElementById('list');
var catName = document.getElementById('name');
var catCount = document.getElementById('count');
var catPic = document.getElementById('pict');
var catList = [];
var counter = -1;
var score = 0;
var names = ['Mittens', 'Bear', 'Dave', 'Boris', 'Max'];
var newCats = [];
class Cat {
  constructor(name) {
    this.name = name;
    this.clicks = 0;
    this.pic = 'cat.jpg';
  };
};



// Octopus (links the model to the view)

window.addEventListener('DOMContentLoaded', function() {
  // name();
  lister();
  creator();
  listen();
});

// Create the list of cats
function lister() {
  for (i = 0; i < names.length; i++) {
    var elem = document.createElement('span');
    elem.innerHTML = names[i];
    renderList(elem);
  };
  for (i = 0; i < list.children.length; i++) {
    catList.push(list.children[i]);
  };
};

// Create cat objects
function creator() {
  for (i = 0; i < names.length; i++) {
    var newCat = new Cat(names[i]);
    newCats.push(newCat);
  };
};

// Tell the view to display the selected cat
function update(c) {
  disp(c)
};

// Increment the clicks
function incrementer(catOpen) {
  for (i = 0; i < newCats.length; i++) {
    if (catOpen === newCats[i].name) {
      newCats[i].clicks++
      console.log(newCats[i])
      inc(newCats[i])
    }
  }
}
// View - display

// Display selected cat
function disp(c) {
  catName.innerHTML = c.name;
  catCount.innerHTML = c.clicks;
  catPic.src = c.pic;
}

function inc(c) {
  catCount.innerHTML = c.clicks;
}

// Add a listener to the displayed photo
catPic.addEventListener('click', function() {
  console.log(this)
  var catOpen = catName.innerHTML;
  incrementer(catOpen);
})

update

// View - list

function renderList(elem) {
  list.appendChild(elem);
};

// Add listeners to the list of cats
function listen() {
  for (i = 0; i < newCats.length; i++) {
    catList[i].addEventListener('click', function() {
      for (i = 0; i < newCats.length; i++) {
        if (this.innerHTML === newCats[i].name) {
          console.log(newCats[i])
          update(newCats[i]);
        }
      }
    });
  };
};
