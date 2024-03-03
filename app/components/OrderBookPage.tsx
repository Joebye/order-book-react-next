'use client'
import React, { useEffect, useState } from 'react'

interface OrderBookEntry {
  id: number
  productId: number
  quantity: number
  orderTime: string
  status: 'pending' | 'completed' | 'cancelled'
}

const OrderBookPage = () => {
  const [orderBook, setOrderBook] = useState<OrderBookEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchOrderBook = async () => {
      setLoading(true)
      const response = await fetch('/api/orders')
      console.log(response)

      const data = await response.json()
      if (!data) {
        setError('No data found')
      
      }
      setOrderBook(data)
    }

    fetchOrderBook()
    setLoading(false)
  }, [loading])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return (
    <div className=''>
      <h1 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>Order Book</h1>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderBookPage
