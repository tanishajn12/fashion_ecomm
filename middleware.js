const Product = require("./models/Product");
const { productSchema } = require("./schema");
const { reviewSchema } = require("./schema");

const validateProduct = (req,res,next)=> {
    let {name, img, price, desc} = req.body;
    const {error}= productSchema.validate({name,img,price,desc})
    if(error){
        const msg = error.details.map((err)=>err.message).join(',')
        return res.render('error',{err:msg})
    }
    next();
}

const validateReview = (req,res,next) =>{
    let {rating, comment} = req.body;
    const {error} = reviewSchema.validate({rating, comment})
    if(error){
        const msg = error.details.map((err)=>err.message).join(',')
        return res.render('error',{err:msg})
    }
    next();
}

//middleware to ensure that only logged in user can perform the app functionality

const isLoggedIn = (req,res,next)=>{

    if(req.xhr && !req.isAuthenticated()){
        return res.status(401).send('unauthorised');
        // console.log(req.xhr);//ajax hai ya nhi hai?
    }
    
    //this means user is not logged in -> log in first
    if(!req.isAuthenticated()){
        req.flash('error' , 'You need to login first');
        return res.redirect('/login')
    }
    next();
}

const isSeller = (req,res,next)=>{
    if(!req.user.role){
        req.flash('error', 'Permissions Denied');
        return res.redirect('/products');
    }
    else if(req.user.role !== "seller"){
        req.flash('error', 'Permissions Denied');
        return res.redirect('/products');
    }

    next();

}

const isProductAuthor = async(req,res,next)=>{
    let {id} = req.params; //product id access
    let product = await Product.findById(id);
    // console.log(product.author, 'author'); //object id
    // console.log(req.user,'user');  //object id
    
    //objects ids cant be compared with == or ===
    //use .equals method
    if(!product.author.equals(req.user._id)){
        req.flash('error', 'Permissions Denied');
        return res.redirect(`/products/${id}`);
    }
    next();
}

module.exports = {validateProduct, validateReview, isLoggedIn, isSeller,isProductAuthor}