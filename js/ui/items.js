Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

export default class ItemUI {
    constructor(items, notificationHandler, settingsHandler) {
        this.games = items.Games;
        this.movies = items.Movies;
        this.proxies = items.Proxies;

        this.notificationHandler = notificationHandler;
        this.settingsHandler = settingsHandler;
        this.populate(ArcadeHubItems);
    }

    openURL(url) {
        if (this.settingsHandler.get("miniWindow")) {
            document.querySelector(".floating-media-container").style.display = "flex";
            document.querySelector(".floating-media-iframe").src = url;
            document.querySelector(".floating-media-iframe").focus();
            document.getElementById("floating-media-fullscreen").addEventListener("click", () => {
                document.querySelector(".floating-media-iframe").requestFullscreen();
            });
            document.getElementById("floating-media-close").addEventListener("click", () => {
                document.querySelector(".floating-media-container").style.display = "none";
                document.querySelector(".floating-media-iframe").src = "";
            });
        } else {
            var win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.src = url;
            win.document.body.appendChild(iframe);
            var interval = setInterval(function () {
                if (win.closed) {
                    clearInterval(interval);
                    win = undefined;
                }
            }, 500);
        }
    }

    populate(list) {
        var selectors = document.querySelectorAll(".topbar-toggle");
        var customItem = eval(this.settingsHandler.get("customItem")) || [];
        var displayedList = [];
        selectors.forEach(selector => {
            if (selector.classList.contains("topbar-toggle-selected")) {
                list = list[selector.querySelector("span").textContent];
                displayedList = [...list];
                displayedList = displayedList.filter(item =>
                    item.name.toLowerCase().includes(document.getElementById("search").value.toLowerCase())
                );

                customItem.forEach(element => {
                    if (element.type.toLowerCase() === selector.querySelector("span").textContent.toLowerCase()) {
                        displayedList.push(element);
                    }
                });
            }
        });

        var container = document.getElementById("list-container");
        container.innerHTML = "";

        container.className = "";
        if (this.settingsHandler.get("gridView")) {
            container.className = "grid";
        }

        var favorites = this.settingsHandler.get("favorites");
        if (!favorites) {
            this.settingsHandler.set("favorites", JSON.stringify([]));
            favorites = this.settingsHandler.get("favorites");
        }

        favorites = eval(favorites);

        displayedList.sort((a, b) => {
            if (favorites.includes(a.name) === favorites.includes(b.name)) {
                return a.name.localeCompare(b.name);
            }
            return favorites.includes(b.name) - favorites.includes(a.name);
        });

        displayedList.forEach(element => {
            var item = document.createElement("div");
            item.className = "item-container";

            var title = document.createElement("span");
            title.innerHTML = element.name;

            var seperator = document.createElement("div");
            seperator.className = "seperator";

            var trashbtn = document.createElement("div");
            trashbtn.className = "trash-button";
            trashbtn.innerHTML = `<i class="fa fa-trash"></i>`;

            var favoritebtn = document.createElement("div");
            if (favorites.includes(element.name)) {
                favoritebtn.className = "favorite-button active";
            } else {
                favoritebtn.className = "favorite-button";
            }
            favoritebtn.innerHTML = `<i class="fa fa-star"></i>`;

            var playbtn = document.createElement("div");
            playbtn.className = "button play-button";
            playbtn.innerHTML = "Play Now";

            trashbtn.addEventListener("click", () => {
                const index = customItem.findIndex(citem => citem.name === element.name);
                if (index > -1) {
                    customItem.splice(index, 1);
                }

                this.settingsHandler.set("customItem", JSON.stringify(customItem));

                this.notificationHandler.add("Item removed: " + element.name);
                this.populate(ArcadeHubItems);
            });

            favoritebtn.addEventListener("click", () => {
                if (favoritebtn.classList.contains("active")) {
                    favorites.remove(element.name);
                } else {
                    if (!favorites.includes(element.name)) {
                        favorites.push(element.name);
                    }
                }
                this.settingsHandler.set("favorites", JSON.stringify(favorites));
                favoritebtn.classList.toggle("active");

                this.populate(ArcadeHubItems);
            });

            playbtn.addEventListener("click", () => {
                if (element.noaboutblank) {
                    window.open(element.url, '_blank').focus();
                } else {
                    this.openURL(element.url);
                }
            });

            var buttonContainer = document.createElement("div");
            buttonContainer.className = "button-container";

            item.appendChild(title);
            item.appendChild(seperator);
            if (customItem.some(citem => citem.name === element.name)) {
                buttonContainer.appendChild(trashbtn);
            }
            buttonContainer.appendChild(favoritebtn);
            buttonContainer.appendChild(playbtn);

            item.appendChild(buttonContainer);

            container.appendChild(item);
        });
    }
};
