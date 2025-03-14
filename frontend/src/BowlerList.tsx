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
            <h2> Bowlers</h2>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th> Team Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bowlers.map((b)=> (
                            <tr key = {b.bowlerId}>
                                <td>{b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}</td>
                                <td>{b.teamName}</td>
                                <td>{b.bowlerAddress}</td>
                                <td>{b.bowlerCity}</td>
                                <td>{b.bowlerState}</td>
                                <td>{b.bowlerZip}</td>
                                <td>{b.bowlerPhoneNumber}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default BowlerList