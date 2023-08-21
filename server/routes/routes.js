const express =require('express');
const route = express.Router();
const userController = require('../controllers/UserController')
const EmployeeController = require('../controllers/EmployeeController')


/**
 * @swagger
 * /api/employee/register/:
 *   post:
 *     summary: User Registration
 * parameters: 
 *     responses:
 *       200:
 *     description: "User Registerd successfully"  

 */
/**
 * @swagger
 * /api/employee/login/:
 *   post:
 *     summary: Login
 * parameters: 
 *     responses:
 *       200:
 *     description: "Employee Logged In successfully"  

 */


/**
 * @swagger
 * /api/employee/getall:
 *   get:
 *     summary: Get Records of Employees
 *     responses:
 *       200:
 *         description: []
 */

route.get('/',(req,res)=>{
    res.send("Hello Worlds");
})


/**
 * @swagger
 * /api/employee/getall:
 *   get:
 *     summary: Get Records of Employees
 *     responses:
 *       200:
 *         description: []
 */

/**
 * @swagger
 * /api/employee/get:
 *   get:
 *     summary: Get Record of Single Employees
 *     responses:
 *       200:
 *         description: []
 */

/**
 * @swagger
 * /api/employee/add:
 *   post:
 *     summary: Create a new Employee
 * parameters:
 *     responses:
 *       200:
 *     description: "Employee Added Successfully"  

 */
/**
 * @swagger
 * /api/employee/delete/{id}:
 *   delete:
 *     summary: Delete Employee
 * parameters: 
 *     responses:
 *       200:
 *     description: "Employee deleted successfully"  

 */
/**
 * @swagger
 * /api/employee/update/:
 *   put:
 *     summary: Update Employee
 * parameters: 
 *     responses:
 *       200:
 *     description: "Employee Updated successfully"  

 */






route.get('/api/employee/getall',EmployeeController.getall)
route.get('/api/employee/get',EmployeeController.get)
route.post('/api/employee/add',EmployeeController.create)
route.delete('/api/employee/delete/:id',EmployeeController.delete)
route.put('/api/employee/update',EmployeeController.update)
route.post('/api/register',userController.reg)
route.post('/api/login',userController.login)


module.exports =route