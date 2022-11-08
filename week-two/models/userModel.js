'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

  const getAllUsers = async (res) => {
    try{
      const sql = 'SELECT user_id, name, email, role from wop_user';
      const [rows] = await promisePool.query(sql);
      return rows;
    } catch (e) {
      console.error("error", e.message);
      res.status(500).send(e.message);
    }
  };

  const getUsersById = async (user, res) => {
    try{
      const sql = 'INSERT user_id, name, email, role from wop_user' + 'WHERE user_id=' + id;
      const [rows] = await promisePool.query(sql);
      return rows [0];
    } catch (e) {
      console.error("error", e.message);
      res.status(500).send(e.message);
    }
  };

  const addUser = async (id, res) => {
    try{
      const sql = 'INSERT INTO wop_user VALUES (null, ?, ?, ?, ?)';
      const values = [user.name, user.email, user.password, user.role] ;
      const [rows] = await promisePool.query(sql, values);
      return result.insertId;
    } catch (e) {
      console.error("error", e.message);
      res.status(500).send(e.message);
    }
  };


module.exports = {
  getAllUsers,
  getUsersById,
  addUser
};
