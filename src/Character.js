import React from 'react'

export default function Character(props) {
  return (
    <li>
      <h2>{props.character.name}</h2>
    </li>
  )
}