/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-10-06 20:28:52
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-10-07 18:46:27
 */
/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-10-06 20:28:52
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-10-07 18:37:17
 */
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//In the userSchema add a method called matchPassword, so we can use userModel in controller to call this method
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//encrypt the password before save into user model
userSchema.pre("save", async function (next) {
  //only monitor if password has changed
  if (!this.isModified("password")) {
    next();
  }

  //use bcrypt to hash password
  const salt = bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);
export default User;
