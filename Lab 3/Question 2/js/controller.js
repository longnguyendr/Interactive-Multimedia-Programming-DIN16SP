

function addToList() {
    var userInput = document.getElementById("inputField");

    if (userInput.value != "") {
        //check if storage has that item, only once when reload page
        checkOnce();
        // add to array
        listOfPeople.addPerson(userInput.value);
        //store data to local storage array
        toStorage(listOfPeople);
        //update to show to html / show data from storage
        showData();
        userInput.value = "";
    } else {
        alert("Please add some text");
    }
}
