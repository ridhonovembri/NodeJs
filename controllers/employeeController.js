const employee = (req, res) => {
    res.render('./Employee/employee');
}

const getEmployee = (req, res) => {
    res.send('this is get from node.js');
}

const employeePost = (req, res) => {
    res.render('./Employee/employee-success', {data: req.body});
}

module.exports =
{
    employee,
    getEmployee,
    employeePost,
}