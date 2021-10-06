var elements = document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "b");
for (let i = 0; i < elements.length; i++){
    elements[i].style.backgroundColor  = 'blue';
    elements[i].style.color  = 'white';
}