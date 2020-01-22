window.onload = function() {
    var botao = document.querySelector("#show_menu");
    var containerlink = document.querySelectorAll(".container_menu_top");
    var elemgoto = document.querySelectorAll("[goto]");

    for (var i = 0; i < elemgoto.length; i++) {
        elemgoto[i].onclick = function() {
            var el = this.getAttribute("goto"); //Enter the element's CSS selector;

            var menu = ".menu"; //If exists, enter the Top fixed menu's CSS selector; 
            //else, enter "body";

            var duration = 1; //Enter the Total travel time (s);

            var frequency = 100; //Enter the frequency (movements per second);
            //higher value = best fluidity and more processing;
            //lower value = worse fluidity and less processing;

            scrollto(el, duration, frequency, menu);
        }
    }

    window.onresize = function() {
        for (var i = 0; i < containerlink.length; i++) {
            containerlink[i].removeAttribute('style');
        }
    }
    window.onscroll = function() {
        for (var i = 0; i < containerlink.length; i++) {
            containerlink[i].removeAttribute('style');
        }
    }
    botao.onclick = function() {
        slideToggle(containerlink, 2);
    }
}