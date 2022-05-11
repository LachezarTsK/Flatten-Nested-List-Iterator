
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
    this.stack = [];
    this.stack.push(nestedList);
};

/**
 * @this NestedIterator
 * @returns {NestedInteger}
 */
NestedIterator.prototype.next = function () {
    if (!this.hasNext()) {
        throw "Element not found.";
    }
    return this.stack[this.stack.length - 1].shift().getInteger();
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    while (this.stack.length > 0) {
        if (this.stack[this.stack.length - 1].length === 0) {
            this.stack.pop();
            continue;
        }
        if (this.stack[this.stack.length - 1][0].isInteger()) {
            return true;
        }
        this.stack.push(this.stack[this.stack.length - 1].shift().getList());
    }
    return false;
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
