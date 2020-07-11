class AreaValidator {
    static valid(initArea, parsedArea) {
        const [rows, rowElements] = initArea.replace(/\r/g, "").split(/\n/)[0].split(/\s/);
        
        if ((parsedArea.length) != rows) return false // or throw Error(`Invalid number of rows ${parsedArea.length - 1}. Should be: ${rows}`)

        parsedArea.forEach((row, index) => {
            if (row.length != rowElements) return false; // or throw Error(`Invalid number of elements in row. Should be: ${rowElements}`)
        });

        return true;
    }
}

module.exports = AreaValidator;