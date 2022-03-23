package daleproj2;
import java.util.*;
public class driver {
   public static void main(String[] args) {
    
    int row = 0;
    
    int col = 0;

    try (Scanner scan = new Scanner(System.in)) {
        
        System.out.println("Enter Starting Node (row column) : ");
        row = scan.nextInt();
        col = scan.nextInt();
    
        Node startNode = new Node(row, col);
            System.out.println("Enter Goal Node (row column) : ");
    
            row = scan.nextInt();
            col = scan.nextInt();
    
        Node endNode = new Node(row, col);
    
        int rows = 15;
        
        int cols = 15;
    
        path newPath = new path(rows, cols, startNode, endNode);
    
        int[][] randBlocks = new int[][]{{(int) (Math.random()*10), (int) (Math.random()*10)}, 
        {(int) (Math.random()*10), (int) (Math.random()*10)}, {(int) (Math.random()*10), (int) (Math.random()*10)}, 
        {(int) (Math.random()*10), (int) (Math.random()*10)}, {(int) (Math.random()*10), (int) (Math.random()*10)}, 
        {(int) (Math.random()*10), (int) (Math.random()*10)}}; //creates random blocks in 15x15 board
    
        row = 0;
    
        col = 0;
    
    System.out.println("Board with Blocks\n"); 
    
    for(int x=0; x<rows; x++) {  
        for (int y=0; y<cols; y++) {
            int block = 0;
            for (int z = 0; z < randBlocks.length; z++) {
                row = randBlocks[z][0];
                col = randBlocks[z][1];
    
                if(row==x && col==y) {
            
                    System.out.print("X"+" ");
                block=1;
        }
    }
           if(block==0)
           
           System.out.print("-"+" ");
    
       }
       System.out.println("\n");
    }
    System.out.println("The Optimal path is: ");
    
    newPath.setBlocks(randBlocks);
   
    List<Node> optimalPath = newPath.findPath();
   
    for (Node node : optimalPath) {
   
        System.out.print("["+node.getRow()+","+node.getCol()+"] ");
            }   
        }
    }
}