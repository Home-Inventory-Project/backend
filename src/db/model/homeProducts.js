const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	const HomeProducts = sequelize.define('HomeProducts', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INT
    },
    expiration_date: {
      type : DataTypes.DATEONLY,
      allowNull : false
    },
    quantity: {
      type : DataTypes.INT,
      allowNull : false
    }
	});
  return HomeProducts
};
