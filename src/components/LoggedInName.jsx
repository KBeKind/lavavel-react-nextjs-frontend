'use client'
import React from 'react'
import { useAuth } from '@/hooks/auth'

const LoggedInName = () => {
    const { logout, user } = useAuth({ middleware: 'auth' })

    return (
        <div>
            <p>Holy frigg you are logged in!?</p>
            <p>{user?.name}</p>
            <button onClick={logout}>Sign out</button>
        </div>
    )
}

export default LoggedInName
