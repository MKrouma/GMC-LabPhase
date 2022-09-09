// Night mode 
// Hello 
console.log('Hello world');
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
console.log(paragraphs[0].nodeName);


// 1. Night mode
function nightMode(event) {
    const target = event.currentTarget;
    const nightButton = document.getElementsByClassName('night-mode');
    console.log('The target is:', target);
  
    // const currentRow = target.parentNode.parentNode.parentNode.parentNode.parentNode;
    // console.log("The current row", currentRow)
    // const tableElement = currentRow.parentNode;
  
    // tableElement.removeChild(currentRow);
  
    // addMinusPlusListeners();
    // calculateAll();
  }

  nightMode()