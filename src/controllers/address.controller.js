const { UserModel } = require("../models/user.model");
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
async function deleteAddress(req, res) {
  const { id } = req.params;
  const { aid } = req.params;
  try {
    const isExist = await UserModel.findOne({ _id: id, "addresses._id": aid });
    const filterData = isExist.addresses.find((address) => address._id != aid);
    let newaddress = isExist;
    newaddress.addresses = filterData;
    console.log(newaddress.addresses);
    if (isExist) {
      await UserModel.findByIdAndUpdate(id, {
        addresses: newaddress.addresses,
      });
      res.send({ message: "address is deleted" });
    } else {
      res.send({ message: "user or address not found" });
    }
  } catch (e) {
    throw e;
  }
}

async function addAddress(req, res) {
  const { id } = req.params;
  const { street, flat_number, district, region } = req.body;

  try {
    const isExist = await UserModel.findOne({ _id: id });
    if (!isExist) {
      res.send({ message: "user not found" });
    } else {
      if (street && flat_number && district && region) {
        const newAddress = {
          street,
          flat_number,
          district,
          region,
        };
        await UserModel.findOneAndUpdate(
          { _id: id },
          { $push: { addresses: newAddress } }
        );
        res.send({ message: "address is added" });
      } else {
        res.send({ message: "data is not enough" });
      }
    }
  } catch (e) {
    throw e;
  }
}

async function getAddress(req, res) {
  const { id } = req.params;
  try {
    const isExist = await UserModel.findOne({ _id: id });
    if (isExist) {
      res.send(isExist.addresses);
    } else {
      res.send({ message: "user not found" });
    }
  } catch (e) {
    throw e;
  }
}

module.exports = { updateAddress, deleteAddress, addAddress, getAddress };
