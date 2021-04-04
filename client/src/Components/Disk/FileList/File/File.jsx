import React from 'react';
import folder from "../../../../Folder.png"
import file from "../../../../File.png"
import "./FileStyles.sass"

const File = (props) => {
    return (
        <div className="file">
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