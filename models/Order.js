import mongoose from 'mongoose';

const {Schema} = mongoose;

const OrderGroupSchema = new Schema({
    name: String
});

export default mongoose.model('Orders', OrderGroupSchema);