function login(){
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;

    if(username != ""){
        if(password != ""){
            alert("Registered Successfully");
            console.log(username + ":" + password);
        }else{
            alert("Enter the data correctly");
            console.log("ERROR");
        }
    }else{
        alert("Enter the data correctly");
        console.log("ERROR");
    }
}

