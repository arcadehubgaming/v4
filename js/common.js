var ArcadeHubSettings = {
    theme: "default",
    enableSnow: false,
    cloakingToggle: false,
    jumpButton: true,
    gameNewTab: true,
    movieNewTab: true,
    proxyNewTab: true,
    panicKeyToggle: false,
    panicKeyCode: -1,
    panicKeyURL: "https://www.google.com",
    customTheme: {},
    cachedItemsList: [0, 0, 0]
};

var ArcadeHub = {
    popupQueue: [],
    isDisplaying: false,
    snowInterval: null,
    currentTab: "Games",
    currentVersion: "1.0.95",
    updates: [
        "Panic Key URL",
        "Fixed bug"
    ],

    createPopup: function (title, content) {
        this.popupQueue.push({ type: "simple", title, content });
        this.processQueue();
    },

    createUpdatePopup: function (title, itemsArray) {
        this.popupQueue.push({ type: "update", title, itemsArray });
        this.processQueue();
    },

    processQueue: function () {
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
            this.setCookie("hasVisited", true, 32767);
            this.setCookie("lastVersion", this.currentVersion, 32767);
        });
    },

    convertMarkdownLinks: function (content) {
        return content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');
    },

    setCookie: function (name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    },

    getCookie: function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },

    deleteAllCookies: function () {
        document.cookie.split(';').forEach(cookie => {
            const eqPos = cookie.indexOf('=');
            const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
        });
    },

    Utils: {
        fetchScript: function (url) {
            return fetch(url + "?" + Math.random())
                .then(response => response.text())
                .then(data => {
                    const script = document.createElement("script");
                    script.innerHTML = data;
                    document.body.appendChild(script);
                })
                .catch(error => {
                    console.error(error);
                    ArcadeHub.pushNotification("Error loading script: " + url);
                });
        },
        openGame: function (url, noaboutblank) {
            var cond1 = (ArcadeHub.currentTab === "Games" && ArcadeHubSettings.gameNewTab);
            var cond2 = (ArcadeHub.currentTab === "Movies" && ArcadeHubSettings.movieNewTab);
            var cond3 = (ArcadeHub.currentTab === "Proxies" && ArcadeHubSettings.proxyNewTab);

            if (noaboutblank) {
                window.open(url, '_blank').focus();
            } else {
                if (cond1 || cond2 || cond3) {
                    this.openAboutMagic(url);
                } else {
                    document.getElementById("play-modal").style.display = "flex";
                    document.getElementById("game-viewer").src = url;
                }
            }
        },

        openAboutMagic: function (url) {
            var win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.src = url;
            if (ArcadeHubSettings.panicKeyToggle) {
                var style = win.document.createElement("style");
                var script = win.document.createElement("script");

                style.innerHTML = `
                    @import url('https://cdn.jsdelivr.net/gh/arcadehubgaming/v4@v4/fonts/Inter-Regular.woff2');

                    .push-notification-container {
                        position: fixed;
                        bottom: 10px;
                        left: 10px;
                        z-index: 9999;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        transition: transform 0.3s ease-in-out;
                    }

                    .push-notification {
                        background-color: rgba(23, 23, 23, 0.6);
                        backdrop-filter: blur(5px);
                        color: #ffffff;
                        padding: 10px 20px;
                        border-radius: 5px;
                        display: flex;
                        justify-content: flex-start;
                        align-items: flex-start;
                        box-shadow: 1px 2px 2px rgba(17, 24, 39, .3);
                        position: relative;
                        width: max-content;
                        animation: slide-in 0.3s ease-in-out;
                        transition: padding 0.2s;
                        font-family: Inter, sans-serif;
                    }

                    .push-notification:hover {
                        padding: 11px 21px;
                    }

                    .push-notification .progress-bar {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 3px;
                        width: 0;
                        background-color: rgba(23, 23, 23, 0.6);
                        border-radius: 0 0 5px 5px;
                    }

                    .push-notification.hide {
                        animation: slide-out 0.3s ease-in-out;
                        transition: opacity 0.3s ease-out, transform 0.3s ease-out;
                        transform: translateY(-20px);
                    }

                    @keyframes slide-in {
                        0% {
                            transform: translateX(-100px);
                            opacity: 0;
                        }
                        100% {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }

                    @keyframes slide-out {
                        0% {
                            transform: translateX(0);
                            opacity: 1;
                        }
                        100% {
                            transform: translateX(-100px);
                            opacity: 0;
                        }
                    }
                `;
                script.innerHTML = `
                    let notificationContainer = document.querySelector(".push-notification-container");
                    if (!notificationContainer) {
                        notificationContainer = document.createElement("div");
                        notificationContainer.className = "push-notification-container";
                        document.body.appendChild(notificationContainer);
                    }

                    const notification = document.createElement("div");
                    notification.className = "push-notification";
                    notification.textContent = "Panic Key Enabled";

                    const progressBar = document.createElement("div");
                    progressBar.className = "progress-bar";

                    notification.appendChild(progressBar);
                    notificationContainer.appendChild(notification);

                    setTimeout(() => {
                        progressBar.style.transition = "width 2000ms linear";
                        progressBar.style.width = "100%";
                    }, 30);

                    setTimeout(() => {
                        notification.classList.add("hide");
                        setTimeout(() => {
                            notification.remove();
                        }, 300);
                    }, 2000);

                    document.addEventListener("keypress", function(event){
                        if(event.keyCode === ${ArcadeHubSettings.panicKeyCode}) {
                            var win = window.open();
                            win.location.href = \"${ArcadeHubSettings.panicKeyURL}\";
                            win.focus();
                            var interval = setInterval(function () {
                                if (win.closed) {
                                    clearInterval(interval);
                                    win = undefined;
                                }
                            }, 500);
                        }
                        const notification = document.createElement("div");
                        notification.className = "push-notification";
                        notification.textContent = "Panic Key Deployed";

                        const progressBar = document.createElement("div");
                        progressBar.className = "progress-bar";

                        notification.appendChild(progressBar);
                        notificationContainer.appendChild(notification);

                        setTimeout(() => {
                            progressBar.style.transition = "width 2000ms linear";
                            progressBar.style.width = "100%";
                        }, 30);

                        setTimeout(() => {
                            notification.classList.add("hide");
                            setTimeout(() => {
                                notification.remove();
                            }, 300);
                        }, 2000);
                    });
                `;
                win.document.body.appendChild(style);
                win.document.body.appendChild(script);
            }
            win.document.body.appendChild(iframe);
            var interval = setInterval(function () {
                if (win.closed) {
                    clearInterval(interval);
                    win = undefined;
                }
            }, 500);
        },

        populate: function (element, items) {
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
                    var openinaboutblank = item.noaboutblank || false;
                    ArcadeHub.Utils.openGame(item.url, openinaboutblank);
                });

                itemDiv.appendChild(nameSpan);
                itemDiv.appendChild(playButton);
                element.appendChild(itemDiv);
            });
        },

        switchTab: function (event) {
            const target = event.currentTarget;
            const sections = document.querySelectorAll('.item-list');
            const toggles = document.querySelectorAll('.sidebar-toggle');

            if (target.textContent.includes("Feedback")) {
                return;
            }

            sections.forEach(section => section.style.display = 'none');
            toggles.forEach(toggle => toggle.classList.remove('sidebar-toggle-selected'));

            target.classList.add('sidebar-toggle-selected');
            if (target.textContent.includes("Games")) {
                document.querySelector('.games').style.display = 'flex';
                ArcadeHub.currentTab = "Games";
                ArcadeHub.Utils.searchItem();
            }

            if (target.textContent.includes("Movies")) {
                document.querySelector('.movies').style.display = 'flex';
                ArcadeHub.currentTab = "Movies";
                ArcadeHub.Utils.searchItem();
            }

            if (target.textContent.includes("Proxies")) {
                document.querySelector('.proxies').style.display = 'flex';
                ArcadeHub.currentTab = "Proxies";
                ArcadeHub.Utils.searchItem();
            }

            if (target.textContent.includes("Settings")) {
                document.querySelector('.settings').style.display = 'flex';
            }

            var parentSnow = document.getElementById("snowTarget").parentElement;
            parentSnow.removeChild(document.getElementById("snowTarget"));

            var newSnow = document.createElement("div");
            newSnow.id = "snowTarget";
            newSnow.style = "background:transparent; color:transparent; height: 1px; width: 100%";
            parentSnow.appendChild(newSnow);

            document.querySelectorAll('.snowflake').forEach(snowflake => snowflake.remove());
        },

        searchItem: function () {
            const searchTerm = document.querySelector('.search-input').value.toLowerCase();
            const sections = [
                { element: document.querySelector('.games'), items: ArcadeHubItems.Games },
                { element: document.querySelector('.movies'), items: ArcadeHubItems.Movies },
                { element: document.querySelector('.proxies'), items: ArcadeHubItems.Proxies }
            ];

            sections.forEach(function (section) {
                if (section.element.style.display === "flex") {
                    section.element.innerHTML = '';
                    const filteredItems = section.items.filter(item =>
                        item.name.toLowerCase().includes(searchTerm)
                    );
                    ArcadeHub.Utils.populate(section.element, filteredItems);
                }
            });
        },

        createSnowflake: function () {
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

        manageSnowflakes: function () {
            if (ArcadeHubSettings.enableSnow) {
                if (!ArcadeHub.snowInterval) {
                    ArcadeHub.snowInterval = setInterval(ArcadeHub.Utils.createSnowflake, 100);
                }
            } else {
                clearInterval(ArcadeHub.snowInterval);
                ArcadeHub.snowInterval = null;
                document.querySelectorAll('.snowflake').forEach(snowflake => snowflake.remove());
            }
        },

        inIframe: function () {
            try {
                return window.self !== window.top;
            } catch (e) {
                return true;
            }
        },

        cloakPage: function () {
            if (this.inIframe() !== true) {
                var win = window.open();
                win.document.title = "Google Drive";
                var link = win.document.createElement("link");
                link.rel = "icon";
                link.type = "image/png";
                link.href = "https://www.gstatic.com/images/branding/product/2x/drive_48dp.png";

                win.document.head.appendChild(link);
                win.document.body.style.margin = '0';
                win.document.body.style.height = '100vh';
                var iframe = win.document.createElement('iframe');
                iframe.style.border = 'none';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.src = "#";
                win.document.body.appendChild(iframe);
                var interval = setInterval(function () {
                    if (win.closed) {
                        clearInterval(interval);
                        win = undefined;
                    }
                }, 500);

                window.close();

                setTimeout(function () {
                    window.location.href = "about:blank";
                }, 500)
            }
        },
        saveCustomTheme: function (theme) {
            ArcadeHubSettings.theme = theme;
        },

        applyCustomTheme: function () {
            const customTheme = ArcadeHubSettings.customTheme;
            if (customTheme) {
                for (const property in customTheme) {
                    if (customTheme.hasOwnProperty(property)) {
                        document.documentElement.style.setProperty(property, customTheme[property]);
                    }
                }
            }
        },
        pushNotification: function (message, duration = 5000, func = null) {
            let notificationContainer = document.querySelector(".push-notification-container");
            if (!notificationContainer) {
                notificationContainer = document.createElement("div");
                notificationContainer.className = "push-notification-container";
                document.body.appendChild(notificationContainer);
            }

            const notification = document.createElement("div");
            notification.className = "push-notification";
            notification.textContent = message;

            const progressBar = document.createElement("div");
            progressBar.className = "progress-bar";

            notification.appendChild(progressBar);
            notificationContainer.appendChild(notification);

            if (func != null) {
                notification.addEventListener("click", func);
            }

            setTimeout(() => {
                progressBar.style.transition = `width ${duration}ms linear`;
                progressBar.style.width = "100%";
            }, 30);

            setTimeout(() => {
                notification.classList.add("hide");
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, duration);
        },
        deleteAllCookies: function () {
            var cookies = document.cookie.split(";");

            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

                document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
            }
        },
        arraysAreEqual: function (arr1, arr2) {
            if (arr1.length !== arr2.length) {
                return false;
            }

            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) {
                    return false;
                }
            }

            return true;
        },

        panicKeyDetector: function (event) {
            ArcadeHubSettings.panicKeyCode = event.keyCode;
            ArcadeHub.Utils.pushNotification("Key recieved, your panic key is \"" + event.key + "\"");
            ArcadeHubSettings.panicKeyToggle = true;
            document.removeEventListener("keypress", ArcadeHub.Utils.panicKeyDetector);
            document.addEventListener("keypress", ArcadeHub.Utils.panicKeyHandler);
            ArcadeHub.setCookie("ArcadeHubSettings", JSON.stringify(ArcadeHubSettings), 32767);
        },

        panicKey: function () {
            var win = window.open();
            win.location.href = ArcadeHubSettings.panicKeyURL;
            win.focus();
            ArcadeHub.Utils.pushNotification("Panic Key deployed.");
            var interval = setInterval(function () {
                if (win.closed) {
                    clearInterval(interval);
                    win = undefined;
                }
            }, 500);
        },

        panicKeyHandler: function (event) {
            if (event.keyCode === ArcadeHubSettings.panicKeyCode) {
                ArcadeHub.Utils.panicKey();
            }
        }
    }
};

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const themeSelect = document.getElementById("theme-select");
        const storedSettings = ArcadeHub.getCookie("ArcadeHubSettings");
        if (storedSettings) {
            Object.assign(ArcadeHubSettings, JSON.parse(storedSettings));

            themeSelect.value = ArcadeHubSettings.theme;

            switch (themeSelect.value) {
                case "default":
                    document.body.className = "";
                    document.documentElement.style = '';
                default:
                    document.body.classList.add(`arcadehub-${ArcadeHubSettings.theme}`);
            }

            if (themeSelect.value === "custom-theme") {
                ArcadeHub.Utils.applyCustomTheme();
            }

            if (ArcadeHubSettings.panicKeyToggle == true) {
                document.addEventListener("keypress", ArcadeHub.Utils.panicKeyHandler);
            }

            ArcadeHub.Utils.manageSnowflakes();
        }

        let gamesFetched = false;
        let moviesFetched = false;
        let proxiesFetched = false;

        try {
            await Promise.all([
                ArcadeHub.Utils.fetchScript("https://raw.githubusercontent.com/arcadehubgaming/cdn-list/refs/heads/main/games.js"),
                ArcadeHub.Utils.fetchScript("https://raw.githubusercontent.com/arcadehubgaming/cdn-list/refs/heads/main/movies.js"),
                ArcadeHub.Utils.fetchScript("https://raw.githubusercontent.com/arcadehubgaming/cdn-list/refs/heads/main/proxies.js")
            ]);
            gamesFetched = true;
            moviesFetched = true;
            proxiesFetched = true;
        } catch (error) {
            ArcadeHub.Utils.pushNotification("Fetch failed, please ensure connection to the internet and retry!");
        }

        if (!gamesFetched || !moviesFetched || !proxiesFetched) {
            ArcadeHub.Utils.pushNotification("Fetch failed, please ensure connection to the internet and retry!");
        }

        const lastVersion = ArcadeHub.getCookie("lastVersion");
        ArcadeHub.setCookie("lastVersion", ArcadeHub.currentVersion, 32767);

        var cachedItemsList = [0, 0, 0];
        if (ArcadeHub.getCookie("ArcadeHubSettings")) {
            cachedItemsList = JSON.parse(ArcadeHub.getCookie("ArcadeHubSettings")).cachedItemsList;
        }

        function compareLists() {
            var differences = [
                ArcadeHubItems.Games.length - cachedItemsList[0],
                ArcadeHubItems.Movies.length - cachedItemsList[1],
                ArcadeHubItems.Proxies.length - cachedItemsList[2]
            ];

            var labels = ["game", "movie", "proxy"];
            var str = [];

            differences.forEach((diff, index) => {
                if (diff !== 0) {
                    var action = diff > 0 ? "added" : "removed";
                    var label = Math.abs(diff) === 1 ? labels[index] : labels[index] + "s";
                    if (label === "proxys") {
                        label = "proxies";
                    }
                    str.push(Math.abs(diff) + " " + label + " " + action);
                }
            });

            if (str.length > 0) {
                ArcadeHub.Utils.pushNotification(str.join(", "));
            }
        }

        document.querySelector('.games').style.display = 'flex';
        ArcadeHub.Utils.populate(document.querySelector('.games'), ArcadeHubItems.Games);
        ArcadeHub.Utils.populate(document.querySelector('.movies'), ArcadeHubItems.Movies);
        ArcadeHub.Utils.populate(document.querySelector('.proxies'), ArcadeHubItems.Proxies);

        if (!ArcadeHub.Utils.arraysAreEqual(cachedItemsList, [0, 0, 0])) {
            compareLists();
        }

        ArcadeHubSettings.cachedItemsList = [
            ArcadeHubItems.Games.length,
            ArcadeHubItems.Movies.length,
            ArcadeHubItems.Proxies.length
        ];

        const sidebarToggles = document.querySelectorAll('.sidebar-toggle');
        const panicKeyInput = document.querySelector("#panic-key-input");
        
        panicKeyInput.value = ArcadeHubSettings.panicKeyURL;

        panicKeyInput.addEventListener("blur", function(){
            ArcadeHubSettings.panicKeyURL = panicKeyInput.value;
            ArcadeHub.setCookie("ArcadeHubSettings", JSON.stringify(ArcadeHubSettings), 32767);
        })
        sidebarToggles.forEach(toggle => {
            toggle.addEventListener('click', ArcadeHub.Utils.switchTab);
        });

        document.querySelector('.search-input').addEventListener('input', ArcadeHub.Utils.searchItem);

        document.getElementById("create-theme-btn").addEventListener("click", function () {
            document.getElementById("theme-modal").style.display = "block";
        });

        document.getElementById("close-modal-btn").addEventListener("click", function () {
            document.getElementById("theme-modal").style.display = "none";
        });

        document.getElementById("close-play-modal").addEventListener("click", function () {
            document.getElementById("play-modal").style.display = "none";
            document.getElementById("game-viewer").src = "";
        });

        document.getElementById("fullscreen-game-viewer").addEventListener("click", function () {
            document.getElementById("game-viewer").requestFullscreen();
        });

        /*
            document.getElementById("save-theme-btn").addEventListener("click", function () {
            const bgColor = document.getElementById("bg-color").value;
            const secondarybgColor = document.getElementById("secondarybg-color").value;
            const textColor = document.getElementById("text-color").value;
            const buttonColor = document.getElementById("button-color").value;
            const buttonHoverColor = document.getElementById("button-hover-color").value;
    
            const customTheme = {
                "--bg-color": bgColor,
                "--secondary-bg-color": secondarybgColor,
                "--text-color": textColor,
                "--button-bg-color": buttonColor,
                "--button-hover-bg-color": buttonHoverColor,
            };
    
            ArcadeHubSettings.customTheme = customTheme;
    
            ArcadeHub.Utils.applyCustomTheme();
    
            document.getElementById("theme-modal").style.display = "none";
            ArcadeHub.setCookie("ArcadeHubSettings", JSON.stringify(ArcadeHubSettings), 32767);
        });
        */
        themeSelect.addEventListener("change", function () {
            const selectedTheme = themeSelect.value;
            document.body.className = "";
            document.documentElement.style = '';

            ArcadeHubSettings.theme = "default";
            ArcadeHubSettings.enableSnow = false;

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
                case "catppuccin-macchiato":
                    document.body.classList.add("arcadehub-catppuccin-macchiato");
                    ArcadeHubSettings.theme = "catppuccin-macchiato";
                    ArcadeHubSettings.enableSnow = false;
                    break;
                case "catppuccin-mocha":
                    document.body.classList.add("arcadehub-catppuccin-mocha");
                    ArcadeHubSettings.theme = "catppuccin-mocha";
                    ArcadeHubSettings.enableSnow = false;
                    break;
                case "midnight":
                    document.body.classList.add("arcadehub-midnight");
                    ArcadeHubSettings.theme = "midnight";
                    ArcadeHubSettings.enableSnow = false;
                    break;
                case "custom-theme":
                    document.body.classList.add("arcadehub-custom-theme");
                    themeSelect.selectedIndex = 0;
                    ArcadeHub.Utils.pushNotification("Custom theme temporarily removed, please use another theme for now.")
                    ArcadeHubSettings.theme = "default";
                    ArcadeHubSettings.enableSnow = false;
            }

            ArcadeHub.setCookie("ArcadeHubSettings", JSON.stringify(ArcadeHubSettings), 32767);
            ArcadeHub.Utils.manageSnowflakes();
        });

        const gameNewTabToggle = document.getElementById("game-newtab-toggle");
        const movieNewTabToggle = document.getElementById("movie-newtab-toggle");
        const proxyNewTabToggle = document.getElementById("proxy-newtab-toggle");
        const panicKeyToggle = document.getElementById("panic-key-toggle");

        function setJumpButton() {
            const scrollPosition = window.scrollY;
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;

            const atTop = scrollPosition < 100;
            const atBottom = scrollPosition + winHeight >= docHeight - 100;

            const jumpToTopButton = document.getElementById("jumpToTopButton");

            if (atTop) {
                jumpToTopButton.classList.add('flipped');
            }
            if (!atTop) {
                jumpToTopButton.classList.remove('flipped');
            }
        }

        setJumpButton();

        document.addEventListener("scroll", function () {
            const scrollPosition = window.scrollY;
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;

            const atTop = scrollPosition < 100;
            const atBottom = scrollPosition + winHeight >= docHeight - 100;

            const jumpToTopButton = document.getElementById("jumpToTopButton");

            if (atTop) {
                jumpButton.classList.add('flipped');
            }
            if (!atTop) {
                jumpButton.classList.remove('flipped');
            }
        });

        document.getElementById("jumpToTopButton").addEventListener("click", function () {
            const scrollPosition = window.scrollY;
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;

            if (scrollPosition < 100) {
                window.scrollTo({ top: docHeight, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });

        gameNewTabToggle.checked = ArcadeHubSettings.gameNewTab;
        movieNewTabToggle.checked = ArcadeHubSettings.movieNewTab;
        proxyNewTabToggle.checked = ArcadeHubSettings.proxyNewTab;
        panicKeyToggle.checked = ArcadeHubSettings.panicKeyToggle;

        const cloakingToggle = document.getElementById("cloaking-toggle");
        cloakingToggle.addEventListener("change", function () {
            ArcadeHubSettings.cloakingToggle = cloakingToggle.checked;
            if (cloakingToggle.checked) {
                document.title = "Google Drive";
                document.getElementById("favicon").href = "https://www.gstatic.com/images/branding/product/2x/drive_48dp.png";
                ArcadeHub.Utils.cloakPage();
            } else {
                document.title = "Arcade Hub v4";
                document.getElementById("favicon").href = "";
            }
            ArcadeHub.setCookie("ArcadeHubSettings", JSON.stringify(ArcadeHubSettings), 32767);
        });

        const jumpToggle = document.getElementById("jump-toggle");
        const jumpButton = document.getElementById("jumpToTopButton");
        jumpToggle.addEventListener("change", function () {
            ArcadeHubSettings.jumpButton = jumpToggle.checked;
            if (jumpToggle.checked) {
                jumpButton.style = "display: block";
            } else {
                jumpButton.style = "display: none";
            }
            ArcadeHub.setCookie("ArcadeHubSettings", JSON.stringify(ArcadeHubSettings), 32767);
        });

        gameNewTabToggle.addEventListener("change", function () {
            ArcadeHubSettings.gameNewTab = gameNewTabToggle.checked;
            ArcadeHub.setCookie("ArcadeHubSettings", JSON.stringify(ArcadeHubSettings), 32767);
        });

        movieNewTabToggle.addEventListener("change", function () {
            ArcadeHubSettings.movieNewTab = movieNewTabToggle.checked;
            ArcadeHub.setCookie("ArcadeHubSettings", JSON.stringify(ArcadeHubSettings), 32767);
        });

        proxyNewTabToggle.addEventListener("change", function () {
            ArcadeHubSettings.proxyNewTab = proxyNewTabToggle.checked;
            ArcadeHub.setCookie("ArcadeHubSettings", JSON.stringify(ArcadeHubSettings), 32767);
        });
        panicKeyToggle.addEventListener("change", function () {
            if (panicKeyToggle.checked) {
                ArcadeHub.Utils.pushNotification("Listening for panic key.... (5 seconds)");
                let panicKeyTimeout = setTimeout(function () {
                    ArcadeHub.Utils.pushNotification("Failed to set panic key within 5 seconds.");
                    panicKeyToggle.checked = false;
                    ArcadeHubSettings.panicKeyToggle = false;
                    document.removeEventListener("keypress", ArcadeHub.Utils.panicKeyDetector);
                    document.removeEventListener("keypress", ArcadeHub.Utils.panicKeyHandler);
                    ArcadeHubSettings.panicKeyCode = -1;
                    ArcadeHub.setCookie("ArcadeHubSettings", JSON.stringify(ArcadeHubSettings), 32767);
                }, 5000);
                if (!ArcadeHubSettings.panicKeyToggle) {
                    document.addEventListener("keypress", ArcadeHub.Utils.panicKeyDetector);
                    document.addEventListener("keypress", function onKey() {
                        clearTimeout(panicKeyTimeout);
                        document.removeEventListener("keypress", onKey);
                    });
                    ArcadeHub.setCookie("ArcadeHubSettings", JSON.stringify(ArcadeHubSettings), 32767);
                }
            } else {
                ArcadeHubSettings.panicKeyToggle = false;
                document.removeEventListener("keypress", ArcadeHub.Utils.panicKeyDetector);
                document.removeEventListener("keypress", ArcadeHub.Utils.panicKeyHandler);
                ArcadeHubSettings.panicKeyCode = -1;
                ArcadeHub.setCookie("ArcadeHubSettings", JSON.stringify(ArcadeHubSettings), 32767);
            }
            ArcadeHubSettings.panicKeyToggle = panicKeyToggle.checked;
            ArcadeHub.setCookie("ArcadeHubSettings", JSON.stringify(ArcadeHubSettings), 32767);
        });

        if (ArcadeHubSettings.jumpButton) {
            jumpToggle.checked = true;
            jumpButton.style = "display: block";
        }

        if (ArcadeHubSettings.cloakingToggle) {
            document.title = "Google Drive";
            document.getElementById("favicon").href = "https://www.gstatic.com/images/branding/product/2x/drive_48dp.png";
            cloakingToggle.checked = true;
            ArcadeHub.Utils.cloakPage();
        } else {
            document.title = "Arcade Hub v4";
            document.getElementById("favicon").href = "";
        }

        if (!ArcadeHub.getCookie("hasVisited")) {
            ArcadeHub.createPopup("Welcome to Arcade Hub!", `\
            Welcome to Arcade Hub, here we host tons of games, movies, proxies, and other cool content that we hope you'd enjoy!\n\
            If you see any issues or want to give any feedback, make a suggestion on our [Google Form](https://forms.gle/bQTVfmNK4pKtxk9W9) or on our [Github](https://github.com/arcadehubgaming/v4).\n\
        `);
        }

        if (lastVersion && String(lastVersion) !== String(ArcadeHub.currentVersion)) {
            ArcadeHub.createUpdatePopup("Update Changelog", ArcadeHub.updates);
        }

        ArcadeHub.setCookie("ArcadeHubSettings", JSON.stringify(ArcadeHubSettings), 32767);
    } catch (error) {
        if (document.cookie === "") {
            ArcadeHub.Utils.pushNotification("Please report this bug to the feedback section!");
        } else {
            ArcadeHub.Utils.pushNotification("Error detected, try clearing cookies by clicking here.", 5000, function () {
                ArcadeHub.Utils.deleteAllCookies();
                location.reload();
            });
        }
        setTimeout(() => {
            ArcadeHub.Utils.pushNotification("JavaScript " + error, 7000);
        }, 1000)
    }

});