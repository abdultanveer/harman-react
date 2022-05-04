import React from 'react'
import Person from './Person'

function NameList() {
  const persons = [
    { id: 1, name: 'John', age: 36, skill: 'React' },
    { id: 1, name: 'abdul', age: 12, skill: 'java' },
    { id: 1, name: 'aditya', age: 34, skill: 'python' },
    { id: 1, name: 'hritik', age: 56, skill: 'javaxript' }
  ]

  const personList = persons.map(
    person => (
      <Person personKey={person} />
    )
  )



  return (
    <div>
      {personList}
    </div>
  )
}

export default NameList