'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop(data) {
    if (data === undefined) {
      const node = this.top;
      this.top = node.next;
      return node.data;
    } else {
      let node = this.top;
      while (node.data !== data) {
        node = this.top;
        this.top = node.next;
      }
      return node.data;
    }
  }
}

function peek(stack) {
  return stack.top;
}

function display(stack) {
  if (stack.top === null) {
    console.log('Stack is empty');
  } else {
    let result = [];
    let currNode = stack.top;
    while (currNode !== null) {
      result.push(currNode.data);
      currNode = currNode.next;
    }
    return result;
  }
}

function isPalindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const stringStack = new Stack;
  for (let i = 0; i < string.length; i++) {
    stringStack.push(string[i]);
  }
  for (let j = 0; j < (Math.floor(string.length/2)); j++) {
    return string[j] === stringStack.pop();
  }
  return false;
}

function matchParentheses1(string) {
  const parenthesesStack = new Stack;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      parenthesesStack.push(string[i]);
    }
    if (string[i] === ')') {
      parenthesesStack.pop();
    }
  }
  return (!parenthesesStack.top);
}

function sortStack(stack) {

}

function main() {
  // const starTrek = new Stack;
  // starTrek.push('Kirk');
  // starTrek.push('Spock');
  // starTrek.push('McCoy');
  // starTrek.push('Scotty');
  // console.log(starTrek);
  // console.log(peek(starTrek));
  // console.log(display(starTrek));
  // starTrek.pop('McCoy');
  // console.log(display(starTrek));

  // console.log(isPalindrome('dad'));
  // console.log(isPalindrome('A man, a plan, a canal: Panama'));
  // console.log(isPalindrome('1001'));
  // console.log(isPalindrome('Tauhida'));

  // console.log(matchParentheses1('((((Hello))))'));
  // console.log(matchParentheses1('(5 + 7) (6 + 9)'));
  // console.log(matchParentheses1('((((Hello)))'));

  // const numberStack = new Stack;
  // numberStack.push(1);
  // numberStack.push(2);
  // numberStack.push(3);
  // numberStack.push(5);
  // numberStack.push(4);
  // numberStack.push(8);
  // numberStack.push(6);
  // numberStack.push(7);
  // numberStack.push(9);
  // console.log(numberStack);
}

main();