
//accessing by class names
let items =document.getElementsByClassName(`list-group-item`)




//accessing by tag names
// let items =document.getElementsByTagName(`li`)
console.log(items);
console.log(items[1]);
items[1].textContent=`hello 2`
items[1].style.fontWeight="bold"
items[1].style.backgroundColor="yellow"
items[2].style.backgroundColor="green"
for (const li of items) {
    li.style.background=`grey`
    li.style.fontWeight="bold"
}