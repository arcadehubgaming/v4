export default class SettingsModal {
    constructor(settingsHandler, notificationHandler) {
        this.settingsHandler = settingsHandler;
        this.notificationHandler = notificationHandler;

        let sidebarItems = document.querySelectorAll(".sidebar-item");
        sidebarItems.forEach((item, index) => {
            item.addEventListener("click", () => {
                let sidebarItems = document.querySelectorAll(".sidebar-item");
                sidebarItems.forEach((item) => {
                    item.classList.remove("active");
                });

                item.classList.add("active");

                let settingsTabs = document.querySelectorAll(".settings-page");
                const content = document.querySelector(".settings-content");

                settingsTabs.forEach((tab) => {
                    tab.style.display = "none";
                });

                settingsTabs[index].style.display = "block";
            });
        });


        var themeSelector = document.getElementById("theme-selector");
        themeSelector.value = this.settingsHandler.get("theme");
        if (this.settingsHandler.get("isSystemValue") === "true") {
            themeSelector.value = "system-default";
        }
        themeSelector.addEventListener("change", (event) => {
            var theme = event.target.options[event.target.selectedIndex].value;
            if (theme === "system-default") {
                this.settingsHandler.set("theme", "light");
                this.settingsHandler.set("isSystemValue", "true");
                var isDark;
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    this.settingsHandler.set("theme", "dark");
                    isDark = true;
                }

                notificationHandler.add("Theme has been set to your system default: " + (isDark ? "Dark" : "Light") + " mode");
            } else {
                this.settingsHandler.set("theme", theme);
                this.settingsHandler.set("isSystemValue", "false");
            }
        });

        document.getElementById("settings-close").addEventListener("click", this.close);
    }

    open() {
        document.getElementById("settings-container").style.display = "flex";
    }

    close() {
        let sidebarItems = document.querySelectorAll(".sidebar-item");
        sidebarItems.forEach((item) => {
            item.classList.remove("active");
        });
        sidebarItems[0].classList.add("active");

        document.getElementById("settings-container").style.display = "none";
    }
}
