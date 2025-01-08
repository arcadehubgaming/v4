import SettingsHandler from "./handlers/settings.js"

export default class ArcadeHubApp {
    constructor() {
        this.settingsHandler = new SettingsHandler();
        this.settingsHandler.load();

        this.theme = this.settingsHandler.get("theme") || "light";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    new ArcadeHubApp();
});