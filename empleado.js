const request = require('request')

const employee = function(id, callback){
	const url = 'http://dummy.restapiexample.com/api/v1/employee/' + id
	request({url: url, json: true},function(error,response){
	if(error){
      callback('Service unavailable', undefined)
    }
    else if (response.body.Response == 'False'){
      callback(response.body.Error,undefined)
    }
    else{
    const data = response.body
    const info = {
      id: data.id,
      employee: data.employee_name,
      salary: data.employee_salary,
      age: data.employee_age
    }
    callback(undefined, info)
	}




	})
}

module.exports = {
  employee: employee
}