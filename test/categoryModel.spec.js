const assert = require('chai').assert;
const categoryModel = require('../models/categoryModel');

describe('Category Model', () => {
  it('should return all categories', (done) => {
    categoryModel.getAllCategories(null, (err, categories) => {
      assert.isNull(err);
      assert.isArray(categories);
      done();
    });
  });
  it('should return all sub - categories', (done) => {
    categoryModel.getAllCategories(1, (err, categories) => {
      assert.isNull(err);
      assert.isArray(categories);
      done();
    });
  });
});
