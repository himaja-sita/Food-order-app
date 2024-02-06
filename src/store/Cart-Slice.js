import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:'cart',
    initialState:{items:[],totalamount:0,notification:null,changed:false},
    reducers:{
additem(state,action){
const newitem=action.payload;
const existingitem=state.items.find(item=>item.id===newitem.id);
state.changed=true;
state.totalamount=state.totalamount+newitem.price;

if(existingitem){
   existingitem.amount++;  
}

else{
    state.items.push({id:newitem.id,name:newitem.name,price:newitem.price,amount:newitem.amount})
}
},
removeitem(state,action){
const id=action.payload;
const existingitem=state.items.find(item=>item.id===id);
state.changed=true;
state.totalamount=state.totalamount-existingitem.price;
if(existingitem.amount!==1){
    existingitem.amount--;
    
}
else{
state.items=state.items.filter(item=>item.id!==id);
}
},
showNotification(state,action){
    state.notification={
        status:action.payload.status,
        title:action.payload.title,
        message:action.payload.message
    }
},
replacecart(state,action){
    state.items=action.payload.items||[];
    state.totalamount=action.payload.totalamount;

},
emptycart(state,action){
state.items=[]
state.totalamount=0
state.changed=true
}
    }
});

export const cartactions = cartslice.actions;
export default cartslice