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
  get size() {
    let size = 0;
    function dip(list) {
      if (list.next === null) {
        size++;
        return size;
      }
      size++;
      size = dip(list.next);
      return size;
    }
    return dip(this.list);
  }

  enqueue(element) {
    if (!this.list) {
      const newList = new ListNode(element);
      this.list = newList;
    } else {
      const newList = new ListNode(element);
      newList.next = this.list;
      this.list = newList;
    }
  }

  dequeue() {
    let currentNode = this.list;
    let tailValue = currentNode.value;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        tailValue = currentNode.next.value;
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    return tailValue;
  }
}

module.exports = Queue;
