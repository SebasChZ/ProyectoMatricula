import GroupsIcon from '@mui/icons-material/Groups';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const TeamCard = () => {

  return (
    <div className=' pt-5 h-full bg-white rounded-lg shadow-xl flex flex-col justify-between'>
      <div className='px-10'>

        <div className='flex justify-between align-center '>
          <div className='w-9/12'>
            <p className='font-light text-black text-2xl'>Equipo Guía Primer Ingreso 2023 (Dinamita)</p>
            <p className='text-gray-600 text-base'>Sede Limón</p>
            <div className='text-base leading-7 pt-4'>
              <p className='font-medium text-gray-700 text-lg'>Coordinador</p>

              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full mr-4 " src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="Foto coordinador" />
                <div className="text-sm">
                  <p className="font-light text-black leading-none text-base">Fernando García Rosales</p>
                  <p className="text-gray-400 text-sm">LI-09</p>
                </div>
              </div>
            </div>
          </div>
          <GroupsIcon sx={{ fontSize: 160 }} />
        </div>
      </div>


      <div className=''>
        <div className='w-11/12 mx-auto'>
          <div className="flex justify-start items-center pb-5">
            <div className='flex justify-star align-center'>
              <p className='font-medium text-gray-700 text-7xl'>547</p>
              <p className='font-medium text-gray-700 ml-2  text-xl'>Estudiantes <br /> Registrados</p>

            </div>
            <div className='flex justify-star align-center'>
              <p className='font-medium text-gray-700 text-7xl ml-2'>15</p>
              <p className='font-medium text-gray-700 ml-2  text-xl'>Actividades <br /> Completadas</p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="font-light w-full justify-center text-white bg-gradient-to-r from-teal-700 to-cyan-950 font-medium rounded-lg text-lg px-5 py-3 text-center 
                      hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-800 hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
        >
          <AddCircleOutlineIcon sx={{ fontSize: 30 }} />
          Agregar miembro
        </button>
      </div>
    </div>




  )
}