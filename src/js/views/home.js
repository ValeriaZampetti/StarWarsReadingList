import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "./Card";

export const Home = () => {
	const {store, actions} = useContext(Context);
	return (
	<div className="container">
		<div className="container m-2">
			<h2 className="text-warning">Character</h2>
			<div className="d-flex flex-nowrap scroll ">
				{store.people.map((item, index)=>{
					return (
					<Card 
					key={item.uid}
					item={item}
					resource="people"/>
				);
				}
			)}
			</div>
		</div>
		<div className="container m-2">
			<h2 className="text-warning">Planets</h2>
			<div className="d-flex flex-nowrap scroll">
				{store.planets.map((item, index)=>{
					return (
					<Card 
					key={item.uid}
					item={item}
					resource="planets"/>
				);
				}
			)}
			</div>
		</div>
		<div className="container  m-2">
			<h2 className="text-warning">Starships</h2>
			<div className="d-flex flex-nowrap scroll ">
				{store.starships.map((item, index)=>{
					return (
					<Card 
					key={item.uid}
					item={item}
					resource="starships"/>
				);
				}
			)}
			</div>
		</div>
	</div>
);
} 