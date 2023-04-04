import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { PetCard } from "../component/petCard";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [pets, setPets] = useState([{ id: 1, name: "Rex" }, { id: 2, name: "Frida" }, { id: 3, name: "Pluto" }]);

	return (
		<div className="text-center mt-5">
			<input onKeyUp={(e) => {
				if (e.key == "Enter") {
					let higherId = 0;
					for (let x = 0; x < pets.length; x++) {
						if (pets[x].id > higherId) {
							higherId = pets[x].id;
						}
					}
					let newPet = { id: higherId + 1, name: e.target.value }
					setPets([...pets, newPet]);
				}
			}} />
			<div className="row">
				{pets.map((item) => {
					return <PetCard key={item.id} item={item} />
				})}
			</div>
		</div>
	);
};
