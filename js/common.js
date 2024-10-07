const settingsKey = 'ArcadeHubSettings';
const ArcadeHubSettings = getCookie(settingsKey) || {};

document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    const radioButtons = document.querySelectorAll('.btn-radio-input');
    const sections = {
        1: document.querySelector('.games-wrapper'),
        2: document.querySelector('.movies-wrapper'),
        3: document.querySelector('.proxies-wrapper'),
    };

    settingHandling();

    toggleCheckboxes.forEach(toggleCheckbox => {
        const settingKey = toggleCheckbox.getAttribute('data-toggle');
        toggleCheckbox.checked = ArcadeHubSettings[settingKey] || false;

        toggleCheckbox.addEventListener('change', () => {
            ArcadeHubSettings[settingKey] = toggleCheckbox.checked;
            setCookie(settingsKey, ArcadeHubSettings);
            settingHandling(settingKey);
        });
    });

    const keybindInput = document.getElementById('keybind-input');
    const urlInput = document.getElementById('url-input');
    const saveKeybindButton = document.getElementById('save-keybind');

    keybindInput.value = ArcadeHubSettings.keybind || "`";

    saveKeybindButton.addEventListener('click', () => {
        ArcadeHubSettings.keybind = keybindInput.value;
        ArcadeHubSettings.url = urlInput.value;
        setCookie(settingsKey, ArcadeHubSettings);
    });

    document.addEventListener('keydown', (event) => {
        if (ArcadeHubSettings.keybind && event.key === ArcadeHubSettings.keybind) {
            window.open(ArcadeHubSettings.url, '_blank');
        }
    });

    const blurSlider = document.getElementById('blur-slider');
    const wrapper = document.querySelector(".arcadehub-settings-wrapper");

    wrapper.style.backdropFilter = `blur(${ArcadeHubSettings.blurAmount}px)`;
    blurSlider.value = ArcadeHubSettings.blurAmount || 4;

    blurSlider.addEventListener('input', () => {
        wrapper.style.backdropFilter = `blur(${blurSlider.value}px)`;
        ArcadeHubSettings.blurAmount = blurSlider.value;
        setCookie(settingsKey, ArcadeHubSettings);
    });

    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            const selectedValue = radio.value;
            for (const key in sections) {
                sections[key].style.display = (key == selectedValue) ? 'block' : 'none';
                populate((document.getElementById('item-search').value.toLowerCase() || ""), sections[key]);
            }
        });
    });
    
    document.querySelector('input[name="toggle"]:checked').dispatchEvent(new Event('change'));
});

function setCookie(name, value) {
    document.cookie = `${name}=${JSON.stringify(value)}; path=/;`;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    return parts.length === 2 ? JSON.parse(parts.pop().split(';').shift()) : null;
}

function settingHandling(settingKey) {
    if (ArcadeHubSettings.openInAboutBlank && !window.location.href.includes("#arcadehubinaboutblank")) {
        let win = window.open('', '_blank');
        win.document.body.style.margin = '0';
        win.document.body.style.height = '100vh';
        const iframe = win.document.createElement('iframe');
        iframe.style.border = 'none';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.src = window.location.href + "#arcadehubinaboutblank";
        win.document.body.appendChild(iframe);

        const interval = setInterval(() => {
            if (win.closed) {
                clearInterval(interval);
                win = undefined;
            }
        }, 500);
        window.close();
    }

    if (ArcadeHubSettings.darkMode) {
        document.body.classList.add('arcadehub-dark');
    }

    if (!ArcadeHubSettings.darkMode) {
        document.body.classList.remove('arcadehub-dark');
    }
}

function openAboutMagic(url) {
    var urlObj = new window.URL(window.location.href);

    var win;
    if (win) {
        win.focus();
    } else {
        win = window.open();
        win.document.body.style.margin = '0';
        win.document.body.style.height = '100vh';
        var iframe = win.document.createElement('iframe');
        iframe.style.border = 'none';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.margin = '0';
        iframe.src = url;
        win.document.body.appendChild(iframe);


        var interval = setInterval(function () {
            if (win.closed) {
                clearInterval(interval);
                win = undefined;

            }
        }, 500);
    }
}

function populate(searchTerm = "", element) {
    const itemList = element.querySelector('.item-list');
    itemList.innerHTML = '';

    const category = Object.keys(ArcadeHubItems).find(key => {
        return element.classList.contains(key.toLowerCase() + '-wrapper');
    });

    const items = ArcadeHubItems[category];

    items.forEach(item => {
        if (item.name.toLowerCase().includes(searchTerm)) {
            const itemDiv = document.createElement('div');
            itemDiv.setAttribute("class", "item-container");

            const nameSpan = document.createElement('span');
            nameSpan.style = "font-size: 18px;"
            nameSpan.textContent = item.name;

            const playButton = document.createElement('div');
            playButton.setAttribute("class", "btn")
            playButton.textContent = 'Play Now';

            playButton.addEventListener('click', () => {
                openAboutMagic(item.url);
            });

            playButton.setAttribute("data-game-url", item.url)
            playButton.style.marginLeft = '10px';

            itemDiv.appendChild(nameSpan);
            itemDiv.appendChild(playButton);
            itemList.appendChild(itemDiv);
        }
    });
}

function searchItem() {
    const radioButtons = document.querySelectorAll('.btn-radio-input');
    const sections = {
        1: document.querySelector('.games-wrapper'),
        2: document.querySelector('.movies-wrapper'),
        3: document.querySelector('.proxies-wrapper'),
    };

    radioButtons.forEach(radio => {
        for (const key in sections) {
            populate((document.getElementById('item-search').value.toLowerCase() || ""), sections[key]);
        }
    });
}