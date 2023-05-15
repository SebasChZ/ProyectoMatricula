
export const TeamCard = () => {

    return(
        <div className='w-full max-w-5xl px-10 py-10 mx-auto bg-white rounded-lg shadow-xl '>
        <div className='max-w-3xl mx-auto space-y-6'>

          <div className="flex items-center justify-start ">
            <p className='text-black text-xl'>Equipo Guía Primer Ingreso 2023 (Dinamita)</p>
            <div className="ml-5 after:flex justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 h-14">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
          </div>
            <p className='text-gray-600'>Sede Limón</p>
            <div className='text-base leading-7'>
                <p className='font-medium text-gray-700'>Coordinador</p>
                
              <div className="flex items-center">
                <img className="w-10 h-10 rounded-full mr-4" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="Foto coordinador"/>
                <div className="text-sm">
                  <p className="text-black leading-none">Fernando García Rosales</p>
                  <p className="text-gray-400">LI-09</p>
                </div>
              </div>
            </div>
    
            <div className="flex justify-start items-center mx-auto">
              <p className='font-medium text-gray-700 text-5xl'>547</p>
              <p className='font-medium text-gray-700 ml-2'>Estudiantes Registrados</p>

              <p className='font-medium text-gray-700 text-5xl ml-2'>15</p>
              <p className='font-medium text-gray-700 ml-2'>Actividades Completadas</p>
            </div>

            <a target='_blank' href='https://tailwindcomponents.com' className='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-500 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                Agregar miembro
            </a>
        
    </div>
</div>


  )
}