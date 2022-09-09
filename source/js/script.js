alert ("WORK")
let listSee = document.querySelector('.list');
let navButton = document.querySelector('.navigation__toggle');

listSee.classList.remove('list--nojs');

navButton.addEventListener('click', function(){
  if (navButton.classList.contains('navigation__toggle--closed')) {
    navButton.classList.remove('navigation__toggle--closed');
    listSee.classList.remove('list--closed');
  } else {navButton.classList.add('navigation__toggle--closed');
  listSee.classList.add('list--closed');
}
})
