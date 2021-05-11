const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
      type : DataTypes.STRING,
      allowNull : true
    },
    email: {
      type : DataTypes.STRING,
      allowNull : false
    },
    password: {
        type : DataTypes.STRING,
        allowNull : false
    },
    birthdate: {
      type : DataTypes.DATEONLY,
      allowNull : true
    },
    sex: {
      type : DataTypes.CHAR,
      allowNull : true,
      validate: {
        len: [1]
      }
    },
    status: {
      type : DataTypes.CHAR,
      allowNull : false,
      validate: {
        len: [1]
      }
    }
	});
  return User
};
