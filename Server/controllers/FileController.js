const XLSX = require('xlsx');
const path = require('path');

async function readFile (filename) {

    try {
        
        console.log(path.join(__dirname, "..", "uploads", "documents",   filename));
        const file = XLSX.readFile(path.join(__dirname, "..", "uploads", "documents",   filename));

        let data = []
        
        const sheets = file.SheetNames
        console.log("Sheets: ", sheets);


        for(let i = 0; i < sheets.length; i++)
        {
        const temp = XLSX.utils.sheet_to_json(
                file.Sheets[file.SheetNames[i]])
            temp.forEach((res) => {
                data.push(res)
            })
        }
        return data;
        
    }catch  (error)
    {
        console.log("Error fileController: ", error);
    }
}

module.exports =  {readFile};