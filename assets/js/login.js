/* SHOW HIDDEN - PASSWORD */
const showHiddenPassword = () => {
     const input = document.getElementById("login-pass");
     const iconEye = document.getElementById("login-eye");
     const iconEyeConfirm = document.querySelector(".login__eye");

     iconEye.addEventListener("click", () => {
        //chance password to text
        if (input.type === "password") {
            input.type = "text";


            iconEye.classList.add("ri-eye-line");
            iconEye.classList.remove("ri-eye-off-line");

           
            
        } else {

            input.type = "password";

            iconEye.classList.add("ri-eye-off-line");

           
            
           

            
        }
     });

};

showHiddenPassword();