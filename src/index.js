const express = require("express");
const app = express();
const cors = require('cors')

// Settings
app.set('port',process.env.PORT || 3000);

// CORS
app.use(cors());

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/cafe'));


// Starting server
app.listen(app.get('port'), () => {
    console.log('Conectado en el puerto', app.get('port'));
});
