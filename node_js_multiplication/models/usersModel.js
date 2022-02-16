const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../util/database')

/*
  We'll optimise this model in near future,
  and decouple it in chunks.
*/

class User extends Model {}

User.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: true
    },   
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    },  
    active:{
      type: DataTypes.UUID(1),
      allowNull: false,
      defaultValue: 1,
    },    
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false
  }
);

User.associate = (db) => {

};
module.exports = User;
