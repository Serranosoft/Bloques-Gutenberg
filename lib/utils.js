function generateRandomId() {
    let charset = "abcdefghijklmnopqrstuvwxyz";
    let text = "";
    for (let i = 0; i < 5; i++) {
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return text;
}

function getAverage(elements) {
    let temp = 0;
    for(let i=0; i<elements.length; i++) {
        temp+=elements[i].rate
    }
    return Math.floor(temp / elements.length);
}

export {generateRandomId, getAverage}