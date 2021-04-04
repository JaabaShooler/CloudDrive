import React from 'react';
import Input from "../../Utils/Input/Input";
import "./Popup.sass"
import {useDispatch, useSelector} from "react-redux";
import {displayPopup} from "../../Reducers/fileReducer";
import {createDir} from "../../API/files";

const Popup = (props) => {
    const  [dirName, setDirName] = React.useState('');
    const display = useSelector(state => state.file.popupDisplay)
    const dispatch = useDispatch();

    function createFolder(){
        dispatch(createDir(props.currentDir, dirName));
        dispatch( displayPopup(0))
    }

    return (
        <div className="popup" onClick={()=> dispatch(displayPopup(0))} style={{opacity: display, zIndex: display == 0 ? -1 : 1000}}>
            <div className="popup__content" onClick={e => e.stopPropagation()}>
                <div className="popup__header">
                    <h3 className="popup__title">Create a new folder</h3>
                    <button className="button popup__close" onClick={()=> dispatch(displayPopup(0))} >X</button>
                </div>
                <Input value={dirName} setValue={setDirName} type="text" placeholder="Enter a name of new folder"/>
                <button className="button popup__create" onClick={() => createFolder()}>Create</button>
            </div>
        </div>
    );
};

export default Popup;