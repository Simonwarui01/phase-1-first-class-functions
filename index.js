function receivesAFunction(callback) {
    callback();
}

// Function to return a named function
function returnsANamedFunction() {
    return function namedFunction() {
        // Function body
    };
}

// Function to return an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        // Function body
    };
}