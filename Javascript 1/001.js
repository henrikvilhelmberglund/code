function isOver10(num) {
    if (num > 10) {
      return `Yes, ${num} is more 10!`;
    } 
    else if(num === 10) {
        return true;
    }
    else {
      return `No ${num} is not more than 10`;
    }
  }
  
  console.log("output:", isOver10("10"));

  console.log("10" == 10);