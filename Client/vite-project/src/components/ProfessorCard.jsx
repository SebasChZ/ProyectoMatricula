import { Link } from "react-router-dom";
import PlaceIcon from '@mui/icons-material/Place';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

export const ProfessorCard = () => {

    return(
        <div className="bg-white shadow-xl rounded-lg py-3 ml-3 ">
            <div className="flex items-center justify-end mr-2">
              <input type="checkbox" id="myCheckbox" className="form-checkbox h-4 w-4 text-primary focus:ring-primary"/>
            </div>
              <div className="photo-wrapper px-2">
                <img
                  className="w-32 h-32 rounded-full mx-auto"
                  src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                  alt="John Doe"
                />
              </div>
              <div className="px-2">
                <h3 className="text-center text-xl text-gray-900 font-light">
                  Manitor Matinez
                </h3>
                <div className="text-center text-gray-400 text-xs font-semibold">
                  <p>Cartago</p>
                </div>

                <table className="text-xs my-3">
                  <tbody>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Dirección
                      </td>
                      <td className="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Celular
                      </td>
                      <td className="px-2 py-2">+977 9955221114</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">
                        Correo
                      </td>
                      <td className="px-2 py-2">john@exmaple.com</td>
                    </tr>
                  </tbody>
                </table>

                <div class="ml-4 flex items-end space-x-20">
                <div class="flex flex-col items-center">

                    <PlaceIcon className="text-emerald-600" sx={{  fontSize: 40 }}  />

                  <label class="block  tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Cartago</label>
                </div>

                <div class="flex flex-col items-center">
                  <BusinessCenterIcon className="text-emerald-600" sx={{  fontSize: 40 }} />
                  <label class="block tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Ing.Computación</label>

                </div>
              </div>
                <div className="text-center my-3">
                  <Link to= "/viewProfile"
                    className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    href="#"
                  >
                    Ver perfil
                  </Link>
                </div>
              </div>
            </div>
    );
};