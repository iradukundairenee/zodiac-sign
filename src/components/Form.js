import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


export default function Form() {
    const studentNames = useSelector(state => state)
    const dispatch = useDispatch()



    const [names, addname] = useState({ firstnames: '', lastnames: '' })

    const add = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_FIRSTNAME', payload: names })



    }

    const changeNames = (e) => {

        addname({ ...names, [e.target.name]: e.target.value });
    }




    return (
        <div>
            <form onSubmit={add} id="form">
                <div>
                    <input name='firstnames' type="text" value={names.firstnames} onChange={changeNames} placeholder="enter firstname" />
                </div>
                <div>
                    <input name='lastnames' type="text" value={names.lastnames} onChange={changeNames} placeholder="enter lastname" />
                </div>
                <input type="submit" value="add" />
            </form>
            <table>
                <tr><th>firstnames</th><th>lastnames</th></tr>

                {studentNames.map((name) => (

                    <tr><td>{name.lastnames}</td><td>{name.firstnames}</td></tr>

                ))}
            </table>

        </div>

    )
}
