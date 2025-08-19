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

// const list = document.querySelector('[data-list]');
// //const link = document.querySelector('.navbar-nav');
// //console.log(link);
//
// list.addEventListener("click", function (e) {
//     console.log(e.target);
//     console.log(window.location.pathname );
//     //element.classList.add('new-class');
//     const element = e.target;
//     element.classList.toggle('active');
// });