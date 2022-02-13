const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/Book',{
useNewUrlParser: true
})
.then(db => console.log('La base de datos esta conectada'))
.catch(err => console.error(err));

