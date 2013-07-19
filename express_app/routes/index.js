
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.name = function(req, res){
    var name = req.body.name;
    res.send('name', {name:name});
}
