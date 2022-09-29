function deleteByEmail() {
    let email = document.getElementsByName('email')[0].value;
    let tableCells = document.querySelectorAll('#customers tr td:nth-child(2)');

    for (let element of tableCells) {
        if(element.textContent == email){
            element.parentElement.remove()
            document.getElementById('result').innerText = "Deleted.";
            return;
        }
        
            document.getElementById('result').innerText = "Not found.";
        
    }
 
}