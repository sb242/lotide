# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @spencerb242/lotide`

**Require it:**

`const _ = require('@spencerb242/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEquals(a1, a2)`: Checks if arrays are equal and prints assertion message to console
* `assertEqual(element1, element2)`: Checks if two variables are equal using === operator
* `assertObjectEquals(o1, o2)`: Checks if objects are equal and prints assertion message to console
* `countLetters(string)`: Count number of letters in a string excluding whitespaces
* `countOnly(arr, itemsToCount)`: Returns a number with the amount of items found in arr with whats in the itemsToCount array
* `eqArrays(a1, a2)`: Checks if arrays are equal
* `eqObjects(o1, o2)`: returns true if objects are equal, false if not
* `findKey(object, callback)`: Finds key in object callback finds matching value
* `findKeyByValue(object, value)`: Returns key if value of object equals searched value
* `flatten(array)`: Removes nested arrays
* `head(array)`: Returns first element in array
* `letterPositions(string)`: Returns the letters and their positions in the string
* `map(arr, callback)`: Maps callback function onto each element of arr and returns new array without affected original
* `middle(array)`: Returns middle element in the array, if even returns both
* `tail(array)`: Returns the tail end of the array, without the head
* `takeUntil(array, callback)`: Returns new array with array items in order until callback condition is met
* `without(array, remove)`: Returns new array without any items included in the passed in remove array
)