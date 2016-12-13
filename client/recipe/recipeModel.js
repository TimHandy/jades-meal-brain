'use strict'

let mongoose = require('mongoose')
let RecipeSchema = mongoose.Schema

let Recipe = new RecipeSchema({
    title: String,
    created: Date,
    lastUpdated: Date,
    type: String,
    serves: Number,
    proteinSource: String,
    category: String,
    prepTime: Number,
    cookTime: Number,
    ingredients: {
        ingredientName: String,
        qty: String
    }, 
    method: String,
    comments: String,
    favourite: Boolean,
    calories: Number,
    photo: { data: Buffer, contentType: String },
    author: String
})

module.exports = mongoose.model('Recipes', RecipeSchema)
