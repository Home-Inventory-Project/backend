const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	const Product = sequelize.define('Product', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INT
		},
    name: {
      type : DataTypes.STRING,
      allowNull : false
    },
    category: {
      type : DataTypes.STRING,
      allowNull : true
    },
    image: {
      type : DataTypes.STRING,
      allowNull : true
    },
    barcode: {
      type : DataTypes.STRING,
      allowNull : true
    }
	});
  return Product
};
