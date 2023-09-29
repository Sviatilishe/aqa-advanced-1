const divide = (numerator, denominator) => {
  try {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
      throw new Error('Both arguments must be numbers');
    }

    if (denominator === 0) {
      throw new Error('Division by zero is impossible');
    }

    const result = numerator / denominator;

    return result;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    console.log('The work is complete');
  }
};

divide(10, 2);
divide(10, 0);
divide('abc', 5);
divide(true, 5);
divide(null, 5);
