class AreaParser {
    parse(area) {
        const parsedArea = area.replace(/\r/g, "").split(/\n/);
        parsedArea.shift();
        const moreParsed = parsedArea.map(row => row.split(''));
        return moreParsed;
    }
}

module.exports = AreaParser;