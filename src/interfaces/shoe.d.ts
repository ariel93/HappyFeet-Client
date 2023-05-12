import { Document } from 'mongoose';

export interface IShoe extends Document {
    name: string;
    brand: string;
    price: number;
}