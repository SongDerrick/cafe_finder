import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exist'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
    },
    image: {
        type: String,
    }
})

const User = models.User || model("User", UserSchema)
// this code is called every time it is requested so it searches form models.User first
export default User;