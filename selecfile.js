document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('select').addEventListener('click', onclick1, false)
    function onclick1() {
        
       
        


        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {

                chrome.tabs.sendMessage(tabs[0].id, "check")
            })
       


    }
}, false)