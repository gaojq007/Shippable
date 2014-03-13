
/*
 * GET	 users listing.
 */

exports.list = function(){
  return function(req, res) {
	var num1 = req.body.txt1;
	var num2 = req.body.txt2;
	res.send("sum",{"#txt1":"OK..."});
  }
};
