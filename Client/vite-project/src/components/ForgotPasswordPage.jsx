import backgroundImage from "../img/backgroundLogin.jpg"; // importar el fondo del login

export function ForgotPasswordPage(){
    const styles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundOpacity: '0.5',}
    return(
        <section style={styles}>
            <div className='w-screen h-screen grid grid-rows-2 text-white text-4xl md:grid-cols-2'>
                <div className=' w-full h-full bg-[backgroundImage] opacity-80 bg-center bg-cover w-full h-full centered md:h-screen opacity-80'>
                </div>

                {/* page 2 */}
                <div className='w-full h-full bg-gray-800 centered md:h-screen'>
                    <div className="flex items-center justify-center h-screen">
                        <div className="w-full p-8 bg-white rounded-lg md:max-w-md sm:max-w-3xl dark:bg-gray-800 dark:border-gray-800 ">
                        <h2 className="mb-1 text-[40px] font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Recordar Contraseña
                        </h2>
                            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""style={{ width: "100%" }}/>
                                </div>
                                <div>
                                    <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Código enviado al Email</label>
                                    <input type="code" name="code" id="code" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                </div>
                                <div>
                                    <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nueva Contraseña</label>
                                    <input type="newPassword" name="newPassword" id="newPassword" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                </div>
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar contraseña</label>
                                    <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                </div>
                                
                                <button type="submit" className="w-full text-white bg-primary-1000 hover:bg-primary-1000 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-00747F dark:hover:bg-00747F dark:focus:ring-primary-800">Continuar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}