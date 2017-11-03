// getFirstSelector()
function getFirstSelector(selector) {
  return document.querySelector(selector)
};

// nestedTarget()
// we need to pull a class, .target, out of a nested id, #target.
// This method should work with arbitrary elements
function nestedTarget() {
  return document.querySelector('#nested .target')
};

// increaseRankBy(n)increases the ranks in all of the .ranked-lists by n.

function increaseRankBy(n) {

// I was using querySelector, which returns the first one found. If you want 'All' of them returned, use querySelectorAll
  const list = document.querySelectorAll('ul.ranked-list')

  for ( let i = 0; i < list.length; i++) {
    let elementList = list[i].children

    for ( let j = 0; j < elementList.length; j++){
      elementList[j].innerHTML = parseInt(elementList[j].innerHTML) + n
    }
  }
};

function deepestChild() {
  const findId = document.getElementById("grand-node")
    const findDiv = findId.querySelectorAll('div')

    return findDiv[3]

};
