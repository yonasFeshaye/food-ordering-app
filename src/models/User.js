import {model, Schema, models } from "mongoose";

const UserSchema = new Schema({
    name: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String},
    image: {type: String},
    phone: {type: String},
    streetAddress: {type: String},
    zip: {type: String},
    city: {type: String},
    state: {type: String},
    country: {type: String},
    role: {type: String, default: 'user'},
    

}, {timestamps: true})

export const User = models?.User || model('User', UserSchema)