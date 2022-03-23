package daleproj2;
public class Node {
	
	private int row, col, f, g, h;
	private boolean blocky;
	private Node parent;
   
	public Node(int row, int col) {
		super();
		this.row = row;
		this.col = col;
		}
	  //mutator methods to set values
	  public void setF(int f) {
		f = g + h;
		}	
	 
		public void setG(int g) {
		this.g = g;
		}
		
		public void setH(int h) {
			this.h = h;
			}
		 
		public void setParent(Node parent) {
		this.parent = parent;
		}
		 
		public void setBlock(boolean blocky) {
		this.blocky = blocky;
		}
	
		public void setRow(int row) {
		this.row = row;
		}

		public void setCol(int col) {
		this.col = col;		
		}
	
		public void setNodeData(Node currNode, int value) {
			int gVal = currNode.getG() + value;
			setParent(currNode);
			setG(gVal);
			endVal();
			}
		
			//accessor methods to get values 
		public int getH() {
			return h;
		}
		
		public int getG() {
			return g;
		}

		public int getF() {
			return f;
		}
	 
		public Node getParent() {
		
			return parent;
		}
		public boolean blocky() {
		
			return blocky;
		}
	 
		public int getRow() {
		
			return row;
		}
		public int getCol() {
		
			return col;
		}
	 
		public void heuristic(Node endNode) {
			this.h = Math.abs(endNode.getRow() - getRow()) + Math.abs(endNode.getCol() - getCol());
			}
		 
			public boolean quickPath(Node currNode, int value) {
			
				int gVal = currNode.getG() + value;
			
				if (gVal < getG()) {
			
					setNodeData(currNode, value);
			
					return true;
			}
			
			return false;
			
		}
		 
			private void endVal() {
			int endVal = getG() + getH();
			
			setF(endVal);
			
		}
		 
			@Override
			public boolean equals(Object in) {
			Node n = (Node) in;
			return row == n.getRow() && col == n.getCol();
			}
		 
			@Override
			public String toString() {
			return "Node [row=" + row + ", col=" + col + "]";
			}
	 }