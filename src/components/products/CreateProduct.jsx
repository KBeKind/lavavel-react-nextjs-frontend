'use client'
import React, { useState, useEffect } from 'react'
import axios from '@/lib/axios'

const CreateProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0,
        count: 0,
    })

    const handleSubmit = async e => {
        e.preventDefault()

        const payload = {
            name: formData.name,
            price: formData.price,
            count: formData.count,
            description: formData.description,
        }

        try {
            const response = await axios.post('/api/products/create', payload)
            console.log(response.data)
        } catch (error) {
            console.error('Error creating product:', error)
        }
    }

    return (
        <div>
            CREATE PRODUCT
            <form onSubmit={handleSubmit} className="flex flex-col w-1/2">
                <input
                    type="text"
                    placeholder="Product Name"
                    value={formData.name}
                    onChange={e =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                    className="my-2"
                />
                <input
                    type="text"
                    placeholder="Price"
                    value={formData.price}
                    onChange={e =>
                        setFormData({ ...formData, price: e.target.value })
                    }
                    className="my-2"
                />
                <input
                    type="number"
                    placeholder="Count"
                    value={formData.count}
                    onChange={e =>
                        setFormData({ ...formData, count: e.target.value })
                    }
                    className="my-2"
                />
                <textarea
                    type="text"
                    placeholder="Description"
                    value={formData.description}
                    onChange={e =>
                        setFormData({
                            ...formData,
                            description: e.target.value,
                        })
                    }
                    className="my-2"
                />
                <div>
                    <button className="btn btn-blue my-2" type="submit">
                        Create Product
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct
