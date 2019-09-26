'use strict';

// export default function ( delay ) => (
//   new Promise(( fulfill ) => (
//     setTimeout( fulfill, delay )
//   ))
// )

var awaitDelay = function ( delay ) {
  return new Promise ( function ( fulfill ) {
    setTimeout( fulfill, delay );
  })
};

exports.delay = awaitDelay;
