
#include <iterator>
#include <utility>
#include <deque>
#include <vector>
using namespace std;

/*
 Interface NestedInteger is in-built in the solution file on leetcode.com. 
 When running the code on the website, do not include this interface.
 */
class NestedInteger {
public:
    // Return true if this NestedInteger holds a single integer, rather than a nested list.
    bool isInteger() const;

    // Return the single integer that this NestedInteger holds, if it holds a single integer
    // The result is undefined if this NestedInteger holds a nested list
    int getInteger() const;

    // Return the nested list that this NestedInteger holds, if it holds a nested list
    // The result is undefined if this NestedInteger holds a single integer
    const vector<NestedInteger>& getList() const;
};

class NestedIterator {
    
    typedef vector<NestedInteger>::const_iterator nestedIterator;
    deque<pair<nestedIterator, nestedIterator>> stack;

public:
    NestedIterator(vector<NestedInteger>& nestedList) {
        stack.emplace_front(nestedList.begin(), nestedList.end());
    }

    int next() {
        if (!hasNext()) {
            throw out_of_range("Element not found.");
        }

        int next = (*stack.front().first).getInteger();
        ++stack.front().first;
        return next;
    }

    bool hasNext() {
        while (!stack.empty()) {
            if (stack.front().first == stack.front().second) {
                stack.pop_front();
                continue;
            }
            if ((*stack.front().first).isInteger()) {
                return true;
            }
            nestedIterator begin = (*stack.front().first).getList().begin();
            nestedIterator end = (*stack.front().first).getList().end();
            ++stack.front().first;
            stack.emplace_front(begin, end);
        }
        return false;
    }
};
