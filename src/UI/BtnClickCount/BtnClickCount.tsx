import React from 'react'
import './BtnClickCount.css'

export function BtnClickCount({ count, onClick }: { count: number, onClick: any }) {
  return (
    <button
      className='btn-click-count'
      onClick={onClick}
    >
      Clicked Me {count} times
    </button>
  )
}