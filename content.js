
chrome.runtime.onMessage.addListener(function (request, message) {
   
    var iframe = document.getElementsByTagName("iframe");
    var boom = iframe[0].contentWindow.document.querySelector(".selfTurn");
    var input = boom.querySelector(".styled");
    var player = iframe[0].contentWindow.document.querySelector(".player");
    var letters=iframe[0].contentWindow.document.querySelector(".syllable");
    
    async function request1(letters,i) {
        let data = await fetch('https://api.datamuse.com/words?sp=*'+letters+'*');
        var words = await data.json();
        input.value=words[i].word;
        
       
        
        
    }
    

    if (request == "check") {

        
        var evt = document.createEvent('submit');
        !document.getElementById("myForm").dispatchEvent(evt);
    }
    else {

        
      

        

         var i=0;

        
        var config = { childList: true };
        var observer = new MutationObserver(() => {
            if(player.innerHTML == request) {
                
                 boom = iframe[0].contentWindow.document.querySelector(".selfTurn");
                 input = boom.querySelector(".styled");
                 player = iframe[0].contentWindow.document.querySelector(".player");
                 letters=iframe[0].contentWindow.document.querySelector(".syllable");
                

                request1(letters.innerHTML,0);
               
                
                i++;




            }
            i=0;
        });

        
        observer.observe(player, config);




       




    }

})


