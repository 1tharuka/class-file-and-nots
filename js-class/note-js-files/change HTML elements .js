// add/change HTML elements 
// .inner HTML (vulnerable to xss attacks)
// .textcontent(more secure)

// let tahName = document.createElement("h1");
// tahName.innerHTML = "Tharuka";
// document.body.append(tahName);

const myList = document.querySelector("#frouds");
const listItem = document.createElement("li");
listItem.textContent = "pets";
myList.append(listItem);
myList.prepend(listItem);
myList.insertBefore(listItem,myList.getElementsByTagName(li[3]))
