
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('mainpage', { title: 'mainpage' });
};