import axios from "axios";
import {addFile, setFiles} from "../Reducers/fileReducer";

export  function fetchFiles(dirId){
    return async dispatch => {
        try{
            const response = await axios.get(`http://localhost:5000/api/files${dirId ? '?parent='+dirId : ''}`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            console.log(response.data)
            dispatch(setFiles(response.data))
        }catch (e) {
            alert(e.response.data.message)
        }
    }
}

export  function createDir(dirId, name){
    return async dispatch => {
        try{
            const response = await axios.post(`http://localhost:5000/api/files`, {
                name: name,
                parent: dirId,
                type: 'dir'
            },{
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
            console.log(response)
            dispatch(addFile(response.data))
        }catch (e) {
            // alert("error")
        }
    }
}