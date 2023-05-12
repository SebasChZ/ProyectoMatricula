
export function ViewStudentsPage(){
    
    return (
        <div className="flex items-center justify-center h-screen">
           
           <form className="w-full max-w-x1">
                <div className="flex flex-col">
                    <div className="overflow-hidden sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
                            <div className="overflow-auto">
                            <div className="flex flex-wrap -mx-20 mb-4">
                                <div className= "fixed top-16 w-full px-3 md:mb-0 basis-full ml-20 flex flex-row w-32 mt-0 ">
                                    <div>
                                    <label className="text-blacktext-xs mb-2 block rounded-lg font-bold tracking-wide" htmlFor="grid-Mostrar"> Mostrar </label>

                                    <div className="relative basis-1/4 ">
                                        <select className="block w-full appearance-none rounded border border-gray-200 bg-gray-800 px-4 py-3 pr-8 leading-tight text-gray-300 focus:border-gray-500 focus:bg-gray-600 focus:outline-none" id="grid-state">
                                        <option>5</option>
                                        <option>10</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                    </div>
                                        
                                    <div className="relative flex w-full basis-1/6 mr-30 max-h-8 ml-2 mt-11">
                                        <input
                                            type="search"
                                            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-lg border border-solid border-neutral-300 bg-gray-200 bg-clip-padding px-1 py-[0.15rem] text-sm font-normal leading-[1.4] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-black dark:focus:border-primary"
                                            placeholder="Buscar"
                                            aria-label="Search"
                                            aria-describedby="buscar" />

                                        <button className="relative z-[2] flex items-center rounded-r bg-gray-900 px-3 py-1.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                                            type="button"
                                            id="buscar"
                                            data-te-ripple-init
                                            data-te-ripple-color="light">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                                                <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="relative basis-60 ml-3 mt-9   ">
                                        <select className="block w-full appearance-none rounded border border-gray-800 bg-gray-800 px-4 py-3 pr-8 leading-tight text-gray-300 focus:border-gray-500 focus:bg-gray-600 focus:outline-none" id="grid-state">
                                            <option>Orden Alfabético</option>
                                            <option>Carne</option>
                                            <option>Sede</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
 
                            </div>


                                <div class="max-h-80">
                                    <table class=" min-w-full border text-center text-left text-sm dark:border-neutral-500 font-light ml-4">

                                        <thead className="border-b font-medium dark:border-neutral-500">
                                            <tr>
                                            <th scope="col" className="border-r px-0 py-4 dark:border-neutral-500 w-14">Carne</th>
                                            <th scope="col" className="border-r px-0 py-2 dark:border-neutral-500 w-14">Primer Apellido</th>
                                            <th scope="col" className="border-r px-0 py-4 dark:border-neutral-500 w-14">Segundo Apellido</th>
                                            <th scope="col" className="border-r px-0 py-4 dark:border-neutral-500 w-14">Nombre</th>
                                            <th scope="col" className="border-r px-0 py-0 dark:border-neutral-500 w-14">Carrera</th>
                                            <th scope="col" className="border-r px-0 py-4 dark:border-neutral-500 w-14">Sede</th>
                                            <th scope="col" className="border-r px-0 py-4 dark:border-neutral-500 w-14 ">Correo</th>
                                            <th scope="col" className="border-r px-0 py-4 dark:border-neutral-500 w-14 ">Celular</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            <tr
                                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">2021077803</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Murillo</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Mena</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Maria Fernanda</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 ">Ingenieria en Computacion</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Cartago</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">fermurillo04@estudiantec.cr</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">85986048</td>
                                            </tr>

                                            <tr
                                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">2021052792</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Martinez</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Hernandez</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Maynor Erks</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Ingenieria en Computacion</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Cartago</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">chacalerks@estudiantec.cr</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">60127974</td>
                                            </tr>

                                            <tr
                                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">2021052709 </td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Jimenez</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Salazar</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Cesar Johel</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Ingenieria en Computacion</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Cartago</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">thecsarbeat@estudiantec.cr</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">84296827</td>
                                            </tr>

                                            <tr
                                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">2021075264</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Chaves</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Zumbado</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Sebastian</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Ingenieria en Computacion</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Cartago</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">sebas04@estudiantec.cr</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">61456812</td>
                                            </tr>

                                            <tr
                                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">2021077803</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Murillo</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Mena</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Maria Fernanda</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 ">Ingenieria en Computacion</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Cartago</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">fermurillo04@estudiantec.cr</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">85986048</td>
                                            </tr>

                                            <tr
                                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">2021052792</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Martinez</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Hernandez</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Maynor Erks</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Ingenieria en Computacion</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Cartago</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">chacalerks@estudiantec.cr</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">60127974</td>
                                            </tr>

                                            <tr
                                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">2021052709 </td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Jimenez</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Salazar</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Cesar Johel</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Ingenieria en Computacion</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Cartago</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">thecsarbeat@estudiantec.cr</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">84296827</td>
                                            </tr>

                                            <tr
                                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">2021075264</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Chaves</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Zumbado</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Sebastian</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Ingenieria en Computacion</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Cartago</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">sebas04@estudiantec.cr</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">61456812</td>
                                            </tr>

                                            <tr
                                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">2021077803</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Murillo</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Mena</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Maria Fernanda</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 ">Ingenieria en Computacion</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Cartago</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">fermurillo04@estudiantec.cr</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">85986048</td>
                                            </tr>

                                            <tr
                                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">2021052792</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Martinez</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Hernandez</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Maynor Erks</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Ingenieria en Computacion</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Cartago</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">chacalerks@estudiantec.cr</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">60127974</td>
                                            </tr>

                                            <tr
                                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">2021052709 </td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Jimenez</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Salazar</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Cesar Johel</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Ingenieria en Computacion</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Cartago</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">thecsarbeat@estudiantec.cr</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">84296827</td>
                                            </tr>

                                            <tr
                                            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                            <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">2021075264</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Chaves</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Zumbado</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Sebastian</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Ingenieria en Computacion</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">Cartago</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">sebas04@estudiantec.cr</td>
                                            <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">61456812</td>
                                            </tr>

                                            

                                        </tbody>
                                </table>
                            </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-6 ml-12">
                            <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>

                                <span>
                                    previous
                                </span>
                            </a>

                            <div className="items-center hidden md:flex gap-x-3">
                                <a href="#" className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
                                <a href="#" className="px-2 py-1 text-sm text-black rounded-md dark:hover:bg-gray-800 dark:text-black0 bg-gray-400">2</a>
                                <a href="#" className="px-2 py-1 text-sm text-black rounded-md dark:hover:bg-gray-800 dark:text-black bg-gray-400">3</a>
                                <a href="#" className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">...</a>
                            </div>

                            <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 mr-12">
                                <span>
                                    Next
                                </span>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}