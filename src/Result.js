import React from 'react'

export default function Result(props) {
  return (
    <li>
      <h2>{props.item.name ? props.item.name : props.item.title}</h2>
    </li>
  )
}