import { root } from './config'
import { Starships } from '../bus/starships/types';


export type FetchDataType<T> = () => Promise<T>

type APIFetchDataType = {
    starships: {
        fetch: FetchDataType<Starships>
    }
}

export const api: APIFetchDataType = {
    starships: {
        fetch: (): Promise<Starships> => fetch(`${root}/starships`, {
            method: 'GET',
        }).then((response) => response.json())
            .then(({ results }) => ({ results }))
    }
}

