
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
    this.nextElement = null;
    this.nestedGenerator = this.nestedElementGenerator(nestedList);
};

/**
 * @param {NestedInteger[]} nestedList
 * @yield {NestedInteger}
 */
NestedIterator.prototype.nestedElementGenerator = function* (nestedList) {
    for (let nestedElement of nestedList) {
        if (nestedElement.isInteger()) {
            yield nestedElement.getInteger();
        } else {
            yield * this.nestedElementGenerator(nestedElement.getList());
        }
    }
};

/**
 * @this NestedIterator
 * @return {NestedInteger}
 */
NestedIterator.prototype.next = function () {
    if (!this.hasNext()) {
        throw "Element not found.";
    }

    let currentValue = this.nextElement;
    this.nextElement = null;
    return currentValue;
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    if (this.nextElement !== null) {
        return true;
    }
    const {value, done} = this.nestedGenerator.next();
    if (done) {
        return false;
    }
    this.nextElement = value;
    return true;
};

/*
 Interface NestedInteger is in-built in the solution file on leetcode.com. 
 When running the code on the website, do not include this interface.
 */
function NestedInteger() {

    //  Return true if this NestedInteger holds a single integer, rather than a nested list.
    //  @return {boolean}
    this.isInteger = function () {
        // ...
    };

    //  Return the single integer that this NestedInteger holds, if it holds a single integer
    //   Return null if this NestedInteger holds a nested list
    // @return {integer}
    this.getInteger = function () {
        // ...
    };

    // Return the nested list that this NestedInteger holds, if it holds a nested list
    // Return null if this NestedInteger holds a single integer
    //  @return {NestedInteger[]}
    this.getList = function () {
        // ...
    };
}
