export function CreatePlan() {
    return (
        <div class="flex items-center justify-center h-screen">
            <form class="w-full max-w-lg">

                <div class="flex flex-wrap justify-center-mx-20 mb-6"> 
                    <h2 className="mx-8 mb-9 text-[40px] leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                        Crear Nuevo Plan de Trabajo
                    </h2>
                </div>


                <div class="flex flex-wrap -mx-20 mb-6">
                    <div class="w-auto">
                                <button type="button" class="text-black border border-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-black dark:text-black dark:hover:text-white dark:focus:ring-black dark:hover:bg-black">
                                    <svg aria-hidden="true" class="w-5 h-5 transform rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="sr-only">Icon description</span>
                                </button>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-20 mb-6">
                    
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-titulo">
                        Título
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 rounded-lg text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-lg" id="grid-first-name" type="text" placeholder=""/>
                   
                    </div>
                    <div class="w-full md:w-1/4 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs text-right font-bold mb-2" for="grid-fechaInicio">
                        Fecha de Inicio
                    </label>
                   <div class="flex items-center">
                            <input type="date" id="start" name="trip-start"
                            class="bg-gray-200 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"/>
                        </div>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-20 mb-6">
                    
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-descripcion">
                            Descripción
                        </label>
                        <textarea id="descripcion" rows="4" class="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Añadir Descripción"></textarea>
                    </div>

                    <div class="w-full md:w-1/4 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs text-right font-bold mb-2" for="grid-fechaFinal">
                            Fecha de Final
                        </label>

                        <div class="flex items-center">
                            <input type="date" id="start" name="trip-start"
                            class="bg-gray-200 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"/>
                        </div>

                    </div>
                </div>

                <div class="flex flex-wrap -mx-20 mb-6">
                    <div class="w-full md:w-1/4 px-3">
                    <button class="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-left">
                        Agregar
                    </button>

                    </div>
                </div>

        
            </form>
        </div>
    );
  }