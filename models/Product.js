import mongoose from 'mongoose';

const {Schema} = mongoose;

const ProductSchema = new Schema({
    name: String,
    price: Number,
    productGroupId: String,
    orderId: String
});

export default mongoose.model('Product', ProductSchema);