function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }



  var inter;
  function interval() {
    inter = setInterval(typeWriter_developer, 100);

  }
  
  var i = 0;
  var txt = "#StopYulin";

  function typeWriter_developer() {
    if (i < txt.length) {
      document.getElementById("typer_tag").innerHTML += txt.charAt(i);
      i++;
    }
    if (i > txt.length) {
      i = 0;
      typeWriter_developer();
    }


  }