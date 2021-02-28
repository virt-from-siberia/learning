//Tools
import { startFetching, stopFetching, fill, setFetchingError } from '../../actions';

//Types
import { Starships } from '../../types';

//Workers
import { makeRequestWithSpiner } from '../../../../workers'

//Api
import { api } from '../../../../api'

export function* fetchStarships(): Generator {
    const options = {
        fetcher: api.starships.fetch,
        startFetching,
        stopFetching,
        fill,
        setErrorAction: setFetchingError
    };
    yield makeRequestWithSpiner<Starships>(options)
}