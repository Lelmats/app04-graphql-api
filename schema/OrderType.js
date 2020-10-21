import graphql from 'graphql';
import UserType from './UserType.js';
import User from '../models/User.js';
import ProductType from './ProductType.js';
import Product from '../models/Product.js';
import SaleType from './SaleType.js';
import Sale from '../models/Sale.js';



const {GraphQLID, GraphQLString, GraphQLObjectType, GraphQLFloat, GraphQLList} = graphql;

const OrderType = new GraphQLObjectType({
    name: 'Order',
    fields: ()=>({
        id: {type: GraphQLID},
        products: {
            type: ProductType,
            resolve(parent, args){
                return Product.findById(parent.productId);
            }
        },
        user: {
            type: UserType,
            resolve(parent, args){
                return User.findById(parent.userId);
            }
        },
        sales: {
            type: new GraphQLList(SaleType),
            resolve(parent, args){
                return Sale.find({orderId: parent.id});
            }
        },
        total: {
            type: GraphQLFloat,
            resolve(parent, args){
                const sales = Sale.find({orderId: parent.id});
                const products = sales.map(sale => Product.findById(sale.productId));
                const prices = products.map(product => product.price);
                return prices.reduce((totalPrices, price) => totalPrices = price);
            }
        }
    })
});

export default OrderType;
