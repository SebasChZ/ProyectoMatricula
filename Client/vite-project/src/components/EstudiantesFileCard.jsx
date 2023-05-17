import FileUploadIcon from '@mui/icons-material/FileUpload';
import SchoolIcon from '@mui/icons-material/School';
import axios from 'axios';
import * as XLSX from 'xlsx';

const studentRoute = "http://localhost:3500/student/file";

export const EstudiantesFileCard = () => {
  const convertExcelToJson = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        resolve(jsonData);
      };
      reader.onerror = (e) => {
        reject(e);
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const uploadFile = async (file) => {
    console.log('Uploading file:', file);

    try {
      const jsonData = await convertExcelToJson(file);
      const formData = new FormData();
      formData.append('file', JSON.stringify(jsonData));

      await axios.post(studentRoute, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
    }

    alert("Successfully registered" + file.name);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadFile(file);
    }
  };

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
        <label htmlFor='photoFile'>
          <div
            className="font-light w-full h-full justify-center text-white bg-gradient-to-r from-teal-700 to-cyan-950 font-medium rounded-lg text-lg px-5 py-3 text-center hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-800 hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
          >
            <FileUploadIcon className='font-white' sx={{ fontSize: 160 }} />
            <p className='items-center align-middle'>Cargar Nuevos Estudiantes</p>
          </div>
        </label>
        <input
          hidden={true}
          type='file'
          name='file'
          id='photoFile'
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};
