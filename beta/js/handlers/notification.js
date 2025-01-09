export default class NotificationHandler {
    constructor() {
        this.notifications = [];
        this.idCounter = 0;
    }

    update() {
        const holder = document.getElementById("notification-holder");
        holder.innerHTML = "";

        this.notifications.forEach(notification => {
            const div = document.createElement("div");
            div.classList.add("notification");
            if (notification.type) {
                div.classList.add(notification.type);
            }
            div.textContent = notification.content;

            holder.appendChild(div);

            setTimeout(() => {
                div.style.animation = `slide-out 0.5s ease forwards`;
                setTimeout(() => this.remove(notification.id), 500);
            }, notification.duration);
        });
    }

    add(content, type = null, duration = 3000) {
        const id = ++this.idCounter;
        this.notifications.push({ id, content, duration, type });
        this.update();
    }

    remove(id) {
        this.notifications = this.notifications.filter(n => n.id !== id);
        this.update();
    }
}
