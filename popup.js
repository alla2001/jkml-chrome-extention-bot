
localStorage.setItem('run', 'false');
document.addEventListener('DOMContentLoaded', function () {

    var running = localStorage.getItem('run');
    alert(running);
    if (running == "true") {
        document.querySelector('button').style.backgroundColor = "red";
        document.querySelector('button').innerHTML = "Stop";
    } else {
        document.querySelector('button').style.backgroundColor = "cadetblue";
        document.querySelector('button').innerHTML = "Start";
    }
    document.getElementById('button').addEventListener('click', onclick, false)
    function onclick() {


        var running = localStorage.getItem('run');



        if (running == "false") {


            chrome.tabs.query({ currentWindow: true, active: true },
                function (tabs) {


                    chrome.tabs.sendMessage(tabs[0].id, "on")
                })
            document.querySelector('button').style.backgroundColor = "red";
            document.querySelector('button').innerHTML = "Stop";
            localStorage.setItem('run', 'true');




        }
        else {
            chrome.tabs.query({ currentWindow: true, active: true },
                function (tabs) {

                    chrome.tabs.sendMessage(tabs[0].id, "off")
                })
            document.querySelector('button').style.backgroundColor = "cadetblue";
            document.querySelector('button').innerHTML = "Start";

            localStorage.setItem('run', 'false');

        }


    }
}, false)