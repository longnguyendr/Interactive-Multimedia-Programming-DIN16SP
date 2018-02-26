function getperson(callback) {
  var personList = "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp";
  $.ajax({
    dataType: "jsonp",
    url: personList,
    success: callback,
  });
}

function loadPersonStuff() {
  getperson(jsonCallback);
}

function jsonCallback(data)
{
  console.log(data);
  for (var i=0; i<data.length ; i++)
  {
    $("#person").append(data[i].name + "  : "+ "<a href=" + "'" +"mailto:"  + data[i].email + "'" + ">" + data[i].email + "</a>" + "<br/>");

  }
    $("#person").append("-------------------------------------" + "<br/>");

}
