import mongoose from 'mongoose';

const {Schema} = mongoose;

const UserGroupSchema = new Schema({
    firstname: String,
    secondname: String,
    adress: String,
    phone: String,
    birthdate: String,
    email: String
});

export default mongoose.model('user', UserGroupSchema);