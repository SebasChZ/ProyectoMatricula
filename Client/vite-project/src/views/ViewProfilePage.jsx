import { Link, useLocation } from "react-router-dom";

export function ViewProfilePage() {

    const locationx = useLocation();
    const professor = locationx.state?.professor;

    if (!professor) {
        return <div>No professor information available</div>;
    }

    // Access the professor properties like firstName, lastName, city, etc.
    const { firstName, lastName, city, phone, email, location, department } = professor;


  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-full max-w-x1">
        <div class="flex flex-col items-center h-screen w-full justify-center">
          <h3 class="text-center text-3xl text-gray-900 font-medium leading-8 mb-16">Perfil</h3>

          <div class="bg-white shadow-xl rounded-lg py-3 flex">
            <div class="photo-wrapper p-2">
              <img class="w-48 h-48 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe" />
            </div>
            <div class="p-2">
              <h3 class="text-center text-2xl text-gray-900 font-medium leading-8">Ingeniería en Computación</h3>
              <table class="text-lg my-3">
                <tbody>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Nombre</td>
                    <td class="px-2 py-2">{firstName} {lastName}</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Cédula</td>
                    <td class="px-2 py-2">1-1111-1111</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Correo</td>
                    <td class="px-2 py-2">{email}</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Fecha de nacimiento</td>
                    <td class="px-2 py-2">04/07/1980</td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Celular</td>
                    <td class="px-2 py-2">{phone}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="max-w-full basis-3 h-full mt-6">
            <div className="flex justify-end">
              <Link
                to="/editProfile"
                type="submit"
                className="text-white bg-primary-1000 hover:bg-primary-1000 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-00747F dark:hover:bg-primary-1000 dark:focus:ring-primary-800"
              >
                Editar
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
    );
}
