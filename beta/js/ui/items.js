export default class ItemUI {
    constructor(items, settingsHandler) {
        this.games = items.Games;
        this.movies = items.Movies;
        this.proxies = items.Proxies;

        this.settingsHandler = settingsHandler;
        this.populate(this.games);
    }

    populate(list) {
        var container = document.getElementById("list-container");

        list.forEach(element => {
            var item = document.createElement("div");
            item.className = "item-container";

            var title = document.createElement("span");
            title.innerHTML = element.name;

            var seperator = document.createElement("div");
            seperator.className = "seperator";

            var favoritebtn = document.createElement("div");
            favoritebtn.className = "favorite-button";
            favoritebtn.innerHTML = `<i class="fa fa-star"></i>`;

            var playbtn = document.createElement("div");
            playbtn.className = "button";
            playbtn.innerHTML = "Play Now";
            
            item.appendChild(title);
            item.appendChild(seperator);
            item.appendChild(favoritebtn);
            item.appendChild(playbtn);

            container.appendChild(item);
        });
    }
};