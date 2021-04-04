import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createDir, fetchFiles} from "../../API/files";
import "../Disk/Disk.sass"
import FileList from "./FileList/FileList";
import Popup from "./Popup";
import {displayPopup} from "../../Reducers/fileReducer";

const Disk = () => {
    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.file.currentDir)

    React.useEffect(()=>{
        console.log(currentDir)
        dispatch(fetchFiles(currentDir))
    },[currentDir])

    function showPopup(){
        dispatch(displayPopup("flex"))
    }


    return (
        <div className="disc">
            <Popup currentDir={currentDir}/>
            <div className="disc__wrapper">
                <div className="disc__buttons">
                    <button className="button back"> Back </button>
                    <button className="button create" onClick={() => showPopup()}> Create a folder</button>
                </div>
                <FileList/>
            </div>
        </div>
    );
};

export default Disk;