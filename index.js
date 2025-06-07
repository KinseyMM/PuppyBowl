const BASE = "https://fsa-puppy-bowl.herokuapp.com/api";
const COHORT = "2503-FTB-ET-WEB-AM";
const API_URL = "'https://fsa-puppy-bowl.herokuapp.com/api/2503-FTB-ET-WEB-AM/players"

const state = {
    puppies: [],
};

const getPuppies = async () => {
    try {
        const res = await fetch(API_URL);
        const { json } = await res.json();
        state.puppies = json.players;

        renderPuppies();
    } catch (error) {
        console.log(error);
    }
};


const addPuppy = async (event) => {
    event.preventDefault();

    const addPuppyForm = document.querySelector("#add-puppy-form");

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: addPuppyForm.name.value,
                breed: addPuppyForm.breed.value,
                age: addPuppyForm.age.value,
                imageUrl: addPuppyForm.imageUrl.value,
            })
        })
    }
};