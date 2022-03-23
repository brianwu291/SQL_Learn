module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE(6),
        defaultValue: new Date(),
        allowNull: false,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE(6),
        defaultValue: new Date(),
        allowNull: false,
        field: "updated_at",
      },
      category: {
        type: DataTypes.STRING(128),
        defaultValue: null,
        allowNull: true,
        field: "category",
      },
      title: {
        type: DataTypes.STRING(128),
        allowNull: false,
        field: "title",
      },
      description: {
        type: DataTypes.STRING(128),
        allowNull: false,
        field: "description",
      },
      price: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: "price",
      },
      texture: {
        type: DataTypes.STRING(128),
        allowNull: false,
        field: "texture",
      },
      wash: {
        type: DataTypes.STRING(128),
        allowNull: false,
        field: "wash",
      },
      place: {
        type: DataTypes.STRING(128),
        allowNull: false,
        field: "place",
      },
      note: {
        type: DataTypes.STRING(128),
        allowNull: false,
        field: "note",
      },
      story: {
        type: DataTypes.STRING(128),
        allowNull: false,
        field: "story",
      },
      mainPictureId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        field: "main_pictureId_id",
      },
    },
    {
      tableName: "products",
    }
  );

  return Products;
};
