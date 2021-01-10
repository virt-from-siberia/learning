import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsync } from '../actions'
import { StarshipsState } from '../reducer';
import { AppState } from '../../../init/rootReducer';



export const useStarshipsFetch = (): StarshipsState => {

    const dispatch = useDispatch()
    const { data, isFetching, error } = useSelector<AppState, StarshipsState>((state) => state.starships)

    useEffect(() => {
        dispatch(fetchAsync())
    }, [dispatch])

    return {
        data,
        isFetching,
        error
    }
}


