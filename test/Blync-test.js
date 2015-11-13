var should = require('should');
var Blync = require('../index.js').Blync;

describe('Blync', function(){
	
	
	describe('#constructor', function(){
		var blync;
		
		before(function() {
			blync = new Blync();
		})
		
		it('should contain 4 properties', function() {
			Object.getOwnPropertyNames(blync).length.should.be.exactly(4);
		});
		
		it('should not have any opened devices', function() {
			blync._openedDevices.length.should.be.exactly(0);
		});
	});
})