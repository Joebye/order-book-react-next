'use client'
import { FormEventHandler, useState } from "react"
import SelectStatus from "./SelectStatus"

type Status = 'pending'|'completed'|'cancelled';
export const statusOptions: Status[] = ['pending', 'completed', 'cancelled']

const FormCreateOrder = () => {

const [status,setStatus] = useState<String>('pending');

const onSubmitFn:FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const order = {
        productId: Number.parseInt(`${form.get('productId')}`),
        customerId: Number.parseInt(`${form.get('quantity')}`),
        quantity:Number.parseInt(`${form.get('customer')}`),
        status:status
    }
    await fetch("api/orders",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    console.log(order)
    
}

const setStatusFn = (status:String) => {
    setStatus(status)
}


return (<div>
    <p>Create Order</p><br/>
    <form style={{color:'black'}} onSubmit={onSubmitFn}>
    <label style={{color:'white'}} htmlFor='productId'>Product Id: </label>
    <input required type = "number" name='productId'></input><br/> <br/>
    <label style={{color:'white'}} htmlFor='quantity'>Quantity: </label>
    <input required type = "number" name='quantity'></input><br/> <br/>
    <label style={{color:'white'}} htmlFor='customer'>Customer Id: </label>
    <input  required type = "number" name='customer'></input><br/> <br/>
     <SelectStatus options={statusOptions} callbackFn={setStatusFn} /><br/>
    <button style={{color:'white'}} type="submit">Submit</button>
    </form>
    </div>
)

}

export default FormCreateOrder