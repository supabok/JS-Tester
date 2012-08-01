var chatcomm = new WebSocket('ws://localhost:8080');
chatcomm.onmessage = function(msg) {
    msg = JSON.parse(msg); // decode JSON into object
    var chatlog = document.getElementById("chatlog");
    var docfrag = document.createDocumentFragment();
    var msgdiv;
    for (var i=0; i<msg.messages.length; i++) {
        msgdiv = document.createElement("div");
        msgdiv.appendChild(document.createTextNode(msg.messages[i]));
        docfrag.appendChild(msgdiv);
    }
    chatlog.appendChild(docfrag);
};

chatcomm.onclose = function() {
    alert("The chatroom connection was lost. Refresh page to reconnect.");
};

document.getElementById("sendmsg").addEventListener("click", function(){
    var newmsg = document.getElementById("newmsg");
    chatcomm.send(newmsg.value); // send the message to the server
    newmsg.value = ""; // clear out the message entry box
}, false);


//The WebSocket object instance has, similar to XHR, a readyState property, which lets
//you examine the state of the connection. It can have the following constant values:
//{worker}.CONNECTING (numeric value 0)
//connection has not yet been established
//{worker}.OPEN (numeric value 1)
//connection is open and communication is possible
//{worker}.CLOSING (numeric value 2)
//connection is being closed
//{worker}.CLOSED (numeric value 3)
//connection is closed (or was never opened successfully)
//The events that a WebSocket object instance fires are:
//    open
//called when the connection has been opened
//message
//called when a message has been received from the server
//error
//called when an error occurs with the socket (sending or receiving)
//close
//called when the connection is closed