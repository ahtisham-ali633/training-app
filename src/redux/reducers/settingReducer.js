import {NATIONALITY_SET} from "../types/SettingTypes";

const initialState = {
    nationality: ""
}

const settingReducer = (state=initialState, action) => {
    switch (action.type) {
        case NATIONALITY_SET:
            return {
                ...state,
                nationality: action.payload
            }
        default: return state
    }
}

export default settingReducer