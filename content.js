
chrome.runtime.onMessage.addListener(function (request, message) {
    
    
    var i = 0;
    var iframe = document.getElementsByTagName("iframe");
    var boom = iframe[0].contentWindow.document.querySelector(".selfTurn");
    var input = boom.querySelector(".styled");
    var player = iframe[0].contentWindow.document.querySelector(".player");
    var letters = iframe[0].contentWindow.document.querySelector(".syllable");
    var e = document.createEvent('HTMLEvents');
    e.initEvent('submit', true, true);
    async function request1(i) { 
        
        boom = iframe[0].contentWindow.document.querySelector(".selfTurn");
        input = boom.querySelector(".styled");
        player = iframe[0].contentWindow.document.querySelector(".player");
        letters = iframe[0].contentWindow.document.querySelector(".syllable");
        let data = await fetch('https://api.datamuse.com/words?sp=*' + letters.innerHTML + '*');
        var words = await data.json();
        setTimeout(function() {
            


       
        input.value = words[i].word;
        boom.querySelector("form").dispatchEvent(e);

        if (player.innerHTML == JSON.parse( localStorage.getItem("jklmSettings")).nickname) {
            i++;
            setTimeout(function() {request1(i); }, 1000);
            
        }

    }, 1000);


    }


    if (request == "check") {


        boom.querySelector("form").dispatchEvent(e);

    }
    else {









        var config = { childList: true };
        var observer = new MutationObserver(() => {
            if (player.innerHTML == JSON.parse( localStorage.getItem("jklmSettings")).nickname) {




                request1(i);







            }
            i = 0;
        });


        observer.observe(player, config);









    }

})


