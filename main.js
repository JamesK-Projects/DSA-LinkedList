const LinkedList = require('./LinkedList')


// #2 Create a singly linked list
let SLL = new LinkedList;
function main(){
    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida')
    SLL.remove('Husker')
    SLL.insertBefore('Boomer', 'Athena')
    SLL.insertAfter('Helo', 'Hotdog')
    SLL.insertAt('Kat', 3)
    SLL.remove('Tauhida')
    return SLL;
};

main();

// ['Apollo','Athena','Kat','Boomer','Helo','Hotdog','Starbuck']


// #3 Supplemental functions for a linked list

// displays values in linked list
function display(list){
    let listItems = []
    let currNode = list.head;
    while(currNode !== null){
        listItems.push(currNode.value);
        currNode = currNode.next;
    }
    return listItems;
}

console.log(display(SLL))

// returns the size of the linked list
function size(list){
    let listSize = 0;
    let currNode = list.head;
    if(list.head == null){
        listSize = 0;
    }
    else{
        while(currNode !== null){
            listSize ++;
            currNode = currNode.next;
        }
    }
    return listSize;
}

// returns true if linked list is empty
function isEmpty(list){
    if(list.head == null){
        return true;
    }
    else return false;
}

// finds the node before the item you're looking for
function findPrevious(item, list){
    let currNode = list.head
    if(list.head == null){
        return 'List is empty';
    }
    if(list.head.next == null){
        return 'List only contains one item'
    }
    if(list.head.value === item){
        return `${item} is the first item of the list`
    }
    else {
        while(currNode.next.value !== item){
            currNode = currNode.next
        }
        return currNode.value;
    }

}


// returns the last node in the linked list
function findLast(list){
    let currNode = list.head;
    if(list.head == null){
        return 'List is empty'
    }
    else{
        while(currNode.next !== null){
            currNode = currNode.next
        }
        return currNode.value;
    }
}
//console.log(findLast(SLL))


// #4 Mystery Program
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
// program checks to see if next node is a duplicate of the current node. If so, it skips it
// O(n^2) because there are two levels of nested loops


// #5 Reverse a list
function reverse(list){
    let previous = null;
    let current = list.head;
    let next = null;

    while(current !== null){
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous
}

//console.log(reverse(SLL))


// #6 3rd from the end
function thirdFromEnd(list){
    if(list.head == null){
        return 'List is empty'
    }
    else if(list.head.next == null){
        return 'List only has one item'
    }
    else if(list.head.next.next == null){
        return 'List only has two items'
    }
    else{
        let currNode = list.head;
        while(currNode.next.next.next !== null){
            currNode = currNode.next
        }
        return currNode.value;
    }

}

//console.log(thirdFromEnd(SLL))


// #7 Middle of list
function middle(list){
    if(list.head == null){
        return 'List is empty'
    }
    if(list.head.next == null){
        return list.head.value;
    }
    else {
        let counter = 0;
        let values = [];
        let currNode = list.head;
        while(currNode !== null){
            values.push(currNode.value);
            counter ++;
            currNode = currNode.next;
        }
        let middle = Math.floor(counter/2)
        return values[middle]
    }
}

//console.log(middle(SLL))


// #8 Cycle in a list


// #9 Sorting a list
function sort(list){
    let current = list.head;
    let index = null;
    let temp = null;

    if(list.head == null){
        return 'List is empty'
    }
    while(current !== null){
        index = current.next;

        while(index !== null){
            if(current.value > index.value){
                temp = current.value;
                current.value = index.value;
                index.value = temp;
            }
            index = index.next
        }
        current = current.next

    }
    return list
}
