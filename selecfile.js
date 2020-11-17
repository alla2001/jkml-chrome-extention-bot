document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('select').addEventListener('click', onclick1, false)
    function onclick1() {
        
       
        var evt = document.createEvent('submit');
        !document.getElementById("myForm").dispatchEvent(evt);


        
       


    }
}, false)