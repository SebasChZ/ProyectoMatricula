import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const studentRoute = "http://localhost:3500/student";

export function ViewStudentsPage() {

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [param, setParam] = useState("");
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      let url = studentRoute + "/all";
      if (filter === "branch" && param !== "") {
        url = studentRoute + "/campus/" + param;
      } else if (filter === "id" && param !== "") {
        url = studentRoute + "/id/" + param;
      }
  
      const response = await fetch(url);
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  const filteredStudents = students.filter(
    (student) =>
      student.studentId.includes(searchTerm) ||
      student.lastName1.includes(searchTerm) ||
      student.lastName2.includes(searchTerm) ||
      student.firstName.includes(searchTerm) ||
      student.academicCenter.includes(searchTerm) ||
      student.email.includes(searchTerm) ||
      student.cellPhoneNumber.includes(searchTerm)
  );

  const handleGenerateExcel = async (event) => {
    event.preventDefault(); // Prevent the form submission and page navigation
  
    console.log("Generating Excel file...");
  
    try {
      const response = await fetch(studentRoute+'/excel', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json' // Change the content type to application/json
        },
        responseType: 'blob' // Set the response type to blob
      });
  
      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = URL.createObjectURL(blob);
  
        // Create a download link and trigger the download
        const downloadLink = document.createElement("a");
        downloadLink.href = downloadUrl;
        downloadLink.download = "Students.xlsx";
        downloadLink.click();
  
        // Clean up the temporary URL object
        URL.revokeObjectURL(downloadUrl);
      } else {
        console.error("Failed to generate Excel file");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };


  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleParamChange = (e) => {
    setParam(e.target.value);
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    fetchStudents();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-full max-w-x1">
        <div className="flex flex-col">
          <div className="overflow-hidden sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
              <div>
                <div className="flex flex-wrap -mx-20 mb-4">
                  <div className="top-16 px-3 md:mb-0 basis-full ml-20 flex flex-row w-32 mt-0 ">
                    <div>
                      <label
                        className="text-blacktext-xs mb-2 block rounded-lg font-bold tracking-wide"
                        htmlFor="grid-Mostrar"
                      >
                        Mostrar
                      </label>

                      <div className="relative basis-1/4 ">
                        <select
                          className="block w-full appearance-none rounded border border-gray-200 bg-gray-800 px-4 py-3 pr-8 leading-tight text-gray-300 focus:border-gray-500 focus:bg-gray-600 focus:outline-none"
                          id="grid-state"
                          onChange={handleFilterChange} // Add onChange event handler
                          value={filter} // Set the selected value
                        >
                          <option value="all">Orden Alfabético</option>
                          <option value="id">Carne</option>
                          <option value="branch">Sede</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="h-4 w-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {filter !== "all" && (
                      <div className="relative basis-60 ml-3 mt-9">
                        <input
                          type="text"
                          className="block w-full appearance-none rounded border border-gray-800 bg-gray-800 px-4 py-3 pr-8 leading-tight text-gray-300 focus:border-gray-500 focus:bg-gray-600 focus:outline-none"
                          placeholder={
                            filter === "id" ? "Carne" : "Sede"
                          }
                          value={param}
                          onChange={handleParamChange}
                        />
                      </div>
                    )}
                    


                    <button
                      className="relative z-[2] flex items-center rounded-r bg-gray-900 px-3 py-1.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                      type="submit" // Change the button type to submit
                      id="buscar"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      onClick={handleFilterSubmit} // Call the handleFilterSubmit function on button click
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    </div>

                    {/* <div className="relative basis-60 ml-3 mt-9   ">
                      <select
                        className="block w-full appearance-none rounded border border-gray-800 bg-gray-800 px-4 py-3 pr-8 leading-tight text-gray-300 focus:border-gray-500 focus:bg-gray-600 focus:outline-none"
                        id="grid-state"
                      >
                        <option>Orden Alfabético</option>
                        <option>Carne</option>
                        <option>Sede</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="h-4 w-4 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div> */}

                    
                  </div>
                </div>

                <div class="max-h-80 overflow-auto scrollable">
                  <table class=" min-w-full border text-center text-left text-sm dark:border-neutral-500 font-light ml-4">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th
                          scope="col"
                          className="border-r px-0 py-4 dark:border-neutral-500 w-14"
                        >
                          Carne
                        </th>
                        <th
                          scope="col"
                          className="border-r px-0 py-2 dark:border-neutral-500 w-14"
                        >
                          Primer Apellido
                        </th>
                        <th
                          scope="col"
                          className="border-r px-0 py-4 dark:border-neutral-500 w-14"
                        >
                          Segundo Apellido
                        </th>
                        <th
                          scope="col"
                          className="border-r px-0 py-4 dark:border-neutral-500 w-14"
                        >
                          Nombre
                        </th>
                        <th
                          scope="col"
                          className="border-r px-0 py-4 dark:border-neutral-500 w-14"
                        >
                          Sede
                        </th>
                        <th
                          scope="col"
                          className="border-r px-0 py-4 dark:border-neutral-500 w-14 "
                        >
                          Correo
                        </th>
                        <th
                          scope="col"
                          className="border-r px-0 py-4 dark:border-neutral-500 w-14 "
                        >
                          Celular
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredStudents.map((student) => (
                        <tr
                          key={student.studentId}
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                        >
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                            {student.studentId}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            {student.lastName1}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            {student.lastName2}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            {student.firstName}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            {student.academicCenter}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            {student.email}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                            {student.cellPhoneNumber}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6 ml-12">
            <button
              className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
              onClick={handleGenerateExcel} // Call the generateExcel function on button click
            >
              <span>Generar excel</span>
            </button>

              

              <Link 
                className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 mr-12"
                to = "/editStudentPage"
              >
                Editar

                
              </Link>
            </div>

            
          </div>

          </form>
          
        </div>
      
  );
}
