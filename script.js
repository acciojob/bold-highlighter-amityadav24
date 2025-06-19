function highlight() {
    const boldElements = document.querySelectorAll('strong');
    boldElements.forEach(el => {
        el.style.color = 'rgb(0, 128, 0)';
    });
}

function return_normal() {
    const boldElements = document.querySelectorAll('strong');
    boldElements.forEach(el => {
        el.style.color = 'rgb(0, 0, 0)';
    });
}
