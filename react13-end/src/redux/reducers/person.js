import { ADD_PERSON } from "../constant";

const initPerson = [
    {
        id: "659",
        name: "Nicholas Zakas",
        age: 18
    }
];

function personReducer(preState = initPerson,action){
    const {type,data} = action;
    switch(type){
        case ADD_PERSON:
            return [data,...preState];
        
        default:
            return preState;
    }
}

export default personReducer;