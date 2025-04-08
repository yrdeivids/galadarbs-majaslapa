function drawChristmasTree(height) {
    for (let i = 1; i <= height; i++) {
      let spaces = ' '.repeat(height - i); // create the leading spaces
      let stars = '*'.repeat(2 * i - 1); // create the stars
      console.log(spaces + stars); // print the tree row
    }
    
    // Draw the trunk of the tree
    let trunkWidth = Math.floor(height / 3);
    let trunkHeight = Math.floor(height / 4);
    let trunkSpaces = ' '.repeat(Math.floor(height / 2) - Math.floor(trunkWidth / 2));
    for (let i = 0; i < trunkHeight; i++) {
      console.log(trunkSpaces + '|'.repeat(trunkWidth)); // print the trunk
    }
  }
  
  // Example: draw a tree of height 7
  drawChristmasTree(15);