var ourTeamText = document.getElementById('ourTeamText');

var typewriter = new Typewriter(ourTeamText, {
    loop: true
});

typewriter.typeString('اعضای تیم ها')
    .pauseFor(2500)
    .deleteAll()
    .start();


var skillFlag = true;

function myScrollFunction() {
    var myScrollTop = window.scrollY;
    if (myScrollTop >= 550 && skillFlag) {
        skillFlag=false
        
        var Html = document.getElementById("Html");
        var HtmlWidth = Html.style.width;
        var HtmlTimer = setInterval(HtmlFrame, 10)
        function HtmlFrame() {
            if (HtmlWidth >= 98) {
                clearInterval(HtmlTimer)
            } else {
                HtmlWidth++;
                Html.style.width = HtmlWidth + "%";
                document.getElementById("HtmlSpan").innerHTML = HtmlWidth  + "%";
            }
        }
        var css = document.getElementById("css");
        var cssWidth = css.style.width;
        var cssTimer = setInterval(cssFrame, 10)
        function cssFrame() {
            if (cssWidth >= 80) {
                clearInterval(cssTimer)
            } else {
                cssWidth++;
                css.style.width = cssWidth + "%";
                document.getElementById("cssSpan").innerHTML = cssWidth  + "%";
            }
        }

        var bootStrap = document.getElementById("bootStrap");
        var bootStrapWidth = bootStrap.style.width;
        var bootStrapTimer = setInterval(bootStrapFrame, 10)
        function bootStrapFrame() {
            if (bootStrapWidth >= 75) {
                clearInterval(bootStrapTimer)
            } else {
                bootStrapWidth++;
                bootStrap.style.width = bootStrapWidth + "%";
                document.getElementById("bootStrapSpan").innerHTML = bootStrapWidth  + "%";
            }
        }

        var jQuery = document.getElementById("jQuery");
        var jQueryWidth = jQuery.style.width;
        var jQueryTimer = setInterval(jQueryFrame, 10)
        function jQueryFrame() {
            if (jQueryWidth >= 60) {
                clearInterval(jQueryTimer)
            } else {
                jQueryWidth++;
                jQuery.style.width = jQueryWidth + "%";
                document.getElementById("jQuerySpan").innerHTML = jQueryWidth  + "%";
            }
        }

        var php = document.getElementById("php");
        var phpWidth = php.style.width;
        var phpTimer = setInterval(phpFrame, 10)
        function phpFrame() {
            if (phpWidth >= 50) {
                clearInterval(phpTimer)
            } else {
                phpWidth++;
                php.style.width = phpWidth + "%";
                document.getElementById("phpSpan").innerHTML = phpWidth  + "%";
            }
        }

        var laravel = document.getElementById("laravel");
        var laravelWidth = laravel.style.width;
        var laravelTimer = setInterval(laravelFrame, 10)
        function laravelFrame() {
            if (laravelWidth >= 20) {
                clearInterval(laravelTimer)
            } else {
                laravelWidth++;
                laravel.style.width = laravelWidth + "%";
                document.getElementById("laravelSpan").innerHTML = laravelWidth  + "%";
            }
        }

        var react = document.getElementById("react");
        var reactWidth = react.style.width;
        var reactTimer = setInterval(reactFrame, 10)
        function reactFrame() {
            if (reactWidth >= 50) {
                clearInterval(reactTimer)
            } else {
                reactWidth++;
                react.style.width = reactWidth + "%";
                document.getElementById("reactSpan").innerHTML = reactWidth  + "%";
            }
        }

        var vue = document.getElementById("vue");
        var vueWidth = vue.style.width;
        var vueTimer = setInterval(vueFrame, 10)
        function vueFrame() {
            if (vueWidth >= 12) {
                clearInterval(vueTimer)
            } else {
                vueWidth++;
                vue.style.width = vueWidth + "%";
                document.getElementById("vueSpan").innerHTML = vueWidth  + "%";
            }
        }

        var angular = document.getElementById("angular");
        var angularWidth = angular.style.width;
        var angularTimer = setInterval(angularFrame, 10)
        function angularFrame() {
            if (angularWidth >= 5) {
                clearInterval(angularTimer)
            } else {
                angularWidth++;
                angular.style.width = angularWidth + "%";
                document.getElementById("angularSpan").innerHTML = angularWidth  + "%";
            }
        }
    }
}