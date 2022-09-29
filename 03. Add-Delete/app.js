function addItem() {
    let newElement = document.getElementById("newItemText").value;
    let list = document.getElementById("items");

    if(newElement.length===0)
    return;

    let listItems = document.createElement("li");
    listItems.textContent = newElement;
    let remove = document.createElement("a");
    let linkedText = document.createTextNode("[Delete]");
    remove.appendChild(linkedText);
    remove.href = "#";
    remove.addEventListener('click', deleteItem);
    listItems.appendChild(remove);
    list.appendChild(listItems)
    function deleteItem(){
    listItems.remove()
}
}