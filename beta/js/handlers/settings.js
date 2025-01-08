export default class SettingsHandler {
    constructor () {
        this.settings = {};
    }

    update () {
        localStorage.setItem("settings", JSON.stringify(this.settings));
    }

    load () {
        this.settings = JSON.parse(localStorage.getItem("settings"));
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
        if (this.settings[name]) {
            return this.settings[name];
        }

        return undefined;
    }
};