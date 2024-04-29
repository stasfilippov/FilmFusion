import React from 'react'

export const Footer = () => {
  return (
    <div className={'flex-footer flex flex-col items-center'}>
      <div className={'flex gap-14 mb-7 text-sm'}>
        <span>Conditions of Use</span>
        <span>Privacy & Policy</span>
        <span>Press Room</span>
      </div>
      <div>
        <span className={'text-sm'}>&copy; 2022 MovieVilla by Tanmay Jitendra Thakare</span>
      </div>
    </div>
  )
}
