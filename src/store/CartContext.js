import { createContext ,useReducer} from "react";
export const Context=createContext();

const initialcartitem={items:[],totalamount:0};

function cartReducer(state,action){
if (action.type==='ADD'){
    const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
  
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
    const updatedtotalamount=state.totalamount+action.item.amount*action.item.price;
    console.log({updatedItems,updatedtotalamount})
    return {items:updatedItems,
        totalamount:updatedtotalamount}
}
if(action.type==='remove'){
    const index=state.items.findIndex(item=>item.id===action.id);
    const existingitem=state.items[index];
    const updatedtotalamount=state.totalamount-existingitem.price;
    let updatedItems;
    if(existingitem.amount===1){
       updatedItems= state.items.filter(item=>item.id!==action.id)
    }
    else{
const updatedItem= {...existingitem,amount:existingitem.amount-1};

updatedItems=[...state.items];
updatedItems[index]=updatedItem;
    }
return {items:updatedItems,totalamount:updatedtotalamount};
}
return initialcartitem;
}
export default function CartContext(props){

 const [cartitem,dispactcartaction]=useReducer(cartReducer,initialcartitem);

    function additemhandler(item){
dispactcartaction({type:'ADD',item:item})
    }

    function removeitem(id){
    dispactcartaction({type:'remove',id:id})
    }

    const cartcontext={
        items:cartitem.items,
        totalamount:cartitem.totalamount,
        additem:additemhandler,
        remove:removeitem
    }
return <Context.Provider value={cartcontext}>{props.children}</Context.Provider>
}