# TypeScript Closure Issue in setTimeout Loop

This example demonstrates a common closure-related issue in JavaScript (and therefore TypeScript) when using `setTimeout` within a loop.  The expected behavior is to print numbers 1 through 10, but due to how closures work with the loop variable, it prints 11 eleven times.

## Bug

The `printNumbers2` function attempts to print numbers 1 through `n` using `setTimeout` to simulate asynchronous behavior. However, by the time `setTimeout`'s callback function executes, the loop has already completed, and `i` will hold its final value (11 in this case). Thus, all callbacks log 11.

## Solution

The solution involves using an immediately invoked function expression (IIFE) to create a new scope for `i` within each iteration of the loop, preserving the correct value for each callback.