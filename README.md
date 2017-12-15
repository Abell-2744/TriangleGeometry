# Triangle Geometry

The users, of this program will use the command line to enter 3 numbers to classify triangles, based on three numbers entered. The numbers represent the lengths of three line segments that may be able to be arranged to form a triangle.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Javascript ES5/ES6
Node.js
Mocha.js
Chai.js

### Installing

Go to http://nodejs.org, download and install version 7.8.0

Download/Clone source code from https://github.com/Abell-2744/TriangleGeometry.git

## Running the tests
npm install mocha<br>
npm install chai<br>

npm test

### And coding style tests

Sample Test input:
1.5 1.5 1.5   //Equallitaral <br>
3 4 4         //Isosceles<br>
4.4 7.3 9.1   //Scalene<br>
4 6 11        //Not a Triangle<br>

Sample test output:<br>
  Triangle Geometry<br>
    ✓ should be equilateral<br>
    ✓ should be isosceles<br>
    ✓ should be scalene<br>
    ✓ should be not a triangle<br>
  4 passing (10ms)<br>

## Deployment and Execute code
Download files from github

run - nmp install

Execute code from command;<br>
cd to folder Flexion/src<br>
node TriangleGeometry 1.5 1.5 1.5<br>
node TriangleGeometry 3 4 4<br>
node TriangleGeometry 4.4 7.3 9.1<br>
node TriangleGeometry 4 6 11<br>







