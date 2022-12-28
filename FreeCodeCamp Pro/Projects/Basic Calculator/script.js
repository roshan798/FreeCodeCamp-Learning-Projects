let string = "";
let buttons = document.querySelectorAll(".button");
let pre = "";
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    
    if (pre == "=") {
      string = "";
      pre = "";
    }
    if (e.target.innerHTML == "=") {
      try {
        string = "Ans = " + eval(string);
      } catch (error) {
        alert("wrong input");
        string = "";
      }
      pre = "=";
    } else if (e.target.innerHTML == "C") {
      string = "";
    }else if(e.target.innerHTML==='<i class="fa-solid fa-delete-left"></i>') {
     string  =  string.substring(0, string.length-1);
      console.log(e.target.innerHTML);
    } 
    else {
      string += e.target.innerHTML;
    }
    document.querySelector("input").value = string;
  });
});
