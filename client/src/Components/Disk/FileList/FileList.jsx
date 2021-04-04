import React from 'react';
import "./FileList.sass"
import {useSelector} from "react-redux";
import File from "./File/File";

const FileList = () => {

    const files = useSelector(state => state.file.files)
        .map(file => <File key={file.id} name={file.name} type={file.type} size={file.size} date={file.date}/>)

    return (
        <div className="file-list">
            <div className="file-list__header">
                <div className="file-list__name">Name</div>
                <div className="file-list__date">Date</div>
                <div className="file-list__size">Size</div>
            </div>
            {files}
        </div>
    );
};

export default FileList;