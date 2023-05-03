const data = {};
data.user = {"name":"John", "age":30, "city":"New York"};

const getAllProfessor = (req, res) => {
    res.send(data.user);
}


module.exports = {getAllProfessor};