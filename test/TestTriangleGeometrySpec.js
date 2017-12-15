
var should = require('chai').should();

describe('Triangle Geometry', function () {

    var triangleType = require("../src/TriangleGeometry.js");

    it("should be equilateral", function () {
        triangleType([1.5, 1.5, 1.5]).then(function(data){
            data.should.equal('equilateral');
        });
    });

    it("should be isosceles", function () {
        triangleType([3, 4, 4]).then(function(data) {
            data.should.equal('isosceles');
        });    
    });

    it("should be scalene", function () {
        triangleType([4.4, 7.3, 9.1]).then(function(data) {
            data.should.equal('scalene');
        });    
    });

    it("should be not a triangle", function () {
        triangleType([4, 6, 11]).then(function(data) {
            data.should.equal('not a triangle'); 
        });      
    });
});