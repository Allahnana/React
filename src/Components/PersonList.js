import React from 'react'

function PersonList({person}) {
    return (
        <div>
            <h2> My Name is{person.Name}, i am {person.age} years old and i know {person.skill}.</h2>
        </div>
    )
}

export default PersonList
