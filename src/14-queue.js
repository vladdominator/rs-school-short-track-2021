const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = [];
    this.length = 0;
    this.listLength = null;
  }

  get size() {
    return this.queue.length;
  }

  enqueue(element) {
    const node = new ListNode(element);
    this.listLength = node;
    this.top = element;
    this.length++;
    this.queue.push(element);
  }

  dequeue() {
    this.length--;
    return this.queue.shift();
  }
}

module.exports = Queue;
