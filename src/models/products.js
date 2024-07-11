const ProductSchema = (sequelize, DataTypes) => {
  const ProductTable = sequelize.define('Product', {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    created: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'products',
    underscored: true,
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated',
  });
  return ProductTable;
}

module.exports = ProductSchema;