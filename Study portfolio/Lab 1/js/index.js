/*---------ADD PERSON FUNCTION-----------*/

function addPerson()
{

  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
        if (inputValue === '')
        {
          alert("You must write something!");
        }
        else
        {
          document.getElementById("displays").appendChild(li);
        }
        document.getElementById("myInput").value = "";

}
function keyCode(event) {

    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    var x = event.keyCode;

    if (x == 13)
    {
      if (inputValue === '')
      {
        alert("You must write something!");
      }
      else
      {
        document.getElementById("displays").appendChild(li);
      }
      document.getElementById("myInput").value = "";

    }
    else {
      return false;
    }
    document.getElementById("myInput").value = "";
}
/*
function addPerson()
{

}
*/
