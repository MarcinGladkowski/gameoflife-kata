class AreaValidator {
    static valid(parsedArea) {
        const [rows, rowElements] = parsedArea[0].split(/\s/);

        if ((parsedArea.length - 1) != rows) return false // or throw Error(`Invalid number of rows ${parsedArea.length - 1}. Should be: ${rows}`)

        parsedArea.forEach((row, index) => {
            if (index == 0) return;
            if (row.length != rowElements) return false; // or throw Error(`Invalid number of elements in row. Should be: ${rowElements}`)
        });

        return true;
    }
}

module.exports = AreaValidator;