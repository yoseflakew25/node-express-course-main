const authorize=function(req, res, next){
    const {user} = req.query
    if (user==='john'){
       rew.user = { name: 'John', id: 3 }
       next()
    }
  
    else {
    res.status(401).send('Unauthorized')
    }
  
}
module.exports=authorize