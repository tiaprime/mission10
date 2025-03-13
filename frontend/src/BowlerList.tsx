import { useState, useEffect } from "react";
import {bowler} from "./types/bowler"

function BowlerList () {
    const [bowlers, setBowlers] = useState<bowler[]>([])


    useEffect(() => {
        const fetchBowlers = async () => {
            const response = await fetch('https://localhost:5000/bowler')
            const data = await response.json()
            setBowlers(data)
        }
        fetchBowlers()
    }, [])



    return (
        <>
            <h1> Bowlers</h1>
            <table>
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th> Last Name</th>
                    <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bowlers.map((b)=> (
                            <tr key = {b.bowlerId}>
                                <td>{b.bowlerFirstName}</td>
                                <td>{b.bowlerLastName}</td>
                                <td>{b.bowlerId}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default BowlerList