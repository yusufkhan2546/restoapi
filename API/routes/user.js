const express = require('express');

const router = express.Router();

router.get('/', (req,res,next)=>{
res.status(200).json({
    message:'Users Get'
});
});
router.post('/', (req,res,next)=>{
    const user = {
        name:req.body.name,
    }
    res.status(200).json({
        message:'Users Post',
        user:user
    });
});
router.get('/:userID',(req,res,next)=>{
    const id = req.params.userID
    if(id==='special'){
        res.status(200).json({
            message:'User with Special ID'
        });  
    } else {
        res.status(200).json({
            message:'User with  ID'
        });
    }
});
router.patch('/:userID',(req,res,next)=>{
    res.status(200).json({
        message:'Patch Requres'
    })
});
router.delete('/:userID',(req,res,next)=>{
    res.status(200).json({
        message:'Delete Requres'
    })
});
module.exports = router;