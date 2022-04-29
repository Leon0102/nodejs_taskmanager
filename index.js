const express = require('express');
const morgan = require('morgan');
const task = require('./routes/task');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config()


const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));


// Middleware 
app.use(express.static('./public'));
app.use(express.json());


// Routes
app.use('/api/v1/tasks',task);
app.use(notFound);
app.use(errorHandlerMiddleware);

// app.get('/hello', (req, res) => {
//   res.send('Hello World!')
// })

const start = async (req, res) => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server started on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })