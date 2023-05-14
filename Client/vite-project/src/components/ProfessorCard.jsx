import { Link } from "react-router-dom";

export const ProfessorCard = () => {

    return(
        <div class="bg-white shadow-xl rounded-lg py-3 ml-3 ">
            <div class="flex items-center justify-end mr-2">
              <input type="checkbox" id="myCheckbox" class="form-checkbox h-4 w-4 text-primary focus:ring-primary"/>
            </div>
              <div class="photo-wrapper px-2">
                <img
                  class="w-32 h-32 rounded-full mx-auto"
                  src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                  alt="John Doe"
                />
              </div>
              <div class="px-2">
                <h3 class="text-center text-xl text-gray-900 font-light">
                  Manitor Matinez
                </h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                  <p>Cartago</p>
                </div>

                <table class="text-xs my-3">
                  <tbody>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Dirección
                      </td>
                      <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Celular
                      </td>
                      <td class="px-2 py-2">+977 9955221114</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Correo
                      </td>
                      <td class="px-2 py-2">john@exmaple.com</td>
                    </tr>
                  </tbody>
                </table>
                <div class="ml-4 flex items-end space-x-20">
                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <label class="block  tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Cartago</label>
                </div>

                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <label class="block tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Ing.Computación</label>
                </div>
              </div>
                <div class="text-center my-3">
                  <Link to= "/viewProfile"
                    class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    href="#"
                  >
                    Ver perfil
                  </Link>
                </div>
              </div>
            </div>
    );
};