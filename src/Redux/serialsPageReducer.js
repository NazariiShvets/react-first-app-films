import {
    SET_AIRING_TODAY_TVS_TO_SLIDER,
    SET_INITIAL_STATE_TO_SERIALS, SET_ON_AIR_TVS_TO_SLIDER,
    SET_POPULAR_TVS_TO_SLIDER, SET_TOP_RATED_TVS_TO_SLIDER,
    TOGGLE_IS_SERIALS_FETCHING
} from './Constants'
import {filmAPI} from '../api/filmAPI'


const initialState = {
    tvsPopularToSlider: [],
    tvsTopRatedToSlider: [],
    tvsOnAirToSlider: [],
    tvsAiringTodayToSlider: [],
    isFetching: true,
}


const serialsPageReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_INITIAL_STATE_TO_SERIALS :
            return {...initialState}
        case TOGGLE_IS_SERIALS_FETCHING :
            return {...state, isFetching: payload}
        case SET_POPULAR_TVS_TO_SLIDER :
            return {...state, tvsPopularToSlider: payload}
        case SET_AIRING_TODAY_TVS_TO_SLIDER:
            return {...state, tvsAiringTodayToSlider: payload}
        case SET_ON_AIR_TVS_TO_SLIDER :
            return {...state, tvsOnAirToSlider: payload}
        case SET_TOP_RATED_TVS_TO_SLIDER:
            return {...state, tvsTopRatedToSlider: payload}
        default :
            return state
    }
}

const toggleIsFetching = bool => ({type: TOGGLE_IS_SERIALS_FETCHING, payload: bool})
const setPopularTvsToSlider = tvs => ({type: SET_POPULAR_TVS_TO_SLIDER, payload: tvs})
const setTopRatedTvsToSlider = tvs => ({type: SET_TOP_RATED_TVS_TO_SLIDER, payload: tvs})
const setOnAirTvsToSlider = tvs => ({type: SET_ON_AIR_TVS_TO_SLIDER, payload: tvs})
const setAiringTodayTvsToSlider = tvs => ({type: SET_AIRING_TODAY_TVS_TO_SLIDER, payload: tvs})
export const setInitialStateToSerials = () => ({type: SET_INITIAL_STATE_TO_SERIALS})

export const getTvs = (page) => async dispatch => {
    dispatch(toggleIsFetching(true))
    const topRatedTvs = await filmAPI.getTopRatedTvs(page)
    const popularTvs = await filmAPI.getPopularTvs(page)
    const airingTodayTvs = await filmAPI.getAiringTodayTvs(page)
    const onAirTvs = await filmAPI.getOnAirTvs(page)
    dispatch(setTopRatedTvsToSlider(topRatedTvs.results))
    dispatch(setPopularTvsToSlider(popularTvs.results))
    dispatch(setOnAirTvsToSlider(onAirTvs.results))
    dispatch(setAiringTodayTvsToSlider(airingTodayTvs.results))
    dispatch(toggleIsFetching(false))
}

export default serialsPageReducer