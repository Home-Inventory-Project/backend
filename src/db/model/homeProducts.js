const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	const HomeProducts = sequelize.define('HomeProducts', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    expiration_date: {
      type : DataTypes.DATEONLY,
      allowNull : false
    },
    quantity: {
      type : DataTypes.INTEGER,
      allowNull : false
    }
	});
  return HomeProducts
};
