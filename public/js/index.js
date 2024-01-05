let hasCreatedContinueButton = false;

function toggleButton() {
    const currentLocation = document.location;
    let html = document.querySelector('html'); 

    switch(currentLocation.pathname) {
        case "/":
            if (html.scrollTop > 3800) {
                // window.scrollTo(0, 0);
                // window.location.href = `${currentLocation.origin}/css`
                createContinueButton();
            }

        case "/css":
            if (html.scrollTop > 3400) {
                // window.scrollTo(0, 0);
                // window.location.href = `${currentLocation.origin}/javascript`
                createContinueButton();
            }
    }
}

function createContinueButton() {
    if (!hasCreatedContinueButton) {
        hasCreatedContinueButton = true;

        const documentDiv = document.querySelector('#congratulations');

        let continueDiv = document.createElement('div');
        let continueButton = document.createElement('input');
        
        continueDiv.id = "continue-button";
        continueButton.value = "Pokračovat?";
        continueButton.type = "button";
        continueButton.style.opacity = 0.0;
        continueButton.style.animation = "fadeIn 1s 1s forwards";
        continueButton.onclick = function() { onContinueClick(); };
        continueDiv.appendChild(continueButton);
    
        documentDiv.appendChild(continueDiv);
    }
}

let interval = 7 // basically just for convienience
setInterval(() => {
    toggleButton();
}, 7 * 1000);

function onContinueClick() {
    switch(currentLocation.pathname) {
        case "/":
            window.scrollTo(0, 0);
            window.location.href = `${currentLocation.origin}/css`

        case "/css":
            window.scrollTo(0, 0);
            window.location.href = `${currentLocation.origin}/javascript`
    }
}