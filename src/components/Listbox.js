import React from 'react';
import { useHistory } from "react-router-dom";

const Listbox = props => {

    const history = useHistory();

    const clicked = e => {
        e.preventDefault();
        props.clicked(e.target.id);
        let path = `results/${e.target.id}`; 
        history.push(path);
    }    

    return (
        <div className="col-sm-6 px-0">
            <div className="list-group">
                {
                    props.items.map((item, idx) => 
                    <button key={idx}
                        onClick={clicked}
                        className="list-group-item list-group-item-action list-group-item-light"
                        id={item.id}>
                            
                            {item.name} by {item.artists[0].name}
                    </button>)
                }
            </div>
        </div>
        

    );
}

export default Listbox;