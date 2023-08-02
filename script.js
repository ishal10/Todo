function checkFunction(callback){
    event.preventDefault()
        let email = document.getElementById("email");
        let pass = document.getElementById("pass");
        let err = document.getElementById("err");
        console.log(email);

        if(pass.value=="12345" && email.value=="admin"){
            callback()
        }else{
            err.innerText="INVALID TEXT OR EMAIL";
        }
    }
    function validate(){
window.location.href = "loginlogout.html";
    }
    
