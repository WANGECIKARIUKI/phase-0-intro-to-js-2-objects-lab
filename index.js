// Write your solution in this file!
const employee = {
    name: "Jullian",
    streetAddress: "Rongai",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
     let newEmployee = {...employee};
      newEmployee[key] = value;

      return newEmployee;
}


function destructivelyupdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee
}

function deleteFromEmployeeByKey(employee,key) {
const newEmployee = {...employee}
    delete newEmployee[key];

return newEmployee
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}
