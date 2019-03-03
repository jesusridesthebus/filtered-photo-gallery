function generateHtmlTemplate(animalImage) {
    const html = `<li>
    <h2>${animalImage.title}</h2>
    <img src=${animalImage.url}>
</li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default generateHtmlTemplate;
