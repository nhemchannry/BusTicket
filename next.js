function notifyMessage(message, color){
    var message_box= document.createElement("div");
    message_box.style.width= "max-content";
    message_box.style.height="max-content";
    message_box.style.position="fixed";
    message_box.style.display="sticky";
    message_box.style.top="50px";
    message_box.style.right="50px";
    message_box.style.borderRadius="5px";
    message_box.style.boxSizing="border-box";
    message_box.style.padding="10px";
    message_box.style.backgroundColor=color;
    message_box.style.boxShadow="3px 3px WhiteSmoke";
    var text_message = document.createElement("p");
    text_message.style.color="white";
    text_message.style.innerHTML= message;
    text_message.style.fontFamily="Arial, Helvetica, sans-serif";
    message_box.appendChild(text_message);
    document.body.appendChild(message_box);
    message_box.classList.add("message_box");
    setTimeout(()=>{
        document.body.removeChild(message_box);
    },3000

    );
}