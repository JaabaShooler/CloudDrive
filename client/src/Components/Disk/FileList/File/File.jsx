import React from 'react';
import folder from "../../../../Folder.svg"
import file from "../../../../File.svg"
import "./FileStyles.sass"
import {useDispatch, useSelector} from "react-redux";
import {pushToStack, setCurrentDir} from "../../../../Reducers/fileReducer";

const File = (props) => {

    const currentDir = useSelector(state => state.file.currentDir)
    const dispatch = useDispatch();

    function openFolderHandler(){
        console.log(props.id)
        dispatch(pushToStack(currentDir));
        dispatch(setCurrentDir(props.id));
    }

    return (
        <div className="file" onClick={props.type === "dir" ? () => openFolderHandler() : ""}>
            <div className="file__data">
                <img src={ props.type === "dir" ? folder : file } className="file__img" alt="File or Folder"/>
                <div className="file__name">{props.name}</div>
                <div className="file__date">{props.date.slice(0,10)}</div>
                <div className="file__size">{props.size}</div>
            </div>
        </div>
    );
};

export default File;