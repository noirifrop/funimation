// this is the code which will be injected into a given page...

(function() {
	// document.body.appendChild(div);

  document.addEventListener("keydown",(event)=>{
    let activated = true;
    var p = event.view.document.getElementById("brightcove-player_html5_api");
    switch(event.code){            
      case "ArrowRight":{
        p.currentTime = p.currentTime + 5;
        break;
      }
      case "ArrowLeft":{
        p.currentTime = p.currentTime - 5;
        break;
      }            
      default:{
        activated = false;
      }
    }
    if(activated){
      event.preventDefault();
    }
  });
    
})();