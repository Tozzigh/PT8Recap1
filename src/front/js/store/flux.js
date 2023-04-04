const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			pets: [{ id: 1, name: "Rex" }, { id: 2, name: "Frida" }, { id: 3, name: "Pluto" }],
			user: "Mattia",
			age: 1,
			active: false
		},
		actions: {
			getPets: async () => {
				const store = getStore();
				setStore({ user: "Lucia", active: true });
			},

			sayHello: () => {
				getActions().getPets();
			},
		}
	};
};

export default getState;
