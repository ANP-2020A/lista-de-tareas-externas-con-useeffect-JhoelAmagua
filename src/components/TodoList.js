import React, { useState } from 'react';

const TodoList = () => {

    const [ todo, setTodo ] = useState( [] );
    const [ completed, setCompleted ] = useState( [] );

    const handleAddJob = () => {
        const job = document.querySelector( '#job' ).value;

        setTodo( ( prevState ) => [
            ...prevState,
            job
        ] );
        document.querySelector( '#job' ).value = '';
    };

    const handleCompleteJob = ( index ) => {
        setCompleted( (prevState) =>[
            ...prevState,
            todo[index]
        ]);

        handleRemoveJob( index );
    };

    const handleRemoveJob = ( index ) => {
        setTodo( (prevState) => {
            return prevState.filter( ( job, i ) => i !== index );
        } );
    };


    return (
        <div>
            <div>
                <h1>Lista de tareas pendientes:  { todo.length }</h1>
                <label htmlFor='job'>Título de la tarea </label>
                <input type='text' id='job' />
                <button onClick={ handleAddJob }>Añadir tarea</button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Nombre</th>
                </tr>
                </thead>
                <tbody>
                {
                    todo.map( ( job, index ) => (
                            <tr key={ index }>
                                <td>{ job }</td>
                                <td>
                                    <button onClick={ () => handleRemoveJob( index ) }>Eliminar</button>
                                </td>
                                <td>
                                    <button onClick={ () => handleCompleteJob( index ) }>Completada</button>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>

            <h1>Lista de tareas completadas: { completed.length } </h1>
            <table>
                <thead>
                <tr>
                    <th>Nombre</th>
                </tr>
                </thead>
                <tbody>
                {
                    completed.map( ( job, index ) => (
                            <tr key={ index }>
                                <td>{ job }</td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;