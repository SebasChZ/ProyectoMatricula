import FileUploadIcon from '@mui/icons-material/FileUpload';
import SchoolIcon from '@mui/icons-material/School';

export const EstudiantesFileCard = () => {

    return (
        <div className='bg-white rounded-lg shadow-xl flex justify-between'>
            <div className='w-1/2 flex items-center align-middle'>
                <SchoolIcon sx={{ fontSize: 170 }} />

                <div className='flex flex-col'>
                    <p className='text-5xl'>Total</p>
                    <p className='text-6xl text-gray-700'>135</p>
                </div>
            </div>

            <div className='w-1/2 h-72'>

                <label for="photoFile">
                    <div
                        className="font-light w-full h-full justify-center text-white bg-gradient-to-r from-teal-700 to-cyan-950 font-medium rounded-lg text-lg px-5 py-3 text-center 
                      hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-800 hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
                    >
                        <FileUploadIcon className='font-white' sx={{ fontSize: 160 }} />
                        <p className='items-center align-middle'>Cargar Nuevos Estudiantes</p>
                    </div>


                </label>


                <input
                    hidden="false"
                    type="file"
                    name="button2"
                    id="photoFile"
                />

            </div>


        </div>




    )
}