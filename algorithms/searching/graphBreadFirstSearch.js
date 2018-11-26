/* Graphs: Breadth-first search */

function bfs(graph, root) {
  var nodesLen = {}; // store the distances to the root node

  for (var i = 0; i < graph.length; i++) { // start all the distances from infinity
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0; // distance of the root node from the root node (this is the exception)

  var queue = [root]; // simple queue to keep track of nodes to visit
  var current; // keep track of current node we are traversing 

  while (queue.length != 0) { // traverse nodes till there's no more nodes in the queue to traverse
    current = queue.shift();

    var curConnected = graph[current];
    var neighborIdx = [];
    var idx = curConnected.indexOf(1);
    while (idx != -1) {
      neighborIdx.push(idx);
      idx = curConnected.indexOf(1, idx + 1);
    }

    for (var j = 0; j < neighborIdx.length; j++) {
      if (nodesLen[neighborIdx[j]] == Infinity) {
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]);
      }
    }
  }
  return nodesLen;
};

var exampleGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];
console.log(bfs(exampleGraph, 1));
