



1. 👀 **Different Input and Output Cases**
2. 🔍 **How the Code Works: Line-by-Line Workflow**
3. 🧠 **Why We Used Specific Structures and Logic**

---

## 👀 1. Input and Output Examples

### Case A: Simple subtraction

**Input:** `"2-1-1"`  
**Output:** `[0, 2]`

- `(2 - (1 - 1)) = 2`
- `((2 - 1) - 1) = 0`

### Case B: Using multiplication

**Input:** `"2*3-4*5"`  
**Output:** `[-34, -14, -10, -10, 10]`

- Multiple ways to parenthesize lead to varied results.

### Case C: Single number

**Input:** `"8"`  
**Output:** `[8]`

- No operators = just return the number.

### Case D: Mixed digits

**Input:** `"10-5+2"`  
**Output:** `[7, 3]`

- `(10 - (5 + 2)) = 3`
- `((10 - 5) + 2) = 7`


---

## 🔍 2. Workflow & Logic Breakdown

We’re using a **class-based structure** with **manual memoization**, written in basic C++ — no vectors, maps, or STL.

### Main parts:

#### 🔹 `ExpressionSolver` class

- Holds:
    - `savedExpr[]` – previously solved expressions
    - `storedResults[][]` – actual results for each expression
    - `resultSizes[]` – how many results each expression has
    - `entryCount` – how many cached entries we have

#### 🔹 `evaluate(string expr, int output[], int &count)`

This method:

1. **Checks cache**  
    If we've already solved this expression before, return cached results instantly.
    
2. **Scans the expression**  
    Loops through each character to find operators.
    
3. **Splits expression at every operator**  
    For each operator:
    
    - Calls `evaluate()` recursively on the left and right halves
4. **Combines sub-results**  
    For every pair of left and right results:
    
    - Apply operator (`+`, `-`, `*`)
    - Store the result in `output[]`
5. **Base Case: no operator found**  
    If the expression is just a number:
    
    - Convert string digits to integer manually
    - Store it in `output[]`
6. **Cache it for future reuse**  
    Saves the `expr`, its results, and size for optimization.
    

---

## 🧠 3. Why We Used This Approach

|Element|Reason|
|---|---|
|**Class**|Keeps logic modular, reusable, and easy to maintain|
|**Manual Cache**|Boosts performance by avoiding repeated computation of the same inputs|
|**Arrays**|Keeps code simple, avoids STL — perfect for constrained environments|
|**Divide & Conquer**|Natural fit for recursive parenthesization problems|
|**No push_back / vector**|Because you wanted pure C++ syntax, no advanced containers|

#include<iostream>
#include<string>
using namespace std;

class ExpressionSolver {
private:
    string savedExpr[50];
    int storedResults[50][10];
    int resultSizes[50];
    int entryCount = 0;

public:
    void evaluate(string expr, int output[], int &count) {
        // Check if this expression has been processed before
        for (int i = 0; i < entryCount; i++) {
            if (savedExpr[i] == expr) {
                count = resultSizes[i];
                for (int j = 0; j < count; j++) {
                    output[j] = storedResults[i][j];
                }
                return;
            }
        }

        count = 0;

        for (int i = 0; i < expr.length(); i++) {
            char op = expr[i];
            if (op == '+' || op == '-' || op == '*') {
                string left = expr.substr(0, i);
                string right = expr.substr(i + 1);

                int leftVals[10], rightVals[10];
                int leftCount = 0, rightCount = 0;

                evaluate(left, leftVals, leftCount);
                evaluate(right, rightVals, rightCount);

                for (int x = 0; x < leftCount; x++) {
                    for (int y = 0; y < rightCount; y++) {
                        int val = 0;
                        if (op == '+') val = leftVals[x] + rightVals[y];
                        if (op == '-') val = leftVals[x] - rightVals[y];
                        if (op == '*') val = leftVals[x] * rightVals[y];
                        output[count++] = val;
                    }
                }
            }
        }
		
		        // If it's a pure number with no operators
		        if (count == 0) {
		            int number = 0;
		            for (int i = 0; i < expr.length(); i++) {
		                number = number * 10 + (expr[i] - '0');
		            }
		            output[count++] = number;
		        }
		
		        // Save results for future lookup
		        savedExpr[entryCount] = expr;
		        resultSizes[entryCount] = count;
		        for (int j = 0; j < count; j++) {
		            storedResults[entryCount][j] = output[j];
		        }
		        entryCount++;
		    }
		};
		
		int main() {
		    string input;
		    cout << "Enter expression: ";
		    cin >> input;
		
		    ExpressionSolver solver;
		    int finalResult[20];
		    int total = 0;
		
		    solver.evaluate(input, finalResult, total);
		
		    cout << "Results: [";
		    for (int i = 0; i < total; i++) {
		        cout << finalResult[i];
		        if (i < total - 1) cout << ", ";
		    }
		    cout << "]" << endl;
		
		    return 0;
		}
