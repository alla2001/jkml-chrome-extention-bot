var running = false;
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('button').addEventListener('click', onclick, false)
    function onclick() {
        
        if (running == false) {
            var player = document.getElementById("name");

            chrome.tabs.query({ currentWindow: true, active: true },
                function (tabs) {

                    chrome.tabs.sendMessage(tabs[0].id, player.value)
                })
            document.querySelector('button').style.backgroundColor = "red";
            document.querySelector('button').innerHTML = "Stop";
            running = true;




        }
        else {
            chrome.tabs.query({ currentWindow: true, active: true },
                function (tabs) {

                    chrome.tabs.sendMessage(tabs[0].id, "off")
                })
            document.querySelector('button').style.backgroundColor = "cadetblue";
            document.querySelector('button').innerHTML = "Start";
            running = false;

        }


    }
}, false)