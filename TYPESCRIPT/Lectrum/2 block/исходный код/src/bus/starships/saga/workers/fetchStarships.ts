//Tools
import { startFetching, stopFetching, fill, setFetchingError } from '../../actions';

//Types
import { Starships } from '../../types';

//Workers
import { makeRequestWithSpinner } from '../../../../workers'

//Api
import { api } from '../../../../api'

export function* fetchStarships() {
    const options = {
        fetcher: api.starships.fetch,
        startFetching,
        stopFetching,
        fill,
        setErrorAction: setFetchingError
    };
    yield makeRequestWithSpinner<Starships>(options)
}