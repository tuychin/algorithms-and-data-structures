class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(value) {
    this.nodes.push({
      value: value,
      lines: []
    });
  }

  searchNode(value) {
    return this.nodes.find(function(node) {
      return node.value === value;
    });
  }

  addLine(startValue, endValue) {
    const startNode = this.searchNode(startValue);
    const endNode = this.searchNode(endValue);

    if (!startNode || !endNode) {
      throw new Error('Both vertex must be exist!');
    }

    startNode.lines.push(endNode);
  }

}

const graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addLine(1, 2);
const two = graph.searchNode(1).lines[0];

console.log(graph);
console.log(two);
console.log(graph);




/*removeNode(value) {
  const index = this.nodes.indexOf(this.searchNode(value));

  if (index > -1) {
    this.nodes.splice(index, 1);
    return value;
  }

  return new Error('Value not found!')
}*/