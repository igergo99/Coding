const stringLength = function (str) {
    if (typeof str !== 'string') {
        throw new Error('Szar van a palacsintában!!')
    }
    return str.length
}

function stringUpperCase(str) {
    return str.toUpperCase();
};

export { stringLength, stringUpperCase };