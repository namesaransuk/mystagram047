const indexRouter = require('./routes/index');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT|| 8080;

// 1. Configuration here



const fetch = require('node-fetch');
global.fetch = fetch;

const app = express();

//Middleware เพื่ออ่าน req.body
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//router
app.use('/', indexRouter);

//Middleware
app.use(cors());
app.use(morgan('common'));
app.use(express.static(path.join(__dirname,'public')));

app.listen(
  PORT,
  () => {
    console.log(`Listening to port ${PORT}`);
  }
);
