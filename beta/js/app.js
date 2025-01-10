import SettingsHandler from "./handlers/settings.js"
import NotificationHandler from "./handlers/notification.js"
import EventHandler from "./handlers/events.js"

import SettingsModal from "./ui/settings_modal.js"
import ItemsUI from "./ui/items.js"

window.ArcadeHubItems = window.ArcadeHubSettings || {};

export default class ArcadeHubApp {
    constructor() {
        this.app = document.getElementById("root");

        this.settingsHandler = new SettingsHandler();
        this.settingsHandler.load();

        if (!this.settingsHandler.get("theme")) {
            this.settingsHandler.set("theme", "light");
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.settingsHandler.set("theme", "dark");
            }
        }

        this.app.classList.add("theme-" + this.settingsHandler.get("theme"));

        this.notificationHandler = new NotificationHandler();

        this.loadCDN().then(() => {
            this.items = new ItemsUI(ArcadeHubItems, this.settingsHandler);

            EventHandler.subscribe("settingsChange", this.onSettingChange.bind(this));

            this.settingsModal = new SettingsModal(this.settingsHandler, this.notificationHandler);
            this.settingsModal.open();

            document.getElementById("reset-cdn-list").addEventListener("click", () => {
                this.loadCDN();
                this.items.populate();
            });
        }).catch(error => {
            this.notificationHandler.add("Failed to load CDN, please ensure connection to the internet and retry!", "error");
        });
    }

    onSettingChange() {
        this.app.className = "";
        this.app.classList.add("theme-" + this.settingsHandler.get("theme"));
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
