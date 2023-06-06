import { model, Schema, Document } from "mongoose";

export interface User extends Document {
  username: string;
  email: string;
  password: string
}

const validateEmail = function(email: string) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const user: Schema = new Schema({
  username: {
    type: String,
    uniqie: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [validateEmail, 'Incorrect email format']
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

export const UserModel = model<User>("User", user)

