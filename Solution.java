
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Iterator;
import java.util.List;
import java.util.NoSuchElementException;

public class NestedIterator implements Iterator<Integer> {

    Deque<Iterator<NestedInteger>> stack;
    NestedInteger next;

    public NestedIterator(List<NestedInteger> nestedList) {
        stack = new ArrayDeque<>();
        stack.push(nestedList.iterator());
    }

    @Override
    public Integer next() throws NoSuchElementException {
        if (!hasNext()) {
            throw new NoSuchElementException("Element not found.");
        }
        int currentValue = next.getInteger();
        next = null;
        return currentValue;
    }

    @Override
    public boolean hasNext() {
        if (next != null) {
            return true;
        }

        while (!stack.isEmpty()) {
            if (!stack.peek().hasNext()) {
                stack.pop();
                continue;
            }
            next = stack.peek().next();
            if (next.isInteger()) {
                return true;
            }
            stack.push(next.getList().iterator());
        }
        return false;
    }
}

/*
 Interface NestedInteger is in-built in the solution file on leetcode.com. 
 When running the code on the website, do not include this interface.
 */
interface NestedInteger {

    // @return true if this NestedInteger holds a single integer, rather than a nested list.
    public boolean isInteger();

    // @return the single integer that this NestedInteger holds, if it holds a single integer
    // Return null if this NestedInteger holds a nested list
    public Integer getInteger();

    // @return the nested list that this NestedInteger holds, if it holds a nested list
    // Return empty list if this NestedInteger holds a single integer
    public List<NestedInteger> getList();
}// @return the nested list that this NestedInteger holds, if it holds a nested list
 
