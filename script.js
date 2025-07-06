let btns=document.querySelectorAll(".btns");
      document.querySelector(".ans").addEventListener("click",()=>{
           let exp=document.querySelector(".input").value;
           document.querySelector(".input").value=eval(exp);
    })

      btns.forEach((btn) => {
        btn.addEventListener("click",()=>{
          document.querySelector(".input").value+=btn.innerHTML;
        })
    })
    document.querySelector(".clear").addEventListener("click",()=>{
        document.querySelector(".input").value="";
    })
    document.querySelector(".backspace").addEventListener("click",()=>{
        let s=document.querySelector(".input").value;
        document.querySelector(".input").value=s.substr(0,s.length-1);
    })