interface IDataService {
    getData(): unknown;
}

let service: IDataService = {
    getData() {
        return 'some text';
    }
}

const response = service.getData();

if (Array.isArray(response)){
    response.indexOf(1);
}

if (typeof response === 'string') {
    console.log(response.toUpperCase());
}
