/*---------ADD PERSON FUNCTION-----------*/
$("#btn").on("click" , addPerson);
function addPerson()
{

  var inputValue = $("#myInput").val();
        if (inputValue === '')
        {
          alert("You must write something!");
        }
        else
        {
          $("#displays").append(inputValue + "<br/>");
        }

        $("#myInput").val("");
}
function keyCode(event) {

    var x = event.keyCode;
      var inputValue = $("#myInput").val();
    if (x == 13)
    {
        if (inputValue === '')
        {
          alert("You must write something!");
        }
        else
        {
          $("#displays").append(inputValue + "<br/>");
        }
        $("#myInput").val("");
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
