class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    add(node) {
        // do I have a next property?
        if (this.next === null) {
            this.next === node
        } else {
            this.next.add(node)
        }
        // no, node can be my next
        
        // yes, then ask next to add the node
  
    };

    getList() {

    }
}



class BinaryTreeNode {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  
    add(node) {
        
        if (this.data <= node.data) {
            this.left.add(node)

        } 
        else if (this.data >= node.data) {
          this.right.add(node)

        }
      // Implement me!
    }
  }

  class PersonTreeNode {
    constructor(person) {
      this.value = person.name;
      this.person = person;
      this.left = null;
      this.right = null;
    }
  
    add(node) {
     const direction = node.data < this.data ? 'left' : 'right'

     if(this[direction]) {
         this[direction].add(node)
     } else {
         this[direction] = node;
     }
    }
  
    findPerson(name) {
      if(this.value === name) {
          return this.person;
      }
      
      const direction = node.data < this.data ? 'left' : 'right'


      if(this[direction]) {
          return this[direction].findPerson(name);
      } else {
          return null;
      }
    }
  }

