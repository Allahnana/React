import React from 'react'
import PersonList from './PersonList'

function NameList() {
    const persons = [
        {
            id:1,
            Name: 'Abdulhadi',
            age:25,
            skill: 'JavaScript'
        },
        {
            id:2,
            Name: 'Abdulhamid',
            age:23,
            skill: 'Vue'
        },
        {
            id:3,
            Name: 'Fatima',
            age:15,
            skill: 'UI/UX'
        },
        {
            id:4,
            Name: 'Farida',
            age:28,
            skill: 'Data Science'
        },
        {
            id:5,
            Name: 'Nafisa',
            age:27,
            skill: 'Python'
        },
    ]
    const personslist = persons.map(person =>  <PersonList person = {person}/>
        
    )
    return (
        <div>
            {personslist}
        </div>
    )
}

export default NameList
