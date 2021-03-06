module.exports = function sortedArray( N = 0, isFilled = true, startAtZero = true ) {
  if ( N == 0 ) {
    return [];
  }
  if ( N > 0 && !isFilled ) {
    return Array( N ).fill();
  }
  if ( isFilled && !startAtZero ) {
    return Array.from( { length: N }, ( v, k ) => k + 1 );
  }
  return Array.from( { length: N }, ( v, k ) => k++ );
};
