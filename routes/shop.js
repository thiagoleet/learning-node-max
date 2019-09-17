const path = require('path')
const express = require('express')
const router = express.Router()
const rootDir = require('../util/path')
const adminData = require('./admin')

router.get('/', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'shop.html')) // Use simple HTML
  // Using Pug
  const products = adminData.products
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/'
  })
})

module.exports = router
