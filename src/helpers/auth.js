const helpers = {};

helpers.isAuthenticated=(req, res, next) =>{
    if(req.isAuthenticated()){
        return next();
    }
    req.flas('error', 'Not Authprized');
    res.redirect('/users/signin');
};

module.exports = helpers;