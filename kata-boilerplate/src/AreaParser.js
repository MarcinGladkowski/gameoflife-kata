class AreaParser {
    parse(area) {
        return this.splitToRows(area)
    }

    splitToRows(area) {
        return area.replace(/\r/g, "").split(/\n/);
    }
}

module.exports = AreaParser;