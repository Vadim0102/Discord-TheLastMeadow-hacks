async function clickLoop() {
    while (isActive) {
        const target = document.querySelector('div[class*="logo"]');
        if (target) target.click();
        await new Promise(resolve => setTimeout(resolve, 1));
    }
}

let isActive = false;

const button = document.createElement('button');
function toggleClicking() {
    isActive = !isActive;
    button.textContent = isActive ? 'Выключить' : 'Включить';
    if (isActive) clickLoop();
}

const shopElement = document.querySelector('div[class*="shop"][class*="primaryShop"]');
button.textContent = 'Включить';
button.style.position = 'absolute';
button.style.left = (shopElement.getBoundingClientRect().left - 100) + 'px';
button.style.top = shopElement.getBoundingClientRect().top + 'px';
button.style.zIndex = '1000';
button.style.padding = '10px';
button.style.background = 'red';
button.style.color = 'white';
button.style.border = 'none';
button.style.cursor = 'pointer';

button.addEventListener('click', toggleClicking);
document.body.appendChild(button);
