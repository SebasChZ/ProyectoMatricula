import { Link } from "react-router-dom";
import PlaceIcon from '@mui/icons-material/Place';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

export const ProfessorCard = ({ professor }) => {

  const {location, department} = professor;

  return (
    <div className="bg-white shadow-xl rounded-lg py-3 ml-3 ">
      <div className="flex items-center justify-end mr-2">
        <input type="checkbox" id="myCheckbox" className="form-checkbox h-4 w-4 text-primary focus:ring-primary" />
      </div>
      <div className="photo-wrapper px-2">
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
          alt="john Doe"
        />
      </div>
      <div className="px-2">
        <h3 className="text-center text-xl text-gray-900 font-light">
          {professor.firstName + ' ' + professor.lastName}
        </h3>
        <div className="text-center text-gray-400 text-xs font-semibold">
          <p>{professor.code}</p>
        </div>
        <div className="text-center text-gray-400 text-xs font-semibold">
          <p>{professor.city}</p>
        </div>

        <table className="text-xs my-3">
          <tbody>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">Oficina</td>
              <td className="px-2 py-2">{professor.officePhoneNumber}</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">Celular</td>
              <td className="px-2 py-2">{professor.phoneNumber}</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">Correo</td>
              <td className="px-2 py-2">{professor.email}</td>
            </tr>
          </tbody>
        </table>

        <div class="ml-4 flex items-end space-x-20">
          <div class="flex flex-col items-center">
            <PlaceIcon className="text-emerald-600" sx={{ fontSize: 40 }} />
            <label class="block  tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">{location}</label>
          </div>

          <div class="flex flex-col items-center">
            <BusinessCenterIcon className="text-emerald-600" sx={{ fontSize: 40 }} />
            <label class="block tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">{department}</label>
          </div>
        </div>
        {/* <div className="text-center my-3">
          <Link 
            to={{
              pathname: "/viewProfile",
              state: { professor: professor }
            }}
            className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
          >
            Ver perfil
          </Link>
        </div> */}
      </div>
    </div>
  );
};