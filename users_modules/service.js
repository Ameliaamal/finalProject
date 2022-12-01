const userModel= require('./model.js')


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
      });
      return user;
    } catch (error) {
      throw {
        msg: "unable to find user",
        code: 400,
      };
    }
  };
  
  const getUserById = async (userId) => {
    try {
      const user = await userModel.findOne({
        _id: userId,
      });
      return user;
    } catch (error) {
      throw {
        msg: "unable to find user",
        code: 400,
      };
    }
  };

module.exports={storeUser}  