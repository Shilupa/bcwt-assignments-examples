"use strict";
const userModel = require("../models/userModel");

const getUsers = async (req, res) => {
  const users = await userModel.getAllUsers(res);
  res.json(users);
};

const getUser = async (req, res) => {
  //choose onlu one object with matching id
  console.log(req.params.userId);
  const user = await userModel.getUsersById(req.params.userId, res);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

const createUser = async (req, res) => {
  console.log("Creating a new user:", req.body);
  const newUser = req.body;
  const result = await userModel.addUser(newUser, res);
  res.status(201).json({ userId: result });
};

const modilfyUser = async(req, res) => {
  const userId = req.body;
  if (req.params.userId){
    user.id = req.params.userId;
  }
  const result = await userModel.updateUserById(user, res);
  if (result.affectedRows > 0) {
    res.json({message: 'user modified' + user.id});
  } else {
    res.status(404).json({message: 'nothing changed'});
  }
};
  
const deleteUser = async(req, res) => {
  const result = await userModel.deleteUserById(req.params.userId, res);
   console.log('user deleted', result)
  if (result.affectedRows > 0){
    res.json({message: 'user deleted'});
  } else {
    res.status(404).json({message: 'user was already deleted'});
  }
};

module.exports = {
  getUser,
  getUsers,
  modilfyUser,
  createUser,
  deleteUser,
};
