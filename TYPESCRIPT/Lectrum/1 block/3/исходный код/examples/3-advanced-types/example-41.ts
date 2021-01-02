interface IComment {
    date: Date;
    message: string;
}

interface IDataService {
    getData(): unknown;
}

let service: IDataService = {
    getData() {
        return 'some text';
    }
}

const response = service.getData();

if (typeof response === 'string') {
    console.log(response.toUpperCase());
} else if(isComment(response)) {
    console.log(response.date);
    console.log(response.message);
}

function isComment(type: any): type is IComment {
    return (<IComment>type).message !== undefined
        && (<IComment>type).date !== undefined;
}
