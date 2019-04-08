
const express = require('express')
const empleado = require('./empleado.js')

const app = express()
const port = process.env.PORT || 3000

app.get('/', function(req, res){
	res.send('Hola!')

})

app.get('/employee', function(req,res){
	res.setHeader('Acces-Control-Allow-Origin','*')
	if(!req.query.search){
		return res.send({
			error: 'Tienes que dar una un id valido'
		})
	}
	if(req.query.search){
		empleado.employee(req.query.search, function(error,response){
			if(error){
				return res.send({
					error: error
				})
			}
			else{
			const info = response
			res.send({
				    id: info.id,
      				employee: info.employee,
      	            salary: info.salary,
                    age: info.age
				})
		}
		})
	}
})


app.get('*', function(req,res){
	res.send({
		error: 'Esta ruta no existe'
	})
})


app.listen(port, function(){
	console.log('up and running')


})