function mincost(arr)
{ 
//write your code here
// return the min cost
	 let totalCost = 0;  // total cost of connecting ropes
    let step = 1;       // step counter to show progress

    // Repeat until only one rope remains
    while (arr.length > 1) {
        // Step 1: sort array ascending
        arr.sort((a, b) => a - b);

        // Step 2: take two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        // Step 3: calculate cost
        let cost = first + second;
        totalCost += cost;

        // Step 4: add new rope (their sum) back to array
        arr.push(cost);
	}
 // Return the final total cost
    return totalCost;
  
}

module.exports=mincost;
