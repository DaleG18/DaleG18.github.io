import java.util.*;

public class eightQueens {
  
    final private int [][] board = new int[8][8];
    
    final private int [][] boardTest = new int[8][8];
    
    private int h = 0;

    private int neighbors = 8;
    
    private int numQueens = 0;
    
    private int moveNum = 0;
    
    private boolean newBoard = true;
    
    private int restarts = 0;
  
  
    public eightQueens( ){      // this method allows for the board to be created
        for(int x = 0; x < 8; x++ ){
            for(int y = 0; y < 8; y++){
                board[x][y] = 0;
            }
        }
    }
  
  
    public void randomizeBoard( ){ //allows board to be random after every run
      
        Random rand = new Random( );
      
            while(numQueens < 8){
                for(int x = 0; x < 8; x++){

                    board[rand.nextInt(7)][x] = 1;
                    numQueens++;
                }

            }
      h = heuristic(board);
    }
    public boolean conCol(int [][] test, int y){ //finds conflicts that can be found in row
        boolean finder = false;
            int count = 0;
             for(int x = 0; x < 8; x++){
                if(test[x][y] == 1){
                count++;
                }
            }
        if(count > 1){
          finder = true;
        }
        return finder;
    }

    public boolean conRow(int [][] test, int y){ //finds conflicts that can be found in row
        boolean finder = false;
            int count = 0;
      
                for(int x = 0; x < 8; x++){
                    if(test[x][y] == 1){
                        count++;
                }
        }
                if(count > 1){
                    finder = true;
                    }
                return finder;
            }
  
    public boolean otherCon(int [][] test, int y, int z){//finds conflicts that can be found diagnoly
        boolean finder = false;
      
        for(int x = 1; x < 8; x++){
            if(finder){
                break;
            }
            if((y + x < 8) && (z + x < 8)){
                if(test[y + x][z + x] == 1){
                    finder = true;
                }
            }
            if((y - x >= 0) && (z - x >= 0)){
                if(test[y - x][z - x] == 1){
                    finder = true;
                }
            }
            if((y + x < 8) && (z - x >= 0)){
                if(test[y + x][z - x] == 1){
                    finder = true;
                }
            }  
            if((y - x >= 0) && (z + x < 8)){
                if(test[y - x][z + x] == 1){
                    finder = true;
                }
            }  
        }
        return finder;
    }
  
    public int heuristic(int [][] test){ //finds the number of conflicting queens
    int count = 0;
    
    boolean con_Row;
    
    boolean con_Col;
    
    boolean other_Con;
      
        for(int x = 0; x < 8; x++){
            for(int y= 0; y < 8; y++){
                if(test[x][y] == 1){
                    con_Row = conRow(test, y);
                    con_Col = conCol(test, x);
                    other_Con = otherCon(test, x, y);
                  
                    if(con_Row || con_Col || other_Con){
                        count++;
                    }
                }
            }
        }
        return count;
    }
    public void move( ){ //determines when its necessary to move the queen
        int[][] hArray = new int[8][8];
        
        int colNum;
        
        int minCol;
        
        int minRow;
        
        int prevQueen = 0;
        
        newBoard = false;
      
        while(true){
            colNum = 0;
      
            for(int x = 0; x < 8; x++){
                System.arraycopy(board[x], 0, boardTest[x], 0, 8);
            }
            while(colNum < 8){
                
                for(int x = 0; x < 8; x++){
                    boardTest[x][colNum] = 0;
                }
                for(int x = 0; x < 8; x++){
                    if(board[x][colNum] == 1){
                        prevQueen = x;
                    }
                    boardTest[x][colNum] = 1;
                    
                    hArray[x][colNum] = heuristic(boardTest);
                    
                    boardTest[x][colNum] = 0;
                }
                boardTest[prevQueen][colNum] = 1;
                
                colNum++;
            }
          
            if(reqRestart(hArray)){
                numQueens = 0;
                
                for(int x = 0; x < 8; x++){
                    
                    for(int y = 0; y < 8; y++){
                        board[x][y] = 0;
                    }
                }
                randomizeBoard( );
                
                System.out.println("RESTART");
                
                restarts++;
            }
      
            minCol = colFinder(hArray);
            
            minRow = rowFinder(hArray);
      
            for(int x = 0; x < 8; x++){
                board[x][minCol] = 0;
            }
      
            board[minRow][minCol] = 1;
           
            moveNum++;
           
            h = heuristic(board);
          
            if(heuristic(board) == 0){
                System.out.println("\nCurrent State"); //prints current state
                for(int x = 0; x < 8; x++){
                    for(int y = 0; y < 8; y++){
                        System.out.print(board[x][y] + " ");
                    }
                    System.out.print("\n");
                }
            System.out.println("Solution Found!"); // print statement for end
            
            System.out.println("State changes: " + moveNum); // num of state changes
            
            System.out.println("Restarts: " + restarts); // num of restarts
            
            break;
            }

            System.out.println("\n");
            
            System.out.println("Current h: " + h); // prints current heuristic
            
            System.out.println("Current State"); // prints current state
            
            for(int x = 0; x < 8; x++){
                for(int y = 0; y < 8; y++){
                    System.out.print(board[x][y] + " ");
                }
                System.out.print("\n");
            }
            System.out.println("Neighbors found with lower h: " + neighbors); // prints num of neighbors
            
            System.out.println("Setting new current State"); // prints behhing of new run
        }
    }
    public int colFinder(int[][] test){ //this method finds the row of min neighbor states
        int minCol = 8;
        
        int minVal = 8;
        
        int count = 0;
      
        for(int x = 0; x < 8; x++){
          for(int y = 0; y < 8; y++){
              
            if(test[x][y] < minVal){
                  
                minVal = test[x][y];
                 
                  minCol = y;
              }
              if(test[x][y] < h){
                  
                count++;
              }
          }
        }
        neighbors = count;
        
        return minCol;
    }
    public int rowFinder(int[][] test){ //this method finds the row of min neighbor states
        int minRow = 8;
        int minVal = 8;
      
        for(int x = 0; x < 8; x++){
          for(int y = 0; y < 8; y++){
              if(test[x][y] < minVal){
                  
                minVal = test[x][y];
                
                minRow = x;
              }
          }
        }
        return minRow;
    }
    public boolean reqRestart(int [][] test){// finds when a restart is required
        int minVal = 8;
        
        boolean restart = false;
      
        for(int x = 0; x < 8; x++){
            for(int y = 0; y < 8; y++){
                
                if(test[x][y] < minVal){
                    minVal = test[x][y];
                }
            }
        }
        if(neighbors == 0){
            restart = true;
        }
        return restart;
        
    }
    public static void main(String[] args) { // intitiates eightQueens obj, randomBoard, and whether to move queen
        
        eightQueens var = new eightQueens( );
        
        var.randomizeBoard();
        
        var.move();
       }
}