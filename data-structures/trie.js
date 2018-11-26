/* Trie Data Structure */
// Type of tree used to store associative  data structures, storing data in steps
// Possible use case: Verify that certain words are in the dictionary
let Node = function () {
  this.keys = new Map();
  this.end = false; // is this the end letter in a word? (for example d would be the end letter in the word end so it would be set to true)
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};

let Trie = function () {

  this.root = new Node();

  this.add = function (input, node = this.root) {
    if (input.length == 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) { // check if there is already a node that starts with the first letter of the word we are trying to insert, if not insert it
      node.keys.set(input[0], new Node()); 
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0])); // if we already have a word that begins with the letter, we just search for that word and input the workds
    };
  };

  this.isWord = function (word) {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) { //check the first character in the worled
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1); // the word minus the first character
      };
    };
    return (node.keys.has(word) && node.keys.get(word).isEnd()) ?
      true : false;
  };

  this.print = function () {
    let words = new Array();
    let search = function (node, string) {
      if (node.keys.size != 0) {
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), string.concat(letter));
        };
        if (node.isEnd()) {
          words.push(string);
        };
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      };
    };
    search(this.root, new String());
    return words.length > 0 ? words : mo;
  };

};

myTrie = new Trie()
myTrie.add('ball');
myTrie.add('bat');
myTrie.add('doll');
myTrie.add('dork');
myTrie.add('do');
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
console.log(myTrie.isWord('doll'))
console.log(myTrie.isWord('dor'))
console.log(myTrie.isWord('dorf'))
console.log(myTrie.print())
