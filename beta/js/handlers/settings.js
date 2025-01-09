import EventHandler from "./events.js"

export default class SettingsHandler {
    constructor () {
        this.settings = {};
    }

    update () {
        localStorage.setItem("settings", JSON.stringify(this.settings));
        EventHandler.dispatch("settingsChange");
    }

    load () {
        if (localStorage.getItem("settings")) {
            this.settings = JSON.parse(localStorage.getItem("settings"));
        }
    }

    clear () {
        this.settings = {};
        this.update();
    }

    set (name, value) {
        this.settings[name] = value;
        this.update();
    }

    get (name) {
        return this.settings[name];
    }
};