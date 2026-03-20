   
    let date=new Date().getUTCHours();
    let timediff=new Date().getTimezoneOffset()/60;
    let consideredtime=(date - timediff + 24)%24;

    if(consideredtime<12){
        document.getElementById("welcome").innerText="Bonjour et Bienvenu sur mon Portfolio, Je suis DAKOUDA OROU SEKO Bamidélé Adébola Jean-Marie Claret"
    }
    else {
        document.getElementById("welcome").innerText="Bonsoir et Bienvenu sur mon Portfolio,Je suis DAKOUDA OROU SEKO Bamidélé Adébola Jean-Marie Claret"
    }
   document.getElementById("welcome").classList.add("show");

 function sendmsg(){
    let mailInput=document.getElementById("email").value;
    let msg=document.getElementById("contact").value;
    if((msg==="" || msg==null) || (mailInput==="" || mailInput==null)){
        alert("Tous les champs sont obligatoires")
    }
    else if (!mailInput.includes("@gmail.com")) {
        alert("Entrez une adresse E-mail valide")
    }
 }
 
 let dark=document.getElementById("darkmode");
 dark.addEventListener("click",()=>{document.body.classList.toggle("dark-mode");});

 let back=document.getElementById("backtop")
 back.addEventListener('click',()=>{window.scroll(0,0)})

 let hamburger=document.querySelector('.hamburger');
 let menu=document.querySelector('.menu');
 hamburger.addEventListener('click',()=>{hamburger.classList.toggle('active');menu.classList.toggle('active')});