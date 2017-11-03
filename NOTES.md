querySelector()
takes one argument, a string of selectors, and returns the first element that matches these selectors. Given a document like

get <li>2</li>
 const li2 =
 document.querySelector('ul.ranked-list li ul li')

In the above example, the first query says, "Starting from document (the object we've called querySelector() on), find a ul with a className of ranked-list (the . is for className). Then find an li that is a child of that ul. Then find a ul that is a child (but not necessarily a direct descendant) of that li. Finally, find an li that is a child of that (second) ul."

QUERYSELECTORALL()
querySelectorAll works a lot like querySelector() -- it accepts a selector as its argument, and it searches starting from the element that it's called on (or from document) -- but instead of returning the first match, it returns a NodeList (which, remember, is not an Array) of matching elements.

const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString()
}
