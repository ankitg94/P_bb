const  express =require('express')
const { deleteBlogController,
     getBlogByIdController,
     updateBlogController,
     createBlogController,
     getAllBlogController, 
     userBlogController,
    } = require('../controllers/blogController')

//router object
const router = express.Router()

//routers
//Get||all blocks
router.get('/all-blog',getAllBlogController)
//post||create blog
router.post('/create-blog',createBlogController)
//PUT||update blog
router.put('/update-blog/:id',updateBlogController);
//get||single blog details
router.get('/get-blog/:id',getBlogByIdController);

//Delete||Delete blog 
router.delete('/delete-blog/:id',deleteBlogController);

//get || user.blog

router.get('/user-blog/:id',userBlogController)
module.exports = router;