const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../Utile/database')


class SchoolModel extends Model {}

SchoolModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
    studentName: {
      type: DataTypes.STRING(500),
      allowNull: true
    },   
    fatherName: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    motherName: {
        type: DataTypes.STRING(500),
        allowNull: true
      },  
    birthDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    phoneNumber: {
        type: DataTypes.STRING(10),
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

SchoolModel.associate = (db) => {

};
module.exports = SchoolModel;
