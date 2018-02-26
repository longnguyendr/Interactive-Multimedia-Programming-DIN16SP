

function addALine(input) {
    var output = document.getElementById("displays");
    var t = document.createTextNode(input);
    var li = createAElement("li", "list-item");
    //add value  button to line
    li.appendChild(t);
    output.appendChild(li);
}
