var express=require('express'); 
var router=express.Router(); 
router.get('/',(req,res)=>{ 
res.send('Sign Up Page'); 
}); 
// router.post('/',(req,res)=>{ 
// res.send('Signup page'); 
// }); 
module.exports=router;