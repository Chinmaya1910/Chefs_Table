const express=require('express');
const router=express.Router();
const auth=require('../../middleware/auth');

//Item Model
const recipes=require('../../models/recipes');

//@route GET api/recipes
//@desc Get All recipes
//@access Public

router.get('/',(req,res)=>{
    recipes.find()
    .sort({date:-1})
    .then(recipes=>res.json(recipes));
});


//@route post api/recipes
//@desc create post recipes
//@access private

router.post('/',auth,(req,res)=>{
    const newRecipes= new recipes({
        name:req.body.name,
    });

    newRecipes.save().then(recipes=>res.json(recipes));
});



//@route delete api/recipes
//@desc delete post recipes
//@access private

router.delete('/:id',auth,(req,res)=>{
    recipes.findById(req.params.id)
    .then(recipes=>recipes.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}));
});


module.exports = router;