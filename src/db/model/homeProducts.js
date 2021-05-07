const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  HomeProducts.belongsTo(Home);
  HomeProducts.belongsTo(Product);

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
