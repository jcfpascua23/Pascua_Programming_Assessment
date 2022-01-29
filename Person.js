var selectedRow = null;
var count = 1

function onFormSubmit(e){
    event.preventDefault();
    let formData = readFormData();

    if(formData.ageInput > 80){
        resetForm();
        window.alert('Are you sure you are ' + formData.ageInput + '?');
        return;
    }

    if (formData.nameInput != 'male' || formData.nameInput != 'Male' ||
    formData.nameInput != 'female' || formData.nameInput != 'Female'){
        resetForm();
        window.alert('Please enter male or female only.');
        return;
    }

    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    let formData = {};
    formData["id"] = count
    formData["nameInput"] = document.getElementById("nameInput").value;
    formData["ageInput"] = document.getElementById("ageInput").value;
    formData["genderInput"] = document.getElementById("genderInput").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    let table = document.getElementById("personList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let cell0 = newRow.insertCell(0);
        cell0.innerHTML = data.id;
    let cell1 = newRow.insertCell(1);
        cell1.innerHTML = data.nameInput;
    let cell2 = newRow.insertCell(2);
        cell2.innerHTML = data.ageInput;
    let cell3 = newRow.insertCell(3);
        cell3.innerHTML = data.genderInput;
    let cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`

    ++count
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('nameInput').value = selectedRow.cells[1].innerHTML;
    document.getElementById('ageInput').value = selectedRow.cells[2].innerHTML;
    document.getElementById('genderInput').value = selectedRow.cells[3].innerHTML;
}

//Update the data
function updateRecord(formData){
    selectedRow.cells[1].innerHTML = formData.nameInput;
    selectedRow.cells[2].innerHTML = formData.ageInput;
    selectedRow.cells[3].innerHTML = formData.genderInput;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('personList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('nameInput').value = '';
    document.getElementById('ageInput').value = '';
    document.getElementById('genderInput').value = '';
}