import helloWorld from './mock.helloWorld';

// Named Exports for the ability to destructure the exposed API ...
export const HelloWorld = helloWorld;
// or alternatively export the whole API
export default { HelloWorld };