export function CreatePlan() {
    return (
        <div className="flex items-center justify-center h-screen">
            <form className="w-full max-w-lg">

                <div className="flex flex-wrap justify-center-mx-20 mb-6"> 
                    <h2 classNameName="mx-8 mb-9 text-[40px] leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                        Crear Nuevo Plan de Trabajo
                    </h2>
                </div>


                <div className="flex flex-wrap -mx-20 mb-6">
                    <div className="w-auto">
                                <button type="button" className="text-black border border-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-black dark:text-black dark:hover:text-white dark:focus:ring-black dark:hover:bg-black">
                                    <svg aria-hidden="true" className="w-5 h-5 transform rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span className="sr-only">Icon description</span>
                                </button>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-20 mb-6">
                    
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-titulo">
                        Título
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 rounded-lg text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-lg" id="grid-first-name" type="text" placeholder=""/>
                   
                    </div>
                    <div className="w-full md:w-1/4 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs text-right font-bold mb-2" for="grid-fechaInicio">
                        Fecha de Inicio
                    </label>
                   <div className="flex items-center">
                            <input type="date" id="start" name="trip-start"
                            className="bg-gray-200 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-20 mb-6">
                    
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-descripcion">
                            Descripción
                        </label>
                        <textarea id="descripcion" rows="4" className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Añadir Descripción"></textarea>
                    </div>

                    <div className="w-full md:w-1/4 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs text-right font-bold mb-2" for="grid-fechaFinal">
                            Fecha de Final
                        </label>

                        <div className="flex items-center">
                            <input type="date" id="start" name="trip-start"
                            className="bg-gray-200 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"/>
                        </div>

                    </div>
                </div>

                <div className="flex flex-wrap -mx-20 mb-6">
                    <div className="w-full md:w-1/4 px-3">
                    <button className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-left">
                        Agregar
                    </button>

                    </div>
                </div>

        
            </form>
        </div>
    );
  }