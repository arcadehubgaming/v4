export default class PanicKeyHandler {
    constructor(notificationHandler, settingsHandler) {
        this.settingsHandler = settingsHandler;
        this.notificationHandler = notificationHandler;
        this.enabled = false;
        this.key = "`";

        this.boundPanicKeyHandler = this.panicKeyHandler.bind(this);
    }
    
    setKey(key) {
        this.settingsHandler.set("panicKey", key);
        this.key = key;
    }

    enable() {
        if (this.enabled) return;
        this.enabled = true;
        this.settingsHandler.set("panicKeyEnabled", true);
        document.addEventListener("keydown", this.boundPanicKeyHandler);
        this.notificationHandler.add("Panic key enabled & set as: " + this.key, "success");
    }
    
    toggle() {
        if (this.enabled) {
            this.disable();
        } else {
            this.enable();
        }
    }

    panicKeyHandler(event) {
        if (event.key === this.key) {
            let win = window.open();
            win.location.href = this.settingsHandler.get("panicKeyUrl") || "https://www.google.com";
            win.focus();
            const interval = setInterval(function () {
                if (win.closed) {
                    clearInterval(interval);
                    win = undefined;
                }
            }, 500);
            this.notificationHandler.add("Panic key pressed!");
        }
    }

    disable() {
        if (!this.enabled) return;
        this.notificationHandler.add("Panic key disabled");
        this.settingsHandler.set("panicKeyEnabled", false);
        document.removeEventListener("keydown", this.boundPanicKeyHandler);
        this.enabled = false;
    }
}
