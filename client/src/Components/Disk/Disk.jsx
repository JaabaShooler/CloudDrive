import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createDir, fetchFiles} from "../../API/files";
import "../Disk/Disk.sass"
import FileList from "./FileList/FileList";
import Popup from "./Popup";
import {displayPopup, setCurrentDir} from "../../Reducers/fileReducer";

const Disk = () => {
    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.file.currentDir)
    const dirStack = useSelector(state => state.file.dirStack)

    React.useEffect(()=>{
        console.log(currentDir)
        dispatch(fetchFiles(currentDir))
    },[currentDir])

    function showPopup(){
        dispatch(displayPopup(1))
    }

    function backHandler(){
        const i = dirStack.pop();
        dispatch(setCurrentDir(i));
    }


    return (
        <div className="disc">
            <Popup currentDir={currentDir}/>
            <div className="disc__wrapper">
                <div className="disc__buttons">
                    <button className="button back" onClick={() => backHandler() }  disabled={currentDir ? "" : "disabled"}> Back </button>
                    <button className="button create" onClick={() => showPopup()}> Create a folder</button>
                </div>
                <FileList/>
            </div>
        </div>
    );
};

export default Disk;