interface IDataService {
    getData(): any
}

let service: IDataService = {
    getData() {
        return 1;
    }
}

const response = service.getData();

response.indexOf(1);

// if (typeof response === 'string') {
    console.log(response.toUpperCase());
// }
