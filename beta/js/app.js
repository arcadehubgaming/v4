import SettingsHandler from "./handlers/settings.js"
import NotificationHandler from "./handlers/notification.js"
import EventHandler from "./handlers/events.js"

import SettingsModal from "./ui/settings_modal.js"

export default class ArcadeHubApp {
    constructor() {
        this.app = document.getElementById("root");

        this.settingsHandler = new SettingsHandler();
        this.settingsHandler.load();

        EventHandler.subscribe("settingsChange", this.onSettingChange.bind(this));

        if (!this.settingsHandler.get("theme")) {
            this.settingsHandler.set("theme", "light");
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.settingsHandler.set("theme", "dark");
            }
        }

        this.app.classList.add("theme-" + this.settingsHandler.get("theme"));

        this.notificationHandler = new NotificationHandler();
        this.notificationHandler.add("hi");

        this.settingsModal = new SettingsModal(this.settingsHandler, this.notificationHandler);
        this.settingsModal.open();

        document.getElementById("reset-cdn-list").addEventListener("click", () => {
            this.notificationHandler.add("CDN list has been reset", "success");
        });
    }

    onSettingChange() {
        this.app.className = "";
        this.app.classList.add("theme-" + this.settingsHandler.get("theme"));
    }
};

document.addEventListener("DOMContentLoaded", () => {
    window.app = new ArcadeHubApp();
});