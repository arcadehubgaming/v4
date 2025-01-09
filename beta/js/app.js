import SettingsHandler from "./handlers/settings.js"
import NotificationHandler from "./handlers/notification.js"
import EventHandler from "./handlers/events.js"

export default class ArcadeHubApp {
    constructor () {
        this.app = document.getElementById("root");

        this.settingsHandler = new SettingsHandler();
        this.settingsHandler.load();

        EventHandler.subscribe("settingsChange", this.onSettingChange);

        if (!this.settingsHandler.get("theme")) {
            this.settingsHandler.set("theme", "light");
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.settingsHandler.set("theme", "dark");
            }
        }

        this.app.classList.add("theme-" + this.settingsHandler.get("theme"));

        this.notificationHandler = new NotificationHandler();
        this.registerServiceWorker();
    }

    registerServiceWorker() {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/beta/sw.js")
                .then(() => {
                    this.notificationHandler.add("This site will now load in offline mode.", "success");
                })
                .catch((error) => {
                    this.notificationHandler.error("Service worker could not register. " + error, "error");
                });
        }
    }

    onSettingChange() {
        this.app.className = "";
        this.app.classList.add("theme-" + this.settingsHandler.get("theme"));
    }
};

document.addEventListener("DOMContentLoaded", () => {
    window.app = new ArcadeHubApp();
});