class AreaParser {
    parse(area) {
        const parsedArea = this.splitRows(area);
        parsedArea.shift();
        return this.splitElements(parsedArea)
    }

    splitRows(area) {
        return area.replace(/\r/g, "").split(/\n/);
    }

    splitElements(area) {
        return area.map(row => row.split(''));
    }
}

module.exports = AreaParser;