import React, {useContext} from 'react';
import {Link } from 'react-router-dom';
import { DataContext } from '../../dataContext';

function EditPost (props) {

    const data = useContext(DataContext);

    const toEdit = () => props.author === data.user ? "" : "d-none";
    
    return(
        <div class='position-absolute postEditIcon' id ={props.uploadId}>
            <Link  className = {toEdit()} to={{pathname: "/modify", state: {uploadId: props.uploadId } }}><i class="fas fa-edit"></i></Link>
        </div>
    )
}

export default EditPost;