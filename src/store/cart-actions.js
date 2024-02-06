import {cartactions}  from './Cart-Slice';

export const fetchcartdata=()=>{
    return async(dispatch)=>{
        const fetchData=async()=>{
            const response= await fetch('https://food-order-app-4d142-default-rtdb.firebaseio.com/cart.json');
       if(!response.ok){
        throw new Error('Fetching failed')
       }
       const data=await response.json();
       return data;
        }
        try{
       const cartdata=await fetchData();
       console.log('replacing cart..')
       dispatch(cartactions.replacecart(cartdata))
    }
    catch(error){
        dispatch(cartactions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Fetching cart data failed!'
          }))
    }
}
}

export const sendcartdata = (cart) => {
    return async (dispatch) => {
      console.log('before sending cart data')
      dispatch(
        cartactions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );
  
      const sendRequest = async () => {
        const response = await fetch(
            'https://food-order-app-4d142-default-rtdb.firebaseio.com/cart.json',
          {
            method: 'PUT',
            body: JSON.stringify({
              items: cart.items,
              totalamount: cart.totalamount,
            }),
          }
        );
  
        if (!response.ok) {
          throw new Error('Sending cart data failed.');
        }
      };
  
      try {
        await sendRequest();
        console.log('sent cart data')
        dispatch(
          cartactions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data successfully!',
          })
        );
      } catch (error) {
        dispatch(
          cartactions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed!',
          })
        );
      }
    };
  };