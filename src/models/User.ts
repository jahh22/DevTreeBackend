import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
    handle: string
    name: string
    email: string
    password: string
    description: string
    image: string
    links: string
}
const userEschema = new Schema({
    handle: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    links: {
        type: String,
        default: '[]'
    }
})
const User = mongoose.model<IUser>('User', userEschema)
export default User