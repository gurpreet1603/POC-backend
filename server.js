const express =require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');

const connectDB =require('./server/database/connection');
const bodyParser = require('body-parser');
const swaggerSpec = require('./swagger');

const app = express();
app.use(cors())
app.use(express.json());


dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080
connectDB()

app.use(bodyParser.urlencoded({extended:true}))

app.use('/',require('./server/routes/routes'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(PORT, ()=>{console.log(`Server is running on http://localhost:${PORT}`)})

