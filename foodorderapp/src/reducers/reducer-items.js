import {ADD_ITEM} from '../actions/index';
import {REMOVE_ITEM} from '../actions/index';

const initialState =[
        {
            id: 1,
            item: "Four Cheese Pizza",
            cost: 15,
            totalcost: 15,
            ordered: "false",
            Qty: 0
        },
        {
            id: 2,
            item: "The Vegetarian Pizza",
            cost: 12,
            totalcost: 12,
            ordered: "false",
            Qty: 0
        },
        {
            id: 3,
            item: "Salad",
            cost: 7,
            totalcost: 7,
            ordered: "false",
            Qty: 0
        },
        {
            id: 4,
            item: "Pizza Slice",
            cost: 4,
            totalcost: 4,
            ordered: "false",
            Qty: 0
        },
        {
            id: 5,
            item: "Cheese Cake",
            cost: 20,
            totalcost: 20,
            ordered: "false",
            Qty: 0
        }
];


const items = (state = initialState, action) => { 
    switch (action.type) {
        case ADD_ITEM :
        return state.map((item) => {
            if (item.id == action.clickedItem.id) {
                return Object.assign({}, item, {
                    totalcost:action.clickedItem.cost*(action.clickedItem.Qty+1),
                    ordered: "true",
                    Qty: action.clickedItem.Qty +1
                })
              }
              return item
        });

        case REMOVE_ITEM :
        return state.map((item) => {
            if (item.id == action.clickedItem.id) {
                if(action.clickedItem.Qty > 1){
                    return Object.assign({}, item, {
                        totalcost:action.clickedItem.totalcost - action.clickedItem.cost,
                        ordered: "true",
                        Qty: action.clickedItem.Qty -1
                    })
                }
                else{
                    return Object.assign({}, item, {
                        totalcost:action.clickedItem.cost,
                        ordered: "false",
                        Qty: 0
                    })
                }
            }
            return item
        });

        default :
            return state;

    }
};
    
export default items;