"use strict";
//constructor function for linked list
function LinkedList() {
    this.head = null;
}
//Empty
LinkedList.prototype.isEmpty = function () {
    if (this.head === null) {
        return true;
    } else {
        return false;
    }
}
//size
LinkedList.prototype.size = () => {
    let current = this.head;
    let count = 0;
    while (current !== null) {
        count++;
        current = current.next;
    }
    return count;
}
//prepend adding nodes at the begaining of linkedlist
LinkedList.prototype.prepend = (value) => {
    var newNode = {
        data: value,
        next: this.head
    }
    this.head = newNode;
}
var list = new LinkedList();

list.prepend(15);
console.log(list.prepend(16));

console.log(list);
