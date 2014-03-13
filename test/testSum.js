var sum = require("../routes/sum");

module.exports = function testSum(n1, n2) {
	function call(param1, callback) {
		console.log("Hi..");
		callback();
	}
	/*var f = function(sum.sum(), function(req, res) {
		console.log(res);

	});
*/
	call(sum.sum(), function(res, req) { console.log("Hi.." + res); });
}
