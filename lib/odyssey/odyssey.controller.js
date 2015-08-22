module.exports = {
  openDoors : function(req, res){
    res.send("I'm sorry, Homer. I'm afraid I can't do that.");
  },
  disconnectHal : function(req, res){
    res.render('disconnect', {title: 'Disconnecting Hal'});
  }
};