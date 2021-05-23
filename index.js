function setAdmin(){
    if(localStorage.getItem("users")==null){
        let admin_user={
            email:"admin@gmail.com",
            password:"admin"
        }
        let users=[];
        users.push(admin_user);
        localStorage.setItem("users",JSON.stringify(users))
    }
}
function register(){
    var formElement = document.getElementById("signupform");
    var input_email = formElement.elements.namedItem("email").value;
    var psw = formElement.elements.namedItem("psw").value;
    var psw_repeat = formElement.elements.namedItem("psw-repeat").value;
    if(psw!=psw_repeat){
        notifyMessage("Password is not Match!","red");
    }
    else{
        
        var get_users = localStorage.getItem("users");
        var obj_users = JSON.parse(get_users)
        let user = {
            email: input_email,
            password: psw
        }
        obj_users.push(user);
        localStorage.setItem("users", JSON.stringify(obj_users));
        window.open('./login.html',"_self");

    }
}

function setValue(){
    localStorage.setItem("name", "lan");
    var value1 = localStorage.getItem("name");
    console.log(value1);
    localStorage.setItem("name", "team");
    var value2 = localStorage.getItem("name");
    console.log(value2);
}

function login(){
    var form = document.getElementById("loginForm");
    var email = form.elements.namedItem("email").value;
    var psw = form.elements.namedItem("psw").value;
    var get_users = localStorage.getItem("users");
    var obj_users = JSON.parse(get_users);
    var isExist = false;
    for(let i =0; i<obj_users.length; i++){
        if(obj_users[i].email == email){
            isExist= true;
            if(obj_users[i].password!= psw){
                notifyMessage("Wrong Password","red");
            }
            else{localStorage.setItem("currentUser",JSON.stringify(obj_users[i]));
                window.open('./homepage.html',"_self");
            }
        }  
    }
    if(!isExist){
        notifyMessage("User dosen't existed!","red");
    }

}

function notifyMessage(message, color){
    var message_box = document.createElement("div");
    message_box.style.width = "max-content";
    message_box.style.height = "max-content";
    message_box.style.position = "fixed";
    message_box.style.display = "sticky";
    message_box.style.top= "50px";
    message_box.style.right = "50px";
    message_box.style.borderRadius = "5px";
    message_box.style.boxSizing = "border-box";
    message_box.style.padding = "10px";
    message_box.style.backgroundColor = color;
    message_box.style.boxShadow = "3px 3px WhiteSmoke";
    var text_message = document.createElement("p");
    text_message.style.color = "white";
    text_message.innerHTML = message;
    text_message.style.fontFamily = "Arial, Helvetica, sans-serif";
    message_box.appendChild(text_message);
    document.body.appendChild(message_box);
    message_box.classList.add("message_box");
    setTimeout(()=>{
        document.body.removeChild(message_box);
    },3000);
}

function resetPassword(){
    var formElement = document.getElementById("reset_psw");
    var email = formElement.elements.namedItem("email").value;
    var old_psw = formElement.elements.namedItem("old_psw").value;
    var new_psw = formElement.elements.namedItem("new_psw").value;
    var repeat_new_psw = formElement.elements.namedItem("repeat_new_psw").value;
    var isUserExist = false;
    var isMatchPassword = false;
    if(new_psw!=repeat_new_psw){
        notifyMessage("New Password is not Match!", "red");
    }
    else{
        let get_users = localStorage.getItem("users");
        let obj_users = JSON.parse(get_users);
        for(let i = 0; i<obj_users.length; i++){
            if(obj_users[i].email ==email){
                isUserExist = true;
                if(obj_users[i].password == old_psw) {
                    isMatchPassword = true;
                    obj_users[i].password = new_psw;
                    localStorage.setItem("users", JSON.stringify(obj_users));
                    notifyMessage("Reset Password Succesful", "green");
                    break;
                }
            }
        }
        if(!isUserExist){
            notifyMessage("User doesn't exist!", "red");
        }
        else if(!isMatchPassword){
            notifyMessage("Old Password is not matched!", "red");
        }

    }
}
function checkAdmin(){
    var currentUser =  JSON.parse(localStorage.getItem("currentUser"))  ;
    var email = currentUser.email;
    var password = currentUser.password;
    var link_element = document.getElementById("admin_link");

    if(email =="admin@gmail.com" && password=="admin"){
        link_element.style.visibility = "visible";
    }
    else{
        link_element.style.visibility = "hidden";
    }


}
function addbook(){
    var book_form = document.getElementById("bookForm");
    var b_name = book_form.elements.namedItem("name_people").value;
    var b_number =book_form.elements.namedItem("num_people").value;
    var b_date = book_form.elements.namedItem("bd").value;
    
    if(localStorage.getItem("booKs")==null){
    localStorage.setItem("books","[]");
}
    var  obj_book =JSON.parse(localStorage.getItem("books"));
    let booK ={
        name:b_name,
        number:b_number,
        date:b_date
    }
    obj_book.push(booK);
    localStorage.setItem("books",JSON.stringify(obj_book));
    notifyMessage("BooK is successfully","green");
    displaybook();
}
function displaybook(){
    var b_table = document.getElementById("book_table");
    b_table.innerHTML = "";
    
    var header = document.createElement("tr");
    header.innerHTML = "<th>name</th><th>number of people</th><th>province</th><th>date</th><th>time</th>";

    b_table.appendChild(header);
    
    var obj_book = JSON.parse(localStorage.getItem("book"));
    for(let i=0; i<obj_book.length;i++){
        let b_row = document.createElement("tr");

        let b_name = document.createElement("td")
        b_name.innerHTML = obj_book[i].name_people;
        b_row.appendChild(b_name);

        let b_number = document.createElement("td");
        b_number.innerHTML = obj_book[i].num_people;
        b_row.appendChild(b_number);

        let b_date = document.createElement("td");
        b_date.innerHTML = obj_book[i].bd;
        b_row.appendChild(b_date);

}}
