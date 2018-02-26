function createAElement(e, className) {
    var ele = document.createElement(e);
    var attr = document.createAttribute("class");
    attr.value = className;
    ele.setAttributeNode(attr);
    return ele;
}

//create Array to store peeople
function peopleListArray() {
    this.allPeople = new Array();

    this.addPerson = function(person) {
        this.allPeople.push(person);
    }
}
var listOfPeople = new peopleListArray();
var userInput = document.getElementById("inputField");

function checkOnce()
{
    if (typeof(Storage) !== "undefined")
    {
        //test if there is something storage
        //if true mean there is something in storage and now to be show
        if(localStorage.hasOwnProperty("peopleListArray"))
        {
            var peopleListStorage = JSON.parse(localStorage.getItem("peopleListArray")); // return object
            for (var i in peopleListStorage.allPeople)
            {
                listOfPeople.addPerson(peopleListStorage.allPeople[i]);
            }
        }
    }
    else
      {
        console.log("Sorry, your browser does not support web storage...");
      }
    checkOnce = function(){};
}

function toStorage(input) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("peopleListArray", JSON.stringify(input));
    } else {
        console.log("Sorry, your browser does not support web storage...");
    }
}



function showData() {
    if (typeof(Storage) !== "undefined") {
        //test if there is something storage
        //if true mean there is something in storage and now to be show
        if(localStorage.hasOwnProperty("peopleListArray")) {
            var peopleListStorage = JSON.parse(localStorage.getItem("peopleListArray")); // return object
            document.getElementById("displays").innerHTML = "";
            console.log(peopleListStorage);

            for (var i in peopleListStorage.allPeople)
            {
                addALine(peopleListStorage.allPeople[i]);
            }
        }
    } else {
        console.log("Sorry, your browser does not support web storage...");
    }
}
