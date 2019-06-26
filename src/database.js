const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodeapp', {
   useCreateIndex: true,
   useNewUrlParser: true,
   useFindAndModify: false
}).then(db => console.log('DB is conected'))
.catch(err => console.err(err));