export default class AddItemModal {
    constructor(items, settingsHandler, notificationHandler) {
        this.modal = document.getElementById("add-item-container");
        this.items = items;
        this.settingsHandler = settingsHandler;
        this.notificationHandler = notificationHandler;

        document.getElementById("add-item-button").addEventListener("click", () => {
            this.open();
        });

        document.getElementById("add-item-close").addEventListener("click", () => {
            this.close();
        });

        document.getElementById("add-item-submit").addEventListener("click", () => {
            this.submit();
        });
    }

    open() {
        this.modal.style = "display: flex";
    }

    close() {
        this.modal.style = "display: none";
    }

    submit() {
        const name = document.getElementById("add-item-name").value;
        const url = document.getElementById("add-item-url").value;
        const type = document.getElementById("add-item-type").value;

        var valid = true;

        try {
            new URL(url);
        } catch (e) {
            valid = false;
        }

        if (name && url && type) {
            if (valid) {
                var media = eval(this.settingsHandler.get("customItem")) || [];
                media.push({ type, name, url });
                this.settingsHandler.set("customItem", JSON.stringify(media));
                this.notificationHandler.add("Item added: " + name);
                this.close();
                this.items.populate(ArcadeHubItems);
            } else {
                this.notificationHandler.add("Please enter a valid URL!", "error");
            }
        } else {
            this.notificationHandler.add("Please fill out all fields!", "error");
        }
    }
};