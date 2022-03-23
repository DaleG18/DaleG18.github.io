package daleproj2;
import java.util.*;

public class path {
    
    private static int beginHvVal = 10; 

    private static int beginDiaVal = 14;

    private int hvVal, diaVal;

    private Node startNode, endNode;

    private Node[][] finder;

    private Set<Node> endSet;

    private PriorityQueue<Node> newList;

    public path(int rows, int cols, Node startNode, Node endNode, int hvVal, int diagonalVal) {

    this.hvVal = hvVal;

    this.diaVal= diagonalVal;

    setStartNode(startNode);

    setEndNode(endNode);

    this.finder = new Node[rows][cols];

    this.newList = new PriorityQueue<Node>(new Comparator<Node>() {

@Override

    public int compare(Node node0, Node node1) {

    return Integer.compare(node0.getF(), node1.getF());

    }

    });

    setNodes();

    this.endSet = new HashSet<>();

    }

    public path(int rows, int cols, Node startNode, Node endNode) {

    this(rows, cols, startNode, endNode, beginHvVal, beginDiaVal);

    }

    private void setNodes() {

    for (int x = 0; x < finder.length; x++) {

    for (int y = 0; y < finder[0].length; y++) {

    Node node = new Node(x, y);

    node.heuristic(getEndNode());

    this.finder[x][y] = node;

        }

    }

}

    public void setBlocks(int[][] randBlocks) {

        for (int x = 0; x < randBlocks.length; x++) {

            int row = randBlocks[x][0];

            int col = randBlocks[x][1];

            setBlock(row, col);

        }

    }

    public List<Node> findPath() {

        newList.add(startNode);

        while (!isEmpty(newList)) {

        Node currNode = newList.poll();

        endSet.add(currNode);

        if (isEndNode(currNode)) {

            return getPath(currNode);

            } 
            
            else {

                newNodes(currNode);

            }

        }

    return new ArrayList<Node>();

    }

    private List<Node> getPath(Node currNode) {

List<Node> path = new ArrayList<Node>();

    path.add(currNode);

    Node parent;

    while ((parent = currNode.getParent()) != null) {

    path.add(0, parent);

    currNode = parent;

}

return path;

}

private void newNodes(Node currNode) {

    newUpRow(currNode);

    newMidRow(currNode);

    newLowRow(currNode);

}

private void newUpRow(Node currNode) {

    int row = currNode.getRow();
    
    int col = currNode.getCol();
    
    int upRow = row - 1;
    
    if (upRow >= 0) {
    
    if (col - 1 >= 0) {
    
    checkNode(currNode, col - 1, upRow, getDiaVal()); 
    
    }
    
    if (col + 1 < getFinder()[0].length) {
    
    checkNode(currNode, col + 1, upRow, getDiaVal()); 
    
    }
    
    checkNode(currNode, col, upRow, getHvVal());
    
    }
    
    }

private void newMidRow(Node currNode) {

    int row = currNode.getRow();

    int col = currNode.getCol();

    int midRow = row;

    if (col - 1 >= 0) {

    checkNode(currNode, col - 1, midRow, getHvVal());

}

if (col + 1 < getFinder()[0].length) {

    checkNode(currNode, col + 1, midRow, getHvVal());

    }

}

private void newLowRow(Node currNode) {

    int row = currNode.getRow();
    
    int col = currNode.getCol();
    
    int lowRow = row + 1;
    
    if (lowRow < getFinder().length) {
    
    if (col - 1 >= 0) {
    
    checkNode(currNode, col - 1, lowRow, getDiaVal()); 
    
    }
    
    if (col + 1 < getFinder()[0].length) {
    
    checkNode(currNode, col + 1, lowRow, getDiaVal());
    
    }
    
    checkNode(currNode, col, lowRow, getHvVal());
    
    }
    
    }
    
private void checkNode(Node currNode, int col, int row, int value) {

    Node nextNode = getFinder()[row][col];

    if (!nextNode.blocky() && !getEndSet().contains(nextNode)) {

    if (!getNewList().contains(nextNode)) {

    nextNode.setNodeData(currNode, value);

    getNewList().add(nextNode);

} 
    else {


        boolean changed = nextNode.quickPath(currNode, value);


        if (changed) {


            getNewList().remove(nextNode);


            getNewList().add(nextNode);

        }

    }

    }

}

private boolean isEndNode(Node currNode) {

    return currNode.equals(endNode);

}

private boolean isEmpty(PriorityQueue<Node> newList) {

    return newList.size() == 0;

}
// Setters 
private void setBlock(int row, int col) {

    this.finder[row][col].setBlock(true);

}
public void setStartNode(Node startNode) {

    this.startNode = startNode;
    
    }
    
public void setEndNode(Node endNode) {

    this.endNode = endNode;
    
    }

public void setFinder(Node[][] finder) {

    this.finder = finder;
        
        }

public void setNewList(PriorityQueue<Node> newList) {

    this.newList = newList;
            
        }
    //Getters
public Set<Node> getEndSet() {
            
    return endSet;
            
        }
            
public void setEndSet(Set<Node> endSet) {
            
    this.endSet = endSet;
            
        }
            
public Node getStartNode() {

    return startNode;

    }

public Node getEndNode() {

    return endNode;

}


public Node[][] getFinder() {

    return finder;

}

public PriorityQueue<Node> getNewList() {

    return newList;

}

public int getHvVal() {

    return hvVal;

}

public void setHvVal(int hvVal) {

    this.hvVal = hvVal;

}

private int getDiaVal() {

return diaVal;

}

private void setDiagonalVal(int diaVal) {

this.diaVal = diaVal;

}

}

