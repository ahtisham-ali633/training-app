export const NATIONALITY_SET = "NATIONALITY_SET";

export const settingAction = (nationality) => async (dispatch) => {
    dispatch({
        type: NATIONALITY_SET,
        payload: nationality
    })
}