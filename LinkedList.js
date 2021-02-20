const _Node = require('./_Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item){
        this.head = new _Node(item, this.head);
    }

    insertLast(item){
        if(this.head == null){
            this.insertFirst(item)
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null){
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(item, null)
        }
    }

    find(item){
        let currNode = this.head;
        if(!this.head){
            return null;
        }
        while(currNode.value !== item){
            if(currNode.next === null){
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    remove(item){
        if(!this.head){
            return null;
        }
        if(this.head.value === item){
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;
        while((currNode !== null) && (currNode.value !== item)){
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null){
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
    
    main(){
        this.head = new LinkedList(SLL, this.head);
        this.insertFirst(Apollo);
        this.insertLast(Boomer);
        this.insertLast(Helo);
        this.insertLast(Husker);
        this.insertLast(Starbuck)
    }

}

module.exports = LinkedList;