class Library {
    titles: string[] | undefined;

    constructor() {}
}

const library = new Library();

if(library.titles) {
    const shortTitles = library.titles.filter(
        title => title.length < 5
    );
}