import { useState, useEffect } from "react"
import Axios from "axios"
import logoImage from "../img/logoTec.png"; // importar el logo del tec

export function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = () => {
        
        if (!email || !password) {
            alert("Please fill all the fields")
            return;
          }
        Axios.post("http://localhost:3500/login", {
            email,
            password
        }).then((response) => {
            console.log(response.data);
            if (response.data) {
                //localStorage.setItem("loggedIn", true);
                //localStorage.setItem("user", JSON.stringify(response.data.user));
                //window.location.href = "/home";
                alert("User logged in");
            }else{
                alert("User has failed");
            }
            
    })};

export function LoginPage(){
    const styles = {
        backgroundImage: "url(/src/img/backgroundLogin.jpg)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundOpacity: '0.5'};
    console.log(logoImage)
    return (
        <section style={styles}>
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white opacity-80 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-800 dark:border-gray-700">
          <div className="p-8 space-y-6 md:space-y-6 sm:p-8">
          
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                <img src={logoImage} alt="logo" className="w-90 h-20 mr-2" />
          </h1>
          
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-6 text-[30px] font-medium  text-center text-gray-900 dark:text-black" >Iniciar sesión</label>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-center text-gray-900 dark:text-black" >Escriba sus credenciales para iniciar!</label>
                      <input type="email" name="email" id="email"  style={{backgroundColor: '#F0F0F0',borderColor: 'black', color: "black"}} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-black" placeholder="usuario" required=""/>

                  </div>
                  <div>
                      
                      <input type="password" name="password" id="password" style={{backgroundColor: '#F0F0F0',borderColor: 'black'}} placeholder="contraseña" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  
                  <button type="submit" className="w-full text-white bg-primary-1000 hover:bg-primary-1000 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-00747F dark:hover:bg-primary-1000 dark:focus:ring-primary-800"> Iniciar Sesión</button>

                  <p className="text-sm font-light text-002857 ">
                     <a href="#" className="font-medium text-primary-1100 "> ¿Olvidó su contraseña?</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    )
}