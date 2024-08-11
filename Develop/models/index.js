const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongs to Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE', // This enables cascade delete for products when the category is deleted
});

// Category has many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE', // This ensures products are deleted if the category is deleted
});

// Product belongs to many Tags through ProductTag
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tag belongs to many Products through ProductTag
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
Tag,
ProductTag,
};
