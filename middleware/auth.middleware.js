const auhtService = require('../services/auth.service');
async function restrict(req, res, next){
    const userId = req.cookies.uuid;
    if(!userId) return res.status(401).json({message: 'Unauthorized!'});
    const user = auhtService.getUser(userId);
    if(!user) return res.status(401).json({message: 'Unauthorized!'});
    req.user = user;
    next();    
}

module.exports = {
    restrict
}