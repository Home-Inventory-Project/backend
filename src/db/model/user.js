const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	const User = sequelize.define('User', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INT
    },
    username: {
      type : DataTypes.STRING,
      allowNull : false
    },
    email: {
      type : DataTypes.STRING,
      allowNull : true
    },
    password: {
        type : DataTypes.password,
        allowNull : false
    },
    birthdate: {
      type : DataTypes.DATEONLY,
      allowNull : true
    },
    sex: {
      type : DataTypes.CHAR,
      allowNull : true
    },
    status: {
        type : DataTypes.STRING,
        allowNull : false
    }
	});
  return User
};
