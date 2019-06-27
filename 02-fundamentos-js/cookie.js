const isLoyalty = () => {
    if (document.cookie.indexOf('loyaltyCookie') > 0) {
        const classes = ['.fb-masthead__promotional-links', '.fb-masthead__dropdown__link.js-masthead__dropdown__link'];
        classes
            .map(data => [].slice.call(document.querySelectorAll(data))[1])
            .filter(x => x)
            .forEach(el => {
                el.parentNode.removeChild(el)
            });
    }
}

isLoyalty();