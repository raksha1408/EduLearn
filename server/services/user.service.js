const User = require("../models/User")


exports.signupService = async (authInfo)=>{
const user = await User.create(authInfo)
return  user

}

exports.findUserByEmail = async (email)=>{

return  await  User.findOne({email})


}