//validate input data
function validateInput(dataIn) {
  var p = new Promise(function (resolve, reject) {
    var validNums = [];
    dataIn.forEach(function (element) {
      var num = Number(element);
      if (isNaN(num)) {
        reject("not a triangle");
      } else {
        validNums.push(num);
      }
    });
    resolve(validNums);
  });
  return p;
}

//test if a valid triangle
function isTriangle(segment) {
  if ((segment[0] + segment[1]) > segment[2] &&
    (segment[1] + segment[2]) > segment[0] &&
    (segment[0] + segment[2]) > segment[1]
  ) {
    return true;
  } else {
    return false;
  }
}

var triangleType = function (sides) {
  var p = new Promise(function (resolve, reject) {
    validateInput(sides).then(function (segment) {
      var triangleShape = "";
      if (isTriangle(segment)) {
        //check if equilateral (All segment are equal)
        if (segment[0] == segment[1] &&
          segment[0] == segment[2] &&
          segment[1] == segment[2]) {
          triangleShape = "equilateral";
        }
        //check if isosceles( 2 segments are equal)
        else if (segment[0] == segment[1] ||
          segment[0] == segment[2] ||
          segment[1] == segment[2]) {
          triangleShape = "isosceles";
        } else {
          triangleShape = "scalene";
        }
      } else {
        triangleShape = "not a triangle";
      }
      resolve(triangleShape);
    },
      function () {
        console.log('not a triangle');
      });
  });
  return p
}

module.exports = triangleType;

//Read user input
const args = process.argv;
var triangleSides = args.slice(2);

triangleType(triangleSides).then(function (data) {
  console.log(data);
});
