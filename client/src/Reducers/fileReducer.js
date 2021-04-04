const SET_FILES =  "SET_FILES";
const SET_CURRENT_DIR =  "SET_CURRENT_DIR";
const ADD_FILE = "ADD_FILE";
const POPUP_DISPLAY = "POPUP_DISPLAY";


const defaultState = {
    files: [],
    currentDir: null,
    popupDisplay: "none"
}


export default  function fileReducer(state = defaultState, action){
    switch (action.type){
        case SET_FILES:
            return {
                ...state,
                files: action.payload
            }
        case SET_CURRENT_DIR: return {...state, currentDir: action.payload}
        case ADD_FILE: return {...state, files: [...state.file, action.payload]}
        case POPUP_DISPLAY: return {...state, popupDisplay: action.payload}
        default:
            return state
    }
}

export const setFiles = (files) => ({type: SET_FILES, payload: files})
export const addFile = file => ({type: ADD_FILE, payload: file})
export const setCurrentDir = (dir) => ({type: SET_CURRENT_DIR, payload: dir})
export const displayPopup = display => ({type: POPUP_DISPLAY, payload: display})