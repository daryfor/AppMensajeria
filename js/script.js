function fct_callpopup() {
    document.querySelector(".popup").style.display = "flex";
}

function fct_closeWindow() {
    document.querySelector(".popup").style.display = "none";
}

function fct_createChannel() {
    //alert("New channel");
    var newName = document.getElementById("newChannel").value;
    var listNode = document.getElementById("list");
    var liNode = document.createElement("li");
    var aNode = document.createElement("a");
    var txtNode = document.createTextNode("#" + newName);
    var attr = document.createAttribute("href");

    attr.value = "#";

    aNode.setAttributeNode(attr);

    aNode.appendChild(txtNode);
    liNode.appendChild(aNode);
    listNode.appendChild(liNode);

    fct_closeWindow();
    document.getElementById("newChannel").value = "";

}

function fct_search() {
    alert("search finished");
}

function fct_newMessage() {
    alert("new message created");
}