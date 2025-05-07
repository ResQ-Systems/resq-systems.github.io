
export function openSpec(evt, name) {
    let isOpen = document.getElementById(name).className.includes("open");
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" open", "");
    }

    let tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    if (!isOpen) {
        document.getElementById(name).className += " open";
        evt.currentTarget.className += " active";
    }
}