// export const AddItem = 'AddItem';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';


export function AddItem(clickedItem) {
    console.log("Item Clicked : ", clickedItem.item);
    return {
        type : "ADD_ITEM",
        clickedItem                                // this is same as newItem : newItem in ES6
    }
}

export function RemoveItem(clickedItem) {
    console.log("Item Clicked : ", clickedItem.item);
    return {
        type : "REMOVE_ITEM",
        clickedItem                                // this is same as newItem : newItem in ES6
    }
}