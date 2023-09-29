function calculateRectangleAreaDeclaration(width, height) {
  const area = width * height;
  return area;
}

const calculateRectangleAreaExpression = function (width, height) {
  const area = width * height;
  return area;
};

const calculateRectangleAreaArrow = (width, height) => {
  const area = width * height;
  return area;
};

const width = 5;
const height = 10;

const resultDeclaration = calculateRectangleAreaDeclaration(width, height);
console.log('Rectangle Area (Declaration):', resultDeclaration);

const resultExpression = calculateRectangleAreaExpression(width, height);
console.log('Rectangle Area (Expression):', resultExpression);

const resultArrow = calculateRectangleAreaArrow(width, height);
console.log('Rectangle Area (Arrow):', resultArrow);
