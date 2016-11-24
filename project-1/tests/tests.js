'use strict';
var expect = require('expect');

var aritGeo = require('../app/library.js').aritGeo;

 describe("Determine the sequence of an array of numbers: ", function() {

   describe("Case for an empty array", function() {

     it("should return 0 for an empty array", function() {
       expect(aritGeo([])).toEqual(0);
     });

   });

   describe("Case for an arithmetic sequence", function() {

     it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
       expect(aritGeo([2, 4, 6, 8, 10])).toEqual('Arithmetic');
     });

     it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {
       expect(aritGeo([5, 11, 17, 23, 29, 35, 41])).toEqual('Arithmetic');
     });

     it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
       expect(aritGeo([15, 10, 5, 0, -5, -10])).toEqual('Arithmetic');
     });

   });

   describe("Case for a geometric sequence", function() {

     it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
       expect(aritGeo([2, 6, 18, 54, 162])).toEqual('Geometric');
     });
   });
  });
