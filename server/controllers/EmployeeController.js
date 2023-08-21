var Employee = require('../models/Employee');


exports.create =async (req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content can't be empty!"})
        return
    }
    try {
        const { name, email, gender, city, bio } = req.body;
    
        const newEmployee = new Employee({
          name,
          email,
          gender,
          city,
          bio,
        });
    
        // Save the new employee to the database
        const savedEmployee = await newEmployee.save();
    
        res.status(201).json({ message: 'Employee created successfully', employee: savedEmployee });
      } catch (error) {
        res.status(500).json({ message: 'Error creating employee', error: error.message });
      }

}
exports.getall = (req,res)=>{
    Employee.find().then(Employee=>{
        res.send(Employee)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "Error occured"})
    })
    
}
exports.delete = (req,res)=>{
    console.log(req.params.id,req.query.id)
    const id=req.params.id;
    Employee.findByIdAndDelete(id)
    .then(data=>{
        if(!data){

            res.status(400).send({message:`can not delete ${id} maybe deleted Already`})
        }else{
            res.send({message:'Employee was deleted successfully!'})
        }
    }).catch(err=>{
        res.status(500).send({message:`could not be deleted ${id}`})
    })
    
}

exports.get = async (req, res) => {
    try {
        const employee = await Employee.findById(req.query.id);
    
        if (!employee) {
          return res.status(404).json({ message: 'Employee not found' });
        }
    
        res.status(200).json({ employee });
      } catch (error) {
        res.status(500).json({ message: 'Error retrieving employee', error: error.message });
      }
  };
exports.update =async (req,res)=>{
    const id  = req.query.id
    if(!req.body){
        return res.status(400).send({message:"Data can not be empty!"})
    }
    Employee.findByIdAndUpdate(id,req.body,{userFindAndModify : false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot update Employee with ${id}, Employee not found`})
        }else{
            res.send(data)

        }
    })
    .catch(err=>{
        res.status(500).send({message:"Error update"})
    })
    
}
