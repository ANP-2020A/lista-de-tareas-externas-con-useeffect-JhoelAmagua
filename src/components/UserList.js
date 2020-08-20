import React, { useState } from 'react';

const UserList = () => {
    const initialUsers = () => {
        console.log( 'inicializando estado' );
        return [
            {
                name: 'Jhoel',
                lastName: 'Amagua'
            },
            {
                name: 'Wendy',
                lastName: 'Soto'
            },
            {
                name: 'David',
                lastName: 'Curipoma'
            }
        ];
    };

    const [users, setUsers]= useState(initialUsers);

    const handleAddUser = () => {
        const name = document.querySelector( '#name' ).value;
        const lastName = document.querySelector( '#lastname' ).value;
        const newUser = {
            name,
            lastName
        };
        setUsers( ( prevState ) => [
            ...prevState,
            newUser
        ] );
    };

    return(
        <div>
            <div>
                <br/>
                <h1>DEBER</h1>
                <br/>
                <label htmlFor='name'>Nombre: </label>
                <input type='text' id='name' />
                <label htmlFor='lastname'>Apellido: </label>
                <input type='text' id='lastname' />

                <button onClick={ handleAddUser }>Agregar Usuario</button>
            </div>
            <ul>
                {
                    users.map( ( user, index ) => (
                        <li key={ index }>{ user.name } { user.lastName }</li>
                    ) )
                }
            </ul>
        </div>
    );
};

export default UserList;