function addDiv() {
    let newDiv = document.createElement('div');
    newDiv.className = 'block';
    newDiv.textContent = 'Hello World!';
    document.body.append(newDiv);
    }
    
 function noDiv() {
   let noDiv = document.querySelector('div');
   document.body.removeChild(noDiv);
 }

document.querySelector('.test-input').addEventListener('mouseover', addDiv);
document.querySelector('.test-input').addEventListener('mouseout', noDiv);
