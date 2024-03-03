'use client'
import React, { useEffect, useState } from 'react'
import SelectStatus from './SelectStatus'

interface OrderBookEntry {
  id: number
  productId: number
  quantity: number
  orderTime: string
  status: 'pending' | 'completed' | 'cancelled'
  customer: number
  
}

const OrderBookPage = () => {
  const [orderBook, setOrderBook] = useState<OrderBookEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('');
  const [status, setStatus] = useState('all');

  useEffect(() => {
    const fetchOrderBook = async () => {
      setLoading(true)
      const response = await fetch('/api/orders')
      console.log(response)

      const data = await response.json()
      if (!data) {
        setError('No data found')
      
      }
  
      setOrderBook(status == 'all' ? data : data.filter((el:any) => el.status == status))
    }

    fetchOrderBook()
    setLoading(false)

  }, [loading,status])


  function showStatus(status: string) {
    setStatus(status);
    console.log(status);
    

  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return (
    <div className=''>
      <h1 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>Order Book</h1>
      <div>
        <SelectStatus options={['pending', 'completed', 'cancelled', 'all']} callbackFn={showStatus}/>
      </div>
      <div className='overflow-x-auto'>
        <table className='min-w-full table-auto'>
          <thead className='border-b bg-gray-700 dark:bg-gray-800'>
            <tr>
              <th
                scope='col'
                className='text-sm font-medium text-gray-100 px-6 py-4 text-left'
              >
                Product ID
              </th>
              <th
                scope='col'
                className='text-sm font-medium text-gray-100 px-6 py-4 text-left'
              >
                Quantity
              </th>
              <th
                scope='col'
                className='text-sm font-medium text-gray-100 px-6 py-4 text-left'
              >
                Order Time
              </th>
              <th
                scope='col'
                className='text-sm font-medium text-gray-100 px-6 py-4 text-left'
              >
                Status
              </th>
               <th
                scope='col'
                className='text-sm font-medium text-gray-100 px-6 py-4 text-left'
              >
                Customer Id
              </th>
            </tr>
          </thead>
          <tbody>
            {orderBook.map((entry) => (
              <tr
                key={entry.id}
                className='bg-white dark:bg-gray-800 border-b dark:border-gray-700 transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white'>
                  {entry.productId}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white'>{entry.quantity}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white'>
                  {new Date(entry.orderTime).toLocaleDateString()}
                </td>
                <td
                  className={`px-6 py-4 whitespace-nowrap text-sm ${
                    entry.status === 'completed'
                      ? 'text-green-500 dark:text-green-400'
                      : entry.status === 'cancelled'
                      ? 'text-red-500 dark:text-red-400'
                      : 'text-yellow-500 dark:text-yellow-400'
                  }`}
                >
                  {entry.status}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white'>
                  {entry.customer}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderBookPage
