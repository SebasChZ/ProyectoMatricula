import { useState, useRef, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import axios from "../api/axios";
import logoImage from "../img/logoTec.png"; // importar el logo del tec
import { Link, useNavigate, useLocation } from "react-router-dom";

const LOGIN_URL = "/login/auth";

export function LoginPage() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    userRef?.current?.focus();
  }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [email, password]);

  const loginUser = async () => {
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      // const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      console.log(roles);
      setAuth({ email, password, roles });
      setEmail("");
      setPassword("");
      navigate("/home-switch");
    } catch (err) {
      if (!err?.response) {
        console.log(err);
        setErrorMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrorMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrorMsg("Unauthorized");
      } else {
        setErrorMsg("Login Failed");
      }
      errRef.current.focus();
    }
    // let roles = [3123, 4478];
    // setAuth({ email, password, roles });
    // navigate("/home-switch");
  };

  const styles = {
    backgroundImage: "url(/src/img/backgroundLogin.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundOpacity: "0.5",
  };
  console.log(logoImage);
  return (
    <section style={styles}>
      <p
        ref={errorRef}
        className={errorMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errorMsg}
      </p>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white opacity-80 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-800 dark:border-gray-700">
          <div className="p-8 space-y-6 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              <img src={logoImage} alt="logo" className="w-90 h-20 mr-2" />
            </h1>

            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label className="block mb-6 text-[30px] font-medium  text-center text-gray-900 dark:text-black">
                  Iniciar sesión
                </label>
                <label className="block mb-2 text-sm font-medium text-center text-gray-900 dark:text-black">
                  Escriba sus credenciales para iniciar!
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  name="email"
                  id="email"
                  ref={userRef}
                  style={{
                    backgroundColor: "#F0F0F0",
                    borderColor: "black",
                    color: "black",
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder-black"
                  placeholder="email"
                  required
                  value={email}
                />
              </div>
              <div>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  name="password"
                  id="password"
                  style={{
                    backgroundColor: "#F0F0F0",
                    borderColor: "black",
                  }}
                  placeholder="contraseña"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={password}
                />
              </div>

              <button
                onClick={loginUser}
                type="submit"
                className="w-full text-white bg-primary-1000 hover:bg-primary-1000 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-00747F dark:hover:bg-primary-1000 dark:focus:ring-primary-800"
              >
                Iniciar Sesión
              </button>

              <p className="text-sm font-light text-002857 ">
                <Link
                  to="/forgot-password"
                  className="font-medium text-primary-1100 "
                >
                  ¿Olvidó su contraseña?
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
