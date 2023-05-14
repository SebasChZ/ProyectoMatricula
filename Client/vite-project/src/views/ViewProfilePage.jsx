export function ViewProfilePage(){

    return (
        <div className="flex items-center justify-center h-screen">
            <form className="w-full max-w-x1">
            
            <div class="flex flex-col items-center h-screen w-full justify-center">

                <h3 class="text-center text-3xl text-gray-900 font-medium leading-8 mb-16">Perfil</h3>

                <div class="bg-white shadow-xl rounded-lg py-3 flex">
                    <div class="photo-wrapper p-2">
                        <img class="w-48 h-48 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"/>
                    </div>
                    <div class="p-2">
                        <h3 class="text-center text-2xl text-gray-900 font-medium leading-8">Ingeniería en Computación</h3>
                        <table class="text-lg my-3">
                            <tbody>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Nombre</td>
                                    <td class="px-2 py-2">Ericka Solano Fernández</td>
                                </tr>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Cédula</td>
                                    <td class="px-2 py-2">1-1111-1111</td>
                                </tr>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Correo</td>
                                    <td class="px-2 py-2">ericksolfer@gmail.com</td>
                                </tr>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Fecha de nacimiento</td>
                                    <td class="px-2 py-2">04/07/1980</td>
                                </tr>
                                <tr>
                                    <td class="px-2 py-2 text-gray-500 font-semibold">Celular</td>
                                    <td class="px-2 py-2">8413-0388</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </form>
        </div>
    );
}