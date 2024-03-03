'use client'
import { FormEventHandler, useState } from "react"
import SelectStatus from "./SelectStatus"

type Status = 'pending'|'completed'|'cancelled'


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
    <p>Create Order</p>
    <form style={{color:'black'}} onSubmit={onSubmitFn}>
    <input required type = "number" name='productId'></input>
    <input required type = "number" name='quantity'></input>
    <input  required type = "number" name='customer'></input>
     <SelectStatus options={['pending', 'completed', 'cancelled']} callbackFn={setStatusFn} />
    <button style={{color:'white'}} type="submit">Submit</button>
    </form>
   
    </div>
)
}

export default FormCreateOrder