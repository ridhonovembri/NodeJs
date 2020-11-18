const employee = (req, res) => {
    res.render('./Employee/employee');
}

const employeePost = (req, res) => {
    res.render('./Employee/employee-success', {data: req.body});
}

module.exports =
{
    employee,
    employeePost
}