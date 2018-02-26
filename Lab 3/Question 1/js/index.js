var connection = new WebSocket("wss://obscure-waters-98157.herokuapp.com")

function WebSocketTest()
{

               //Display content to <p>
						   var displaylist = document.getElementById("displays");
							 connection.onmessage =function(message){console.log( displaylist.innerHTML += "<br>" + "-------" + "<br>" + message.data);}

}

//--------------------- Press button to send message---------------------
function sends()
{
var inputvalue = document.getElementById("inputs").value;
  if(inputvalue == '')
	{
		alert("Please enter some text");

	}
  else {
    connection.send(inputvalue);
  }
  document.getElementById("inputs").value = "";
}

//-------------------- Connection opened------------------------------------


connection.addEventListener('open', function (event) {
	var status = document.getElementById("Status");
		status.innerHTML = "CONNECTING TO SERVER SUCCESSFUL" 	;
});
// Connection closed
connection.addEventListener('close', function (event) {
	var status = document.getElementById("Status");
		status.innerHTML = "CONNECTION CLOSED";
});
// Connection error
connection.addEventListener('error', function (event) {
	var status = document.getElementById("Status");
		status.innerHTML = "CAN'T CONNECT TO THE SERVER";
});

//--------------------------- Press ENTER to send the message-----------------
function keyCode(event) {
var inputvalue = document.getElementById("inputs").value;
    var x = event.keyCode;
    if (x == 13)
    {
      if(inputvalue == '')
      {
        alert("Please enter some text");

      }
      else {
        connection.send(inputvalue);
      }

    }
    else {
      return false;
    }
    document.getElementById("inputs").value = "";
}
 /*
Syntax WebSocket

connection.readyState
connection.send('text');
connection.onmessage =function(message){console.log(message.data);}

*/
