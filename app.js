var count = 0;  //initial count

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

console.log(btns);

btns.forEach(function(btn) {
   btn.addEventListener('click', function(e) {
       const styles = e.currentTarget.classList;
       if (styles.contains("decrease")) {
           count--;
       }
       else if (styles.contains("increase")) {
           count++;
       }
       else {
           count = 0;
       }
       if (count < 0) {
           value.style.color = "red";
       } 
       if(count > 0){
           value.style.color = "green";

       }
       if(count == 0){
           value.style.color = "black";
       }
       if(count >= 100) {
           value.style.color = "#aa8c2c";
       }
       if(count >= 1000) {
        value.style.color = "#E5E4E2";
    }
    
       value.textContent = count;
    });
});