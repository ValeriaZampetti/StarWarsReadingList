import React, { useContext } from "react";
import "../../styles/home.css";
import { Card } from "../component/Card";
import { CardsCarousel } from "../component/CardsCarousel";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context)
	return (
		<div className="text-center mt-5">
			<CardsCarousel title={"Characters"}>
				{store.characters.map(
					(character) => {
						return (
							<Card
									key={character.uid}
									item={character}
									resource={"characters"}
								/>
						)
					}
				)}
			</CardsCarousel>
			<CardsCarousel title={"Planets"}>
					{store.planets.map(
						planet => {
							return (
								<Card
									key={planet.uid}
									item={planet}
									resource={"planets"}
								/>
							)
						}
					)}
			</CardsCarousel>
			<CardsCarousel title={"Vehicles"}>
				{store.vehicles.map(vehicle =>{
					return (
						<Card 
							key={vehicle.uid}
							item={vehicle}
							resource={"vehicles"}
						/>
					)
				} )}
			</CardsCarousel>
		</div>
	)
};