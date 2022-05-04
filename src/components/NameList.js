import React from 'react'

function NameList() {
const persons = [
{  id: 1, name: 'John', age: 36, skill: 'React' },
{  id: 1, name: 'abdul', age: 12, skill: 'java' },
{  id: 1, name: 'aditya', age: 34, skill: 'python' },
{  id: 1, name: 'hritik', age: 56, skill: 'javaxript' }
]

const personList = persons.map(
  person => (
    <h2>
        I am {person.name}, my age is {person.age} i know {person.skill}
    </h2>
  )
)



  return (
    <div>
      { personList}
    </div>
  )
}

export default NameList