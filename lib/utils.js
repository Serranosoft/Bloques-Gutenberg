function generateRandomId() {
    let charset = "abcdefghijklmnopqrstuvwxyz";
    let text = "";
    for (let i = 0; i < 5; i++) {
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return text;
}

export {generateRandomId}