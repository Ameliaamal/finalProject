const {userModel}= require('./model.js');
const bcrypt = require("bcryptjs");
const  createToken  = require("./jwt");

const storeUser= async (userData) => {
  const user = new userModel(userData)
  try{
    await user.save()
  }catch(err){
    throw 'failed to create user'
  }
}

const getUser = async (email) => {
  try {
    const user = await userModel.findOne({
      email: email,
      //password : pass1,
    });
    return user;
  } catch (error) {
    throw {
      msg: "unable to find user",
      code: 400,
    };
  }
};

const login = async (userData) => {
  const user = await getUser(userData.email);
  if (!user) {
    throw {
      msg: "Invalid login iformation",
      code: 404,
    };
  }
  const passwordMatch = await bcrypt.compareSync(
    userData.password,
    user.pass1
  );
  if (!passwordMatch) {
    throw {
      msg: "Invalid login information",
      code: 401,
    };
  }
  const token = await createToken(user.id);
  return {
    userId: user.id,
    token,
  };
};


module.exports={
  storeUser,
  getUser,
  login,
};  
