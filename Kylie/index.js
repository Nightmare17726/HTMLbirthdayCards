var Element = {
    removeEl: function() {
        var element = document.getElementById('bodyBtn');
        element.parentNode.removeChild(element);
    },
    fakeDeath: function() {
        document.getElementById('bodyBtn').insertAdjacentHTML('beforebegin', "<img src='Oregon-Trail2.jpg' alt='Funny Oregon-Trail modified image' id='trail2'>");
        document.getElementById('bodyBtn').insertAdjacentHTML('beforebegin', "<div class='wrapper clearfix'> <div class='main_box homepage'> <p> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Happy Birthday, Kylie! <br> <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspTry not to die this semester, you got this! <br> <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp--Chase</p> </div> </div>");
        Element.removeEl();
    }

}