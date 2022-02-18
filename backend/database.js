const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
useNewUrlParser: true 
})
.then(db => console.log('La base de datos esta conectada'))
.catch(err => console.error(err));
