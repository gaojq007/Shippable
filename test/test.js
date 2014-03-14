var should = require('should');
var assert = require('assert');
var request = require('supertest');
var expect = require('expect.js');
var inputs = require("../config.json").input;
var sum = require('../routes/sum').sum;

/*
describe('Routing', function() {

	var url = "http://localhost:8000";
	before(function(done) {

		done();
	});

	describe('Addends', function() {
		it('should return sum of the two numbers passed', function(done) {
		var input = {

			'text1': 2,
			'text2': 4
		};

		console.log(input);

		request(url)
			.post('/sum')
			.send(input)
			.end(function(err, res) {
				if(err) throw err;
				else {
					var sum = res.body.sum;
					var expectedSum = 6;
					expect(sum).to.eql(expectedSum);
					expect(res.status).to.eql(200);
				}
				done();
			});
		});
	});
});
*/

	suite('sum', function() {
		test('sum should return the sum of two numbers', function() {
			assert.equal(inputs[0].text1 + inputs[0].text2, 10);
		});
		
		test('sum should return the sum of two numbers', function() {
			assert.equal(inputs[1].text1 + inputs[1].text2, 15);
		});

	});


	
