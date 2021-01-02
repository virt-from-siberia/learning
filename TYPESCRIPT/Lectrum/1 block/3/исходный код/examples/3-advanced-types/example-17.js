var Library = /** @class */ (function () {
    function Library() {
    }
    return Library;
}());
var library = new Library();
var shortTitles = library.titles.filter(function (title) { return title.length < 5; });
