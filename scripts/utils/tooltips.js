const setInitialTooltips = () => {
    $(".top-bar .tooltip").powerTip({
        followMouse: true,
        placement: "s",
        offset: 40,
        fadeInTime: 50,
        fadeOutTime: 30,
        closeDelay: 100,
        intentPollInterval: 30,
        intentSensitivity: 5,
        popupClass: "tooltip-top-bar",
    });
    $(".bottom-bar .tooltip").powerTip({
        followMouse: false,
        smartPlacement: true,
        placement: "n",
        offset: 10,
        fadeInTime: 0,
        fadeOutTime: 0,
        closeDelay: 0,
        intentPollInterval: 0,
        intentSensitivity: 100,
        popupClass: "tooltip-bottom-bar",
    });
    $(".bottom-bar .tooltip-right").powerTip({
        followMouse: false,
        smartPlacement: true,
        placement: "nw",
        offset: 5,
        fadeInTime: 0,
        fadeOutTime: 0,
        closeDelay: 0,
        intentPollInterval: 0,
        intentSensitivity: 100,
        popupClass: "tooltip-bottom-bar",
    });
    $(".magic-rainbow").powerTip({
        followMouse: true,
        offset: 5,
        fadeInTime: 50,
        fadeOutTime: 30,
        closeDelay: 100,
        intentPollInterval: 30,
        intentSensitivity: 5,
        popupClass: "standard",
    });
}

const setSplashTooltips = () => {
    $("#splash").find(".tooltip").powerTip({
        followMouse: true,
        offset: 40,
        fadeInTime: 50,
        fadeOutTime: 30,
        closeDelay: 100,
        intentPollInterval: 30,
        intentSensitivity: 5,
        popupClass: "standard",
    });
}

const setTooltips = (elem) => {
    $(elem).find(".tooltip").powerTip({
        followMouse: true,
        offset: 40,
        fadeInTime: 50,
        fadeOutTime: 30,
        closeDelay: 100,
        intentPollInterval: 30,
        intentSensitivity: 5,
        popupClass: "standard",
    });
}

const setTooltip = (elem, cls = false) => {
    if (cls) {
        $(elem).powerTip({
            followMouse: false,
            smartPlacement: true,
            placement: "n",
            offset: 5,
            fadeInTime: 0,
            fadeOutTime: 0,
            closeDelay: 0,
            intentPollInterval: 0,
            intentSensitivity: 100,
            popupClass: cls,
        });
    } else {
        $(elem).powerTip({
            followMouse: true,
            offset: 5,
            fadeInTime: 50,
            fadeOutTime: 30,
            closeDelay: 100,
            intentPollInterval: 30,
            intentSensitivity: 5,
            popupClass: "standard",
        });
    }
}

const clearTooltips = () => {
    $.powerTip.destroy();
    setTooltips(".map-inner");
    setTooltips(".buttons-wrapper");
    setTooltips(".treasures");
    setTooltips(".candies");
    setInitialTooltips();
}

export { setInitialTooltips, setSplashTooltips, setTooltips, setTooltip, clearTooltips };