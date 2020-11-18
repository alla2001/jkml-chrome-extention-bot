
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
        setTimeout(() => { }, 5000);
        boom = iframe[0].contentWindow.document.querySelector(".selfTurn");
        input = boom.querySelector(".styled");
        player = iframe[0].contentWindow.document.querySelector(".player");
        letters = iframe[0].contentWindow.document.querySelector(".syllable");
        let data = await fetch('https://api.datamuse.com/words?sp=*' + letters.innerHTML + '*');
        var words = await data.json();
        min = Math.ceil(0);
        max = Math.floor(words.length);
        input.value = words[i].word;
        boom.querySelector("form").dispatchEvent(e);
        
        if(player.innerHTML==request)
        { 
            i++;
            request1(i);
        }



    }


    if (request == "check") {


        boom.querySelector("form").dispatchEvent(e);

    }
    else {






        


        var config = { childList: true };
        var observer = new MutationObserver(() => {
            if (player.innerHTML == request) 
            {



                 
                request1(i);


                




            }
            i = 0;
        });


        observer.observe(player, config);









    }

})


