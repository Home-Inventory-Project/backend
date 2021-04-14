const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	const Home = sequelize.define('Home', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
    name: {
      type : DataTypes.STRING,
      allowNull : false
    },
    address: {
      type : DataTypes.STRING,
      allowNull : true
    },
    state: {
      type : DataTypes.STRING,
      allowNull : true
    },
	});
  return Home
};
