const express = require('express')
const logger = require('morgan');
const env = require('dotenv');
const xss = require('xss-clean');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');

const cors = require('cors');
const AppError = require('./errors/AppError');
const questionsRoutes = require('./routes/questionsRoutes');
const connectDB = require('./database/mongoDB');
const globalErrorHandler = require('./errors/globalErrorHandler');
//===================================================================================================
env.config({path:'./config.env'})
const app = express();
//===================================================================================================

app.use(logger('dev'));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

//===================================================================================================
app.use('/api/v1/questions',questionsRoutes);
app.use('/questions',questionsRoutes);
app.use((req,res,next)=>{
    res.status(404).json({
        "status":"fail",
        "message":"not found",
    });
});

// app.use(globalErrorHandler);

//===================================================================================================


async function main(){
    const PORT = process.env.PORT || 8000;
    await connectDB();
    app.listen(PORT,()=>{
        console.log(`Server started listening at PORT ${PORT}`);
    });
}

main();

//===================================================================================================

module.exports = app;