import constants from './constants';

export function addDay(resort, date, powder=false, backcountry= false) {
    return {
        type: constants.ADD_DAY,
        payload: {resort, date, powder, backcountry}
    }
}

export const removeDay = function(date) {
    return {
        type: constants.REMOVE_DAY,
        payload: date
    }
}

export const setGoal = (goal = 18) => {
    return {
        type: constants.SET_GOAL,
        payload: goal
    }
}

export const addError = (error) => {
    return {
        type: constants.ADD_ERROR,
        payload: error
    }
}

export const clearError = (index) => {
    return {
        type: constants.CLEAR_ERROR,
        payload: 0
    }
}

export const changeSuggestions = (suggestions) => {
    return {
        type: constants.CHANGE_SUGGESTIONS,
        payload: suggestions
    }
}

export const clearSuggestions = () => {
    return {
        type: constants.CLEAR_SUGGESTIONS,
        payload: []
    }
}

export const randomGoals = () => (dispatch, getState) => {

	if (!getState.resortNames.fetching) {

		dispatch({
			type: constants.FETCH_RESORT_NAMES
		})

		setTimeout(() => {

			dispatch({
				type: constants.CANCEL_FETCHING
			})

		}, 1500)

	}

}