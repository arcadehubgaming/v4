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
                const targetScrollTop = content.scrollHeight * (index) / settingsTabs.length;

                const speedMultiplier = 0.25;

                let start = content.scrollTop;
                let startTime = null;

                function smoothScroll(currentTime) {
                    if (!startTime) startTime = currentTime;
                    let elapsedTime = currentTime - startTime;
                    let progress = elapsedTime / (500 * speedMultiplier);
                    progress = Math.min(progress, 1);
                    content.scrollTop = start + (targetScrollTop - start) * progress;

                    if (progress < 1) {
                        window.requestAnimationFrame(smoothScroll);
                    }
                }

                window.requestAnimationFrame(smoothScroll);
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
        document.getElementById("settings-container").style.display = "none";
    }
}
