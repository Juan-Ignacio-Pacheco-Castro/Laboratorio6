let nodeRef = document.getElementById("h1Tag");
let newCloneNode = nodeRef.cloneNode();
let replacedChild = document.getElementById("simpleText")

//Add properties through the dot
newCloneNode.innerHTML = `<a>This is a clone of the above text</a>`;
newCloneNode.style.color = 'blue';
newCloneNode.style.backgroundColor = 'red';
newCloneNode.style.borderTop;

document.getElementById("div2").replaceChild(newCloneNode, replacedChild);
