const formNode = document.getElementById('filter-list');

function loadFilters(callback) {
    formNode.addEventListener('submit', event => {
        event.preventDefault();
    
        const formData = new FormData(formNode);
    
        let horns = 0;
        const hornsInput = formData.get('horns');
        if(hornsInput) {
            horns = parseInt(hornsInput);
        }
    
        const filter = {
            keyword: formData.get('keyword'),
            horns: horns
        };
    
        callback(filter);
    });
}

export function filterImages(images, filter) {
    return images.filter(function(image) {
        const hasKeyword = !filter.keyword || image.keyword === filter.keyword;

        const hasHorns = !filter.horns || image.horns === filter.horns;
    
        return hasKeyword && hasHorns;

    });
}