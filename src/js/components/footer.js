import "/src/css/foot.scss"

const el = `
    <div class="footer-left">
        <picture class="footer-img">
            <img src="/img/logo-black.svg" alt="ResQ Systems"/>
        </picture>

        <p class="footer-text">Joining our mailing list</p>

        <form class="footer-form" onSubmit="return false;">
            <input type="email" id="email" placeholder="someone@example.com"/><br/>
            <input type="submit" id="submit" value="Subscribe"/>
        </form>
    </div>
    <div class="footer-right">
        <a href="mission.html"><p>Our mission</p></a>
        <hr/>
        <a href="tel:+447478227150"><p>+44 7478 227150</p></a>
        <hr/>
        <a href="mailto:info@resq.systems"><p>info@resq.systems</p></a>
        <hr/>
        <p>Sheffield, United Kingdom</p>
    </div>`;

class ResQFooter extends HTMLElement {
    constructor() {
        super();
        const footer = document.createElement('footer');
        footer.innerHTML = el;
        this.appendChild(footer);
    }
}

export default {name:"page-footer", component: ResQFooter};