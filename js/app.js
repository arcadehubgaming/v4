import SettingsHandler from "./handlers/settings.js"
import NotificationHandler from "./handlers/notification.js"
import EventHandler from "./handlers/events.js"
import PanicKeyHandler from "./handlers/panickey.js"

import SettingsModal from "./ui/settings_modal.js"
import ItemsUI from "./ui/items.js"
import AddItemModal from "./ui/add_item_modal.js"

window.ArcadeHubItems = window.ArcadeHubSettings || {};

export default class ArcadeHubApp {
    constructor() {
        this.app = document.getElementById("root");

        this.settingsHandler = new SettingsHandler();
        this.notificationHandler = new NotificationHandler();
        this.settingsHandler.load();

        this.panicKeyHandler = new PanicKeyHandler(this.notificationHandler, this.settingsHandler);

        if (this.settingsHandler.get("panicKeyEnabled")) {
            document.getElementById("panic-key-toggle").checked = true;
            this.panicKeyHandler.enable();
        }

        if (this.settingsHandler.get("panicKeyUrl")) {
            document.getElementById("panic-key-url").value = this.settingsHandler.get("panicKeyUrl");
        }

        if (this.settingsHandler.get("panicKey")) {
            document.getElementById("panic-key").value = this.settingsHandler.get("panicKey");
        }

        if (!this.settingsHandler.get("theme")) {
            this.settingsHandler.set("theme", "light");
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.settingsHandler.set("theme", "dark");
            }
        }

        this.app.classList.add("theme-" + this.settingsHandler.get("theme"));

        this.settingsModal = new SettingsModal(this.settingsHandler, this.notificationHandler);

        document.addEventListener("scroll", function () {
            const icon = document.getElementById("float-arrow-icon");

            if (window.scrollY < 100) {
                icon.classList.remove('flipped');
            } else {
                icon.classList.add('flipped');
            }
        });

        document.getElementById("settings-button").addEventListener("click", () => {
            this.settingsModal.open();
        });

        document.getElementById("jump-button").addEventListener("click", function () {
            const scrollPosition = window.scrollY;
            const docHeight = document.documentElement.scrollHeight;

            if (scrollPosition < 100) {
                window.scrollTo({ top: docHeight, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });

        document.getElementById("search").addEventListener("input", () => {
            this.items.populate(ArcadeHubItems);
        });

        var toggles = document.querySelectorAll(".topbar-toggle");
        toggles.forEach(element => {
            element.addEventListener("click", (event) => {
                if (element.querySelector("span").textContent === "Feedback") {
                    return;
                }
                toggles.forEach(toggle => toggle.classList.remove("topbar-toggle-selected"));
                event.currentTarget.classList.add("topbar-toggle-selected");
                this.items.populate(ArcadeHubItems);
            });
        });

        document.getElementById("panic-key-toggle").addEventListener("click", () => {
            this.panicKeyHandler.toggle();
        });

        document.getElementById("panic-key").addEventListener("blur", (event) => {
            this.panicKeyHandler.setKey(event.target.value);
            this.notificationHandler.add("Panic key set as: " + event.target.value, "success");
        });

        document.getElementById("panic-key-url").addEventListener("input", (event) => {
            this.settingsHandler.set("panicKeyUrl", event.target.value);
        });

        this.loadCDN().then(() => {
            this.items = new ItemsUI(ArcadeHubItems, this.notificationHandler, this.settingsHandler);
            this.addItemModal = new AddItemModal(this.items, this.settingsHandler, this.notificationHandler);

            EventHandler.subscribe("settingsChange", this.onSettingChange.bind(this));

            document.getElementById("reset-cdn-list").addEventListener("click", () => {
                this.loadCDN();
                this.items.populate(ArcadeHubItems);
            });
        }).catch(error => {
            this.notificationHandler.add("Failed to load CDN, please ensure connection to the internet and retry!", "error");
        });
    }

    onSettingChange() {
        this.app.className = "";
        this.app.classList.add("theme-" + this.settingsHandler.get("theme"));

        if (!this.settingsHandler.get("panicKeyEnabled")) {
            this.panicKeyHandler.enable();
        }
    }

    async fetchScript(url) {
        var isError = false;
        try {
            const response = await fetch(url + "?" + Math.random());
            const data = await response.text();
            const script = document.createElement("script");
            script.innerHTML = data;
            document.body.appendChild(script);
        } catch (error) {
            console.error(error);
            isError = true;
            throw new Error("Error fetching script");
        }
    }

    async loadCDN() {
        let gamesFetched = false;
        let moviesFetched = false;
        let proxiesFetched = false;

        try {
            await Promise.all([
                this.fetchScript("https://raw.githubusercontent.com/arcadehubgaming/cdn-list/refs/heads/main/games.js"),
                this.fetchScript("https://raw.githubusercontent.com/arcadehubgaming/cdn-list/refs/heads/main/movies.js"),
                this.fetchScript("https://raw.githubusercontent.com/arcadehubgaming/cdn-list/refs/heads/main/proxies.js")
            ]);
            gamesFetched = true;
            moviesFetched = true;
            proxiesFetched = true;
            this.notificationHandler.add("CDN successfully fetched!", "success");
        } catch (error) {
            this.notificationHandler.add("Fetch failed, please ensure connection to the internet and retry!", "error");
            throw error;
        }

        if (!gamesFetched || !moviesFetched || !proxiesFetched) {
            this.notificationHandler.add("Fetch failed, please ensure connection to the internet and retry!", "error");
            throw new Error("CDN fetch failed");
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    window.app = new ArcadeHubApp();
});
