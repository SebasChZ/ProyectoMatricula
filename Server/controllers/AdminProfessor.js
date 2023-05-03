const data = {};
data.user = {"name":"John", "age":30, "city":"New York"};

const getAllProfessor = (req, res) => {
    res.send(data.user);
}

const createNewProfessor = (req, res) => {
    const newEmployee = {

    }

    if (!newEmployee.name || !newEmployee.email || !newEmployee.password) {
        return res.status(400).json({ msg: 'Please include a name, email and password' });
    }

    data.user.push(newEmployee);
    res.json(data.user);
}

const getProfessorById = (req, res) => {
    res.json({"id": req.params.id});
}

module.exports = {getAllProfessor, createNewProfessor, getProfessorById};