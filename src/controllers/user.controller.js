const { UserModel } = require("../models/user.model");
const bcrypt = require("bcryptjs");

async function createUser(req, res) {
  const {
    username,
    email,
    password,
    firstName,
    lastName,
    street,
    flat_number,
    district,
    region,
  } = req.body;
  const isExist = await UserModel.findOne({ email: email });
  if (isExist) {
    res.send({ message: "Email is already is exist" });
  } else {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
      first_name: firstName,
      last_name: lastName,
      addresses: [
        {
          street,
          flat_number,
          district,
          region,
        },
      ],
    });
    try {
      await newUser.save();
      res.send({ message: "User has been created" });
    } catch (e) {
      throw e;
    }
  }
}

async function getUsers(req, res) {
  try {
    const users = await UserModel.find({});
    if (users.length > 0) {
      res.send(users);
    } else {
      res.send({ message: "Users not found" });
    }
  } catch (e) {
    throw e;
  }
}

async function getUser(req, res) {
  const { id } = req.params;
  try {
    const user = await UserModel.find({ _id: id });
    if (user.length > 0) {
      res.send(user);
    } else {
      res.send({ message: "user not found" });
    }
  } catch (e) {
    throw e;
  }
}

async function updateUser(req, res) {
  const { id } = req.params;
  const {
    username,
    email,
    password,
    firstName,
    lastName,
    street,
    flat_number,
    district,
    region,
  } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const isExist = await UserModel.findOne({ _id: id });
    if (!isExist) {
      res.send({ message: "user not foud" });
    } else {
      console.log(isExist.username);
      const newUser = {
        username: username || isExist.username,
        email: email || isExist.email,
        password: hashedPassword,
        first_name: firstName || isExist.firstName,
        last_name: lastName || isExist.lastName,
        // addresses: [{
        //     street: street || isExist.addresses[0].street,
        //     flat_number: flat_number || isExist.addresses[0].flat_number,
        //     district: district || isExist.addresses[0].district,
        //     region: region || isExist.addresses[0].region
        // }]
      };
      await UserModel.findByIdAndUpdate(id, newUser);
      res.send({ message: "user added" });
    }
  } catch (e) {
    throw e;
  }
}

async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    const isExist = await UserModel.find({ _id: id });
    if (isExist) {
      await UserModel.findByIdAndDelete(id);
      res.send({ message: "user deleted" });
    } else {
      res.send({ message: "user not found" });
    }
  } catch (e) {
    throw e;
  }
}

async function updateAddress(req, res) {
  const { id } = req.params;
  const { aid } = req.params;
  const { street, flat_number, district, region } = req.body;
  try {
    const isExist = await UserModel.findOne({ _id: id, "addresses._id": aid });
    if (isExist) {
      let newaddress = isExist;
      const dataIndex = isExist.addresses.findIndex(
        (address) => address._id == aid
      );
      const newAddress = {
        _id: newaddress.addresses[dataIndex]._id,
        street: street || newaddress.addresses[dataIndex].street,
        flat_number: flat_number || newaddress.addresses[dataIndex].flat_number,
        district: district || newaddress.addresses[dataIndex].district,
        region: region || newaddress.addresses[dataIndex].region,
      };
      for (var i = 0; i < newaddress.addresses.length; i++) {
        if (newaddress.addresses[i]._id == aid) {
          console.log(newaddress.addresses[i]);
          newaddress.addresses[i] = newAddress;
        }
      }
      await UserModel.findByIdAndUpdate(id, newaddress);
      res.send({ message: "address is updated" });
    } else {
      res.send({ message: "user or address not found" });
    }
  } catch (e) {
    throw e;
  }
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  updateAddress,
};
