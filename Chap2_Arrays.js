/*
ARRAYS
	-ACCESSOR FUNCTIONS:
		-Searching for a Value
			-indexOf()
			-lastIndexOf()
		-String Representations of Arrays:
			-join()
			-toString()
		-Creating New Arrays from Existing Arrays:
			-concat()
			-splice()
	-MUTATOR FUNCTIONS:
		-Adding Elements to an Array
			-push()
			-unshift()
		-Removing Elements from an Array
			-pop()
			-shift()
		-Adding and Removing Elements from the Middle of an Array
			-splice()
		-Putting Array Elements in Order
			-reverse()
			-sort()
	-ITERATOR FUNCTIONS:
		-Non-Array-Generating Iterator functions
			-forEach()
			-every()
			-some()
			-reduce()
			-reduceRight()
			-map()
			-filter()
*/

/* CREATING ARRAYS */

var numbers0 = [];
var numbers1 = new Array();
var numbers2 = new Array(1,2,3,4,5);
var numbers3 = new Array(10);
var objects = [1, 'Joe', true, null];

var numbers = 3;
var arr = [7,4,1776];
console.log(Array.isArray(numbers)); // displays false
console.log(Array.isArray(arr)); // displays true

/* ===> ACCESSING AND WRITING ARRAY ELEMENTS */
/* Following loop assigns the values 1 through 100 to an array */

var nums = [];
for (var i = 0; i < 100; ++i) {
	nums[i] = i + 1;
}

/* Array elements are also accessed using the [] operator. For example: */

var numbers = [1,2,3,4,5];
var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] 
console.log(sum); // displays 15

/* Accessing all elements of an array sequentially is much easier using a for loop: */

var numbers = [1,2,3,5,8,13,21];
var sum = 0;
for (var i = 0; i < numbers.length; ++i) {
	sum += numbers[i];
}
console.log(sum); //displays 53

/* Creating Arrays from Strings */

var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(' ');
for (var i = 0; i < words.length; ++i) {
	console.log("word " + i + ": " + words[i]); 
}

/* Aggregate Array Operations */

var nums = [];
for (var i = 0; i < 10; ++i) {
	nums[i] = i + 1;
}
var samenums = nums;

/* when you assign one array to another array, you are assigning a reference to the assigned array. This is a SHALLOW COPY */

var nums = [];
for (var i = 0; i < 100; ++i) {
	nums[i] = i+1;
}
var samenums = nums;
nums[0] = 400;
console.log(samenums[0]); // displays 400

/* this is a DEEP COPY */

function copy(arr1, arr2) {
	for (var i = 0; i < arr1.length; i++) {
		arr1[i] = arr2[i];
	}
}

var nums = [];
for (var i = 0; i < 100; ++i) {
	nums[i] = i+1;
}
var samenums = [];
copy(nums, samenums);
nums[0] = 400;
console.log(samenums[0]); // displays 1

/* ===> ACCESSOR FUNCTIONS: these functions return some represnetation of the target array as their return value */

	/* Searching for a value */

		/* indexOf() : The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. */

		/* lastIndexOf(): lastIndexOf(), will return the position of the last occurrence of the argument in the array, or -1 if the argument isn’t found */

var names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
var name = "Mike";
var firstPos = names.indexOf(name);
console.log('First found ' + name + 'at position ' + firstPos);
var lastPos = names.lastIndexOf(name);
console.log('Last found ' + name + 'at position ' + lastPos); 

	/* String Representations of Arrays */

		/* join(): The join() method joins all elements of an array (or an array-like object) into a string. */

		/* toString(): The toString() method returns a string representing the specified array and its elements. */

var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
var namestr = names.join();
console.log(namestr);
namestr.toString();
console.log(namestr);

	/* Creating New Arrays from Existing Arrays */

		/* concat(): allows you to put together two or more arrays to create a new array */

var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];
var itDiv = cisDept.concat(dmpDept);
console.log(itDiv);
itDiv = dmpDept.concat(cisDept);
console.log(itDiv);

		/* splice(): allows you to create a new array from a subset of an existing array. The arguments to the function are the starting position for taking the splice and the number of elements to take from the existing array. */

var itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
var dmpDept = itDiv.splice(3,3);
var cisDept = itDiv;
console.log(dmpDept);
console.log(cisDept);

/* ===> MUTATOR FUNCTIONS: allow you to modify the contents of an array without referencing the individual elements. */

	/* Adding Elements to an Array */

		/* push(): adds an element to the end of an array */

var nums = [1,2,3,4,5];
console.log(nums);
nums.push(6);
console.log(nums);

		/* What if we wanted to add numbers to be beginning of the array? (unshift() under the hood)*/

var nums = [2,3,4,5];
var newnum = 1;
var N = nums.length;
for (var i = N; i >= 0; --i) {
	nums[i] = nums[i-1];
}
nums[0] = newnum;
console.log(nums);

		/* unshift(): adding array elements to the beginning of an array. you can add multiple elements to an array with one call to the function */

var nums = [2,3,4,5];
console.log(nums);
var newnum = 1;
nums.unshift(newnum);
console.log(nums);
nums = [3,4,5];
nums.unshift(1,2);
console.log(nums);

	/* Removing Elements from an Array */

		/* pop(): Removing an element from the end of an array */

var nums = [1,2,3,4,5,9];
nums.pop();
console.log(nums);

		/* What if we wanted to remove numbers at the beginning of the array? (shift() under the hood)*/

var nums = [9,5,4,3,2,1];
for (var i = 0; i < nums.length; ++i) {
	nums[i] = nums[i+1];
}
nums.pop();
console.log(nums);

		/* shift(): remove an element from the beginning of an array */

var nums = [9,5,4,3,2,1];
nums.shift();
console.log(nums);

		/* Both pop() and shift() return the values they remove, so you can collect the values in a variable: */

var nums = [6,1,2,3,4,5];
var first = nums.shift();
nums.push(first);
console.log(nums);

	/* Adding and Removing Elements from the Middle of an Array */

		/* splice(): changes the contents of an array by removing existing elements and/or adding new elements 
				-To add elements, you need to provide args:
						-Starting index (where you want to begin adding elements)
						-The number of elements to remove(0 when you are adding elements)
						-The elements you want to add to the array
				-To remove elements, you need to provide args:
						-Starting index
						-Number of elements to remove
		*/

var nums = [1,2,3,7,8,9];
nums.splice(3,0,4,5,6);
console.log(nums);

var nums = [1,2,3,100,200,300,400,4,5];
nums.splice(3,4);
console.log(nums)

	/* Putting Array Elements in Order */

		/* reverse():reverses the order of the elements of an array */

var nums = [1,2,3,4,5];
nums.reverse();
console.log(nums);

		/* sort(): sort the elements of an array into alphabetical order
			-In order to sort numbers, we will need to pass in an ordering function as the first argument to the function, which sort() will then use to sort the array elements. This is the function that sort() will use when comparing pairs of array elements to determine their correct order.

		*/

var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];
names.sort();
console.log(names);

		/*
			For numbers, the ordering function can simply subtract one number from another number. If the number returned is negative, the left operand is less than the right operand; if the number returned is zero, the left operand is equal to the right operand; and if the number returned is positive, the left operand is greater than the right operand.
		*/

function compare(num1, num2) {
	return num1 - num2;
}

var nums = [3,1,2,100,4,200];
nums.sort(compare);
console.log(nums);

/* ===> ITERATOR FUNCTIONS: These functions apply a function to each element of an array, either returning a value, a set of values, or a new array after applying the function to each element of an array */

	/* Non-Array-Generating Iterator Functions: */

		/* forEach(): This function takes a function as an argument and applies the called function to each element of an array. */

function square(num) {
	console.log(num, num * num);
}

var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);

		/* every(): applies a Boolean function to an array and returns true if the function can return true for every element in the array.*/

function isEven(num) {
	return num % 2 == 0;
}

var nums = [2,4,6,8,10];
var even = nums.every(isEven);
if (even) {
	console.log('all numbers are even');
} else {
	console.log('not all numbers are even');
}

		/* some(): will take a Boolean function and return true if at least one of the elements in the array meets the criterion of the Boolean function */

function isEven(num) {
	return num % 2 == 0;
}

var nums = [1,2,3,4,5,6,7,8,9,10];
var someEven = nums.some(isEven);
if (someEven) {
	console.log('some numbers are even');
} else {
	console.log('no numbers are even');
}

nums = [1,3,5,7,9];
someEven = nums.some(isEven);
if (someEven) {
	console.log("some numbers are even");
} else {
	console.log("no numbers are even");
}

		/* reduce(): applies a function to an accumulator and the successive elements of an array until the end of the array is reached, yielding a single value. */

function add(runningTotal, currentValue) {
	return runningTotal + currentValue;
}

var nums = [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);
console.log(sum);

		/*
			add(1,2) -> 3
			add(3,3) -> 6
			add(6,4) -> 10
			add(10,5) -> 15
			add(15,6) -> 21
			add(21,7) -> 28
			add(28,8) -> 36
			add(36,9) -> 45
			add(45,10) -> 55
		*/

function concat(accumulatedString, item) {
	return accumulatedString + item;
}

var words = ['the ', 'quick ', 'brown ', 'fox '];
var sentence = words.reduce(concat);
console.log(sentence); //the quick brown fox

		/* reduceRight(): method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value. */

function concat(accumulatedString, item) {
	return accumulatedString + item;
}

var words = ['the ', 'quick ', 'brown ', 'fox '];
var sentence = words.reduceRight(concat);
console.log(sentence); //fox brown quick the

	/* Iterator Functions That Return a New Array: */

		/* map(): The map() function works like the forEach() function, applying a function to each element of an array. The difference between the two functions is that map() returns a new array with the results of the function application.*/

function curve(grade){
	return grade += 5;
}

var grades = [77,65,81,92,83];
var newgrades = grades.map(curve);
console.log(newgrades);

function firstA(word){
	return word[0];
}

var words = ['for','your','information'];
var acronym = words.map(firstA);
console.log(acronym.join(''));

		/* filter(): The filter() function works similarly to every(), but instead of returning true if all the elements of an array satisfy a Boolean function, the function returns a new array consisting of those elements that satisfy the Boolean function.*/

function isEven(num) {
	return num % 2 == 0;
}

function isOdd(num) {
	return num % 2 != 0;
}

var nums = [];
for (var i = 0; i < 20; ++i) {
	nums[i] = i + 1;
}

var evens = nums.filter(isEven);
console.log('Even numbers: ', evens);
var odds = nums.filter(isOdd);
console.log('Odd numbers: ', odds);

//=================

function passing(num){
	return num >= 60;
}

var grades = [];
for (var i = 0; i < 20; ++i) {
	grades[i] = Math.floor(Math.random() * 101);
}

var passingGrades = grades.filter(passing);
console.log('All grades: ', grades);
console.log('Passing grades: ', passingGrades);

//===================

function afterC(word){
	if (word.indexOf('cie') > -1) {
		return true;
	} else {
		return false;
	}
}

var words = ["recieve","deceive","percieve","deceit","concieve"];
var misspelled = words.filter(afterC);
console.log(misspelled);

/* ===> TWO-DIMENSIONAL AND MULTIDIMENSIONAL ARRAYS: JavaScript arrays are only one-dimensional, but you can create multidimensional arrays by creating arrays of arrays. */

	/* Creating Two-Dimensional Arrays */

Array.matrix = function(numrows, numcols, initial) {
	var arr = [];
	for (var i = 0; i < numrows; ++i) {
		var columns = [];
		for (var j = 0; j < numcols; ++j) {
			columns[j] = initial;
		}
		arr[i] = columns;
	}
	return arr;
}

var nums = Array.matrix(5,5,0);
console.log(nums[1][1]);

 


