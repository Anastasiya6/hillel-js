class Navigation {

    constructor() {
        this.list = document.querySelector('[data-list]');
        this.list.addEventListener('click',this.update);
        this.updateUrl(window.location.pathname);
        window.addEventListener('popstate', () => {
            this.updateActive(window.location.pathname);
        });
    }

    update = (e) => {
        e.preventDefault();
        const url = e.target.getAttribute('href');
        this.updateUrl(url);
        this.updateActive(url);
    }

    updateActive(pathUrl) {
        this.list.querySelectorAll('a').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === pathUrl);
        });
    }

    updateUrl(url) {
        const linkPath = new URL(url, window.location.origin).pathname;
        history.pushState({state: linkPath}, '', linkPath);
    }

}

const nav = new Navigation();