import { Schema, model, models } from 'mongoose'

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exist'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    }
})

const User = models.User || model("User", userSchema)
// this code is called every time it is requested so it searches form models.User first
export default User;