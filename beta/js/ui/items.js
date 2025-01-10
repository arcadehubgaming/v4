export default class ItemUI {
    constructor(items, settingsHandler) {
        this.games = items.Games;
        this.movies = items.Movies;
        this.proxies = items.Proxies;

        this.settingsHandler = settingsHandler;
        this.populate(this.games);
    }

    openURL(url) {
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

    populate(list) {
        var container = document.getElementById("list-container");

        var favorites = this.settingsHandler.get("favorites");
        if (!favorites) {
            this.settingsHandler.set("favorites", JSON.stringify([]));
            favorites = this.settingsHandler.get("favorites");
        }

        favorites = eval(favorites);

        list.sort((a, b) => {
            if (favorites.includes(a.name) === favorites.includes(b.name)) {
                return a.name.localeCompare(b.name);
            }
            return favorites.includes(b.name) - favorites.includes(a.name);
        });

        list.forEach(element => {
            var item = document.createElement("div");
            item.className = "item-container";

            var title = document.createElement("span");
            title.innerHTML = element.name;

            var seperator = document.createElement("div");
            seperator.className = "seperator";

            var favoritebtn = document.createElement("div");
            if (favorites.includes(element.name)) {
                favoritebtn.className = "favorite-button active";
            } else {
                favoritebtn.className = "favorite-button";
            }
            favoritebtn.innerHTML = `<i class="fa fa-star"></i>`;

            var playbtn = document.createElement("div");
            playbtn.className = "button";
            playbtn.innerHTML = "Play Now";

            favoritebtn.addEventListener("click", () => {
                favorites.push(element.name);
                this.settingsHandler.set("favorites", JSON.stringify(favorites));
                this.populate();
            });

            playbtn.addEventListener("click", () => {
                if (element.noaboutblank) {
                    window.open(element.url, '_blank').focus();
                } else {
                    this.openURL(element.url);
                }
            });

            item.appendChild(title);
            item.appendChild(seperator);
            item.appendChild(favoritebtn);
            item.appendChild(playbtn);

            container.appendChild(item);
        });
    }
};