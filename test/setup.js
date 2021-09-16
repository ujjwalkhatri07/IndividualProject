const mongoose= require('mongoose');
const connectDB = 'mongodb://127.0.0.1:27017/IndividualfinalAssignment'

beforeAll(async() => {
    mongoose.connect(connectDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then((db) => {
        console.log('Connected ...');
    }).catch((err) => {
        console.error(err);
        process.exit(1);
    })
})
//Tear down
afterAll(async() => {
    console.log('Disconnecting ...');
    // await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
})