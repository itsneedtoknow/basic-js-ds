const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, element) {
  throw new NotImplementedError('Not implemented');

                // начинаем проход по списку
  function indexOf(element){
    let current = this.head;
    let i = 0;
                // получаем позицию элемента, который равен элементы
    while(current){
      
      let position;
    
      if (current.value === element){

        position = i;
        // return position;
        if(position === 0){
          this.head = current.next;
        }else{ // 1, 2, 3, 4, 5] and k = 3
          let prev = null;
          let i = 0;

          while(i < position){
            prev = current;
            current = current.next;
            i++;
          }
          prev.next = current.next;
        }       
        
        this.length--;
        return current.value;

        // return i;
      } else{
        current = current.next;
        i++;
      }
      return current.value;
      return -1;
    }
  }


  
  }

module.exports = {
  removeKFromList
};
