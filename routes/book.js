var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');

/**
 * GET All Books.
 */

 router.get('/', function(req, res, next){
     Book.find((err, products) => {
        if(err) return next(err);
        res.json(products);
     })
 })

 /**
  * GET single book by ID
  */

  router.get('/:id', (req, res, next) => {
    Book.findById(req.params.id, (err, post) => {
        if(err) return next(err);
        res.json(post);
    });
  });

  /**
   * SAVE book
   */
  router.post('/', (req, res, next) => {
    Book.create(req.body, (err, post) =>{
        if(err) return next(err);
        res.json(post);
    });
  });

  /**
   * UPDATE book
   */
  router.put('/:id', (req, res, next) => {
    Book.findByIdAndUpdate(req.params.id,req.body, (err, post) => {
        if(err) return next(err);
        res.json(post);
    });
  });

  /**
   * DELETE book
   */

   router.delete('/:id', (req, res, next) => {
       Book.findByIdAndRemove(req.params.id, req.body, (err, post) => {
            if(err) return next(err);
            res.json(post);
       });
   })

 module.exports = router;