window.onload = init;

function init(){
    getDefaultCookieIfNeeded();
    if(getCookie("lang")=="fr"){
        switchLangAccordingToCookie();
    }
    loadLangToggle();
  }

function loadLangToggle(){
    var toggle = document.getElementById("language-toggle");
    if(getCookie("lang") == "fr"){
        toggle.checked = true;
    }
    toggle.addEventListener('click', function(e) {
        switchCookie();
        switchLangAccordingToCookie();
    })
}

function switchCookie(){
    switch(getCookie("lang")) {
        case "nl":
            setCookie("lang", "fr");
            break;
        case "fr":
            setCookie("lang", "nl");
            break;
        case null:
            getDefaultCookieIfNeeded();
    }
}

function switchLangAccordingToCookie(){
    switch(getCookie("lang")) {
        case "nl":
            setDisplayOfEachElementForClassName("frTekst","none");
            setDisplayOfEachElementForClassName("nlTekst","block");
            break;
        case "fr":
            setDisplayOfEachElementForClassName("nlTekst","none");
            setDisplayOfEachElementForClassName("frTekst","block");
            break;
        case null:
            getDefaultCookieIfNeeded();
      }
}

function setDisplayOfEachElementForClassName(aClassName,display){
    let coll = document.getElementsByClassName(aClassName);
    let len = coll.length;
    for (i = 0; i < len; i++) {
        coll[i].style.display = display;
    }
}

function getDefaultCookieIfNeeded(){
    if (getCookie("lang") == null | getCookie("lang") != "fr"){
        setCookie("lang", "nl");
    }
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue;
  }

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

