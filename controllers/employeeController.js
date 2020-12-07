const employee = (req, res) => {
    res.render('./Employee/employee');
}

const getEmployee = (req, res) => {
    res.send('this is get from node.js');
}

const employeePost = (req, res) => {
    res.render('./Employee/employee-success', {data: req.body});
}

const getEmployeeById = (req, res) => {
    console.log(req.params);
    //res.send(req.params.id);
    //res.send(req.params.name);
    //res.send(req.params + '' + req.query)
    //res.send(req.query)
    
    res.status(200).json({'status':true});
}

const postEmployee = (req, res) => {

    console.log(req.body.id);
    console.log(req.body.name);   

    res.status(200).json({'success' : true, 'result': req.body})
}

const updateEmployee = (req, res) => {

}

module.exports =
{
    employee,
    getEmployee,
    getEmployeeById,
    employeePost,
    postEmployee,
    updateEmployee
}