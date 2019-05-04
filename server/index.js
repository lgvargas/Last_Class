const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/gatos');
mongoose.connect(keys.MONGO_URL);

const app = express();
app.use(bodyParser.json());

//require('./routes/gatosRoutes')(app); 
const gatosRoutes = require('./routes/gatosRoutes');
gatosRoutes(app);

app.listen(process.env.PORT || 5000);