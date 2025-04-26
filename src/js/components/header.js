const el = `
        <div class="navbar" id="navbar">
            <div class="logo-link">
                <a href="index.html">
                    <img src="/img/logo-white-orange.svg" alt="ResQ Systems" />
                </a>
            </div>
            <ul class="nav-links" id="navlinks">
                <li><a href="mission.html">Mission</a></li>
                <li><a href="ranger.html">Ranger</a></li>
                <li><a href="ground.html">Ground Station</a></li>
                <li><a href="connect.html">Connect</a></li>
            </ul>
            <a href="javascript:void(0);" class="icon" id="nav-button">
                <span class="material-symbols-outlined">
                    menu
                </span>
            </a>
        </div>
        <div class="mobile-nav" id="mobile-nav">
            <div class="mobile-navlinks">
                <li><a href="mission.html">Mission</a></li>
                <hr />
                <li><a href="ranger.html">Ranger</a></li>
                <hr />
                <li><a href="ground.html">Ground Station</a></li>
                <hr />
                <li><a href="connect.html">Connect</a></li>
            </div>
            <a href="javascript:void(0)" class="closebtn">&times;</a>
        </div>`;

class ResQHeader extends HTMLElement {
    constructor() {
        super();
        const header = document.createElement('header');
        header.classList.add('nav');
        header.innerHTML = el;
        this.appendChild(header);
    }
}

export default {name:"page-header", component: ResQHeader};