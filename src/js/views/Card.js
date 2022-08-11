import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({item, ...props}) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const {store, actions} = useContext(Context)
    useEffect(() =>{
        if (!store.favorites.find(favorite => item.name == favorite.name)) {
            setIsFavorite(false)
        }
    },[store.favorites])
    return (
    <div className="card unic m-2 border-warning border-5" style={{minWidth: "250px"}}>
        <img src={`https://starwars-visualguide.com/assets/img/${props.resource === "people" 
						? "characters"
						: props.resource}/${item.uid}.jpg`} className="card-img-top" alt="..."/>
        <div className="card-body bg-dark pb-2">
            <h5 className="card-title text-white">{item.name}</h5>
            <div className="container-fluid justify-content-between p-0 d-flex">
                <Link type="button" className="btn btn-outline-primary btn-sm" to={`/single/${props.resource}/${item.uid}`}>{"more details"}</Link >
                <button type="button" className={`btn btn-${isFavorite 
                    ? ""
                    : "outline-"}warning btn-sm ${props.key}`} onClick={(e)=>{
                    actions.addFavorites({...item, resource: props.resource})
                    setIsFavorite(true)
                }}><i className="fa-regular fa-heart"></i></button>
            </div>
        </div>
    </div>
    );
};

Card.propTypes = {
item: PropTypes.object,
resource: PropTypes.string
}