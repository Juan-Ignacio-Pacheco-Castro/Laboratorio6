var counter = 3;
function addText() {
  element.innerHTML += `<tr><td>`+ counter + `</td></tr>`;
  counter++;
}
const element = document.getElementById("outside");
element.addEventListener("click", addText, false);
  