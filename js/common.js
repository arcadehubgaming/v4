var ArcadeHubSettings = {
    theme: "dark",
    enableSnow: false
};

var ArcadeHub = {
    popupQueue: [],
    isDisplaying: false,
    snowInterval: null,
    currentVersion: "1.0.2",
    updates: [
        "Responsive UI (Mobile Support)",
        "Removal of all malfunctioning movies/proxies"
    ],

    createPopup: function(title, content) {
        this.popupQueue.push({ type: "simple", title, content });
        this.processQueue();
    },

    createUpdatePopup: function(title, itemsArray) {
        this.popupQueue.push({ type: "update", title, itemsArray });
        this.processQueue();
    },

    processQueue: function() {
        if (this.isDisplaying || this.popupQueue.length === 0) {
            return;
        }

        this.isDisplaying = true;

        const popupData = this.popupQueue.shift();
        const popupContainer = document.createElement("div");
        popupContainer.className = "popup-container";

        const popup = document.createElement("div");
        popup.className = "popup";

        const popupTitle = document.createElement("div");
        popupTitle.className = "popup-title";
        popupTitle.textContent = popupData.title;

        const popupContentContainer = document.createElement("div");
        popupContentContainer.className = "popup-content-container";

        if (popupData.type === "simple") {
            const contentParagraph = document.createElement("p");
            contentParagraph.innerHTML = this.convertMarkdownLinks(popupData.content.replace(/\n/g, '<br>'));
            popupContentContainer.appendChild(contentParagraph);
        }

        if (popupData.type === "update") {
            const itemList = document.createElement("ul");
            popupData.itemsArray.forEach(item => {
                const listItem = document.createElement("li");
                listItem.innerHTML = this.convertMarkdownLinks(item.replace(/\n/g, '<br>'));
                itemList.appendChild(listItem);
            });
            popupContentContainer.appendChild(itemList);
        }

        const closeButton = document.createElement("p");
        closeButton.className = "popup-close-btn";
        closeButton.textContent = "Close";

        popupContentContainer.appendChild(closeButton);
        popup.appendChild(popupTitle);
        popup.appendChild(popupContentContainer);
        popupContainer.appendChild(popup);

        document.body.appendChild(popupContainer);

        closeButton.addEventListener("click", () => {
            popupContainer.remove();
            this.isDisplaying = false;
            this.processQueue();
            this.setCookie("hasVisited", "true", 32767);
            this.setCookie("lastVersion", this.currentVersion, 32767);
        });
    },

    convertMarkdownLinks: function(content) {
        return content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    },

    setCookie: function(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },

    getCookie: function(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },

    deleteAllCookies: function() {
        document.cookie.split(';').forEach(cookie => {
            const eqPos = cookie.indexOf('=');
            const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
        });
    },

    Utils: {
        openAboutMagic: function(url) {
            var win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.src = url;
            win.document.body.appendChild(iframe);
            var interval = setInterval(function () {
                if (win.closed) {
                    clearInterval(interval);
                    win = undefined;
                }
            }, 500);
        },

        populate: function(element, items) {
            element.innerHTML = '';

            items.sort((a, b) => a.name.localeCompare(b.name));

            items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.setAttribute("class", "item-container");

                const nameSpan = document.createElement('span');
                nameSpan.textContent = item.name;

                const playButton = document.createElement('div');
                playButton.setAttribute("class", "btn");
                playButton.textContent = 'Play Now';

                playButton.addEventListener('click', () => {
                    ArcadeHub.Utils.openAboutMagic(item.url);
                });

                itemDiv.appendChild(nameSpan);
                itemDiv.appendChild(playButton);
                element.appendChild(itemDiv);
            });
        },

        switchTab: function(event) {
            const target = event.currentTarget;
            const sections = document.querySelectorAll('.item-list');
            const toggles = document.querySelectorAll('.sidebar-toggle');

            sections.forEach(section => section.style.display = 'none');
            toggles.forEach(toggle => toggle.classList.remove('sidebar-toggle-selected'));

            target.classList.add('sidebar-toggle-selected');
            if (target.textContent.includes("Games")) {
                document.querySelector('.games').style.display = 'flex';
                ArcadeHub.Utils.searchItem();
            }

            if (target.textContent.includes("Movies")) {
                document.querySelector('.movies').style.display = 'flex';
                ArcadeHub.Utils.searchItem();
            }

            if (target.textContent.includes("Proxies")) {
                document.querySelector('.proxies').style.display = 'flex';
                ArcadeHub.Utils.searchItem();
            }

            if (target.textContent.includes("Settings")) {
                document.querySelector('.settings').style.display = 'flex';
            }

            var parentSnow = document.getElementById("snowTarget").parentElement;
            parentSnow.removeChild(document.getElementById("snowTarget"));

            var newSnow = document.createElement("div");
            newSnow.id = "snowTarget";
            newSnow.style = "background:transparent; color:transparent; height: 1px; width: 100%"
            parentSnow.appendChild(newSnow);

            document.querySelectorAll('.snowflake').forEach(snowflake => snowflake.remove());
        },

        searchItem: function() {
            const searchTerm = document.querySelector('.search-input').value.toLowerCase();
            const sections = [
                { element: document.querySelector('.games'), items: ArcadeHubItems.Games },
                { element: document.querySelector('.movies'), items: ArcadeHubItems.Movies },
                { element: document.querySelector('.proxies'), items: ArcadeHubItems.Proxies }
            ];

            sections.forEach(function(section) {
                if (section.element.style.display === "flex") {
                    section.element.innerHTML = '';
                    const filteredItems = section.items.filter(item => 
                        item.name.toLowerCase().includes(searchTerm)
                    );
                    ArcadeHub.Utils.populate(section.element, filteredItems);
                }
            });
        },
        
        createSnowflake: function() {
            const snowflake = document.createElement("div");
            snowflake.className = "snowflake";
            snowflake.textContent = "❄";
            
            const leftPosition = Math.random() * 98;
            snowflake.style.left = leftPosition + "%";
            snowflake.style.fontSize = Math.random() * 1.5 + 0.5 + "em";
            document.body.appendChild(snowflake);
        
            snowflake.style.top = "-10px"; 
        
            let target = document.getElementById("snowTarget");
            let targetPosition = target.getBoundingClientRect().top + window.scrollY - 50;
        
            let position = -10; 
            const fallSpeed = 6; 
            const fallInterval = setInterval(() => {
                position += fallSpeed;
                snowflake.style.top = position + "px";
        
                if (position > targetPosition) {
                    clearInterval(fallInterval);
                    snowflake.remove();
                }
            }, 20);
        },

        manageSnowflakes: function() {
            if (ArcadeHubSettings.enableSnow) {
                if (!ArcadeHub.snowInterval) {
                    ArcadeHub.snowInterval = setInterval(ArcadeHub.Utils.createSnowflake, 100);
                }
            } else {
                clearInterval(ArcadeHub.snowInterval);
                ArcadeHub.snowInterval = null;
                document.querySelectorAll('.snowflake').forEach(snowflake => snowflake.remove());
            }
        }
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const lastVersion = ArcadeHub.getCookie("lastVersion");
    ArcadeHub.setCookie("lastVersion", ArcadeHub.currentVersion, 32767);

    document.querySelector('.games').style.display = 'flex';
    ArcadeHub.Utils.populate(document.querySelector('.games'), ArcadeHubItems.Games);
    ArcadeHub.Utils.populate(document.querySelector('.movies'), ArcadeHubItems.Movies);
    ArcadeHub.Utils.populate(document.querySelector('.proxies'), ArcadeHubItems.Proxies);
    
    const sidebarToggles = document.querySelectorAll('.sidebar-toggle');
    sidebarToggles.forEach(toggle => {
        toggle.addEventListener('click', ArcadeHub.Utils.switchTab);
    });

    document.querySelector('.search-input').addEventListener('input', ArcadeHub.Utils.searchItem);

    const themeSelect = document.getElementById("theme-select");

    themeSelect.addEventListener("change", function() {
        const selectedTheme = themeSelect.value;
        document.body.className = "";


        switch (selectedTheme) {
            case "dark":
                document.body.classList.add("arcadehub-dark");
                ArcadeHubSettings.theme = "dark";
                ArcadeHubSettings.enableSnow = false;
                break;
            case "fall":
                document.body.classList.add("arcadehub-fall");
                ArcadeHubSettings.theme = "fall";
                ArcadeHubSettings.enableSnow = false;
                break;
            case "winter":
                document.body.classList.add("arcadehub-winter");
                ArcadeHubSettings.theme = "winter";
                ArcadeHubSettings.enableSnow = true;
                break;
            case "oxocarbon-dark":
                document.body.classList.add("arcadehub-oxocarbon-dark");
                ArcadeHubSettings.theme = "oxocarbon-dark";
                ArcadeHubSettings.enableSnow = false;
                break;
            case "oxocarbon-light":
                document.body.classList.add("arcadehub-oxocarbon-light");
                ArcadeHubSettings.theme = "oxocarbon-light";
                ArcadeHubSettings.enableSnow = false;
                break;
            case "catppuccin-latte":
                document.body.classList.add("arcadehub-catppuccin-latte");
                ArcadeHubSettings.theme = "catppuccin-latte";
                ArcadeHubSettings.enableSnow = false;
                break;
            case "catppuccin-frappe":
                document.body.classList.add("arcadehub-catppuccin-frappe");
                ArcadeHubSettings.theme = "catppuccin-frappe";
                ArcadeHubSettings.enableSnow = false;
                break;
            default:
                ArcadeHubSettings.theme = "default";
                ArcadeHubSettings.enableSnow = false;
                break;
        }

        ArcadeHub.setCookie("ArcadeHubSettings", JSON.stringify(ArcadeHubSettings), 32767);
        ArcadeHub.Utils.manageSnowflakes();
    });

    const storedSettings = ArcadeHub.getCookie("ArcadeHubSettings");
    if (storedSettings) {
        Object.assign(ArcadeHubSettings, JSON.parse(storedSettings));

        themeSelect.value = ArcadeHubSettings.theme;
        if(themeSelect.value !== "default") {
            document.body.classList.add(`arcadehub-${ArcadeHubSettings.theme}`);
        } else {
            document.body.className = "";
        }

        ArcadeHub.Utils.manageSnowflakes();
    }
});
