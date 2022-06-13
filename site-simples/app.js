
  
    function abc(){
        document.body.classList.toggle('dark-theme');
   
   var className = document.body.className;
   if (className == "light-theme") {
       this.textContent = "Dark";
   }
   else {
       this.textContent = "Light";
   }
   }
   
   function test  (){ 
    const switcher = document.getElementById ("red")
       alert(switcher.value)
   }
   