const removeFromArray = function(arr, ...selection) {
    for (let i = 0; i < selection.length; i ++){
        const index = arr.indexOf(selection[i]);
        if (index > -1) {
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
