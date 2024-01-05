function switchToNextRoute() {
    const currentLocation = document.location;
    let html = document.querySelector('html'); 

    switch(currentLocation.pathname) {
        case "/":
            if (html.scrollTop > 3800) {
                window.scrollTo(0, 0);
                window.location.href = `${currentLocation.origin}/css`
            }

        case "/css":
            if (html.scrollTop > 3400) {
                window.scrollTo(0, 0);
                window.location.href = `${currentLocation.origin}/javascript`
            }
    }
}

let interval = 7 // basically just for convienience
setInterval(() => {
    switchToNextRoute();
}, 7 * 1000);