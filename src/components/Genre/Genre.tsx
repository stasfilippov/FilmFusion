import React, { PropsWithChildren } from 'react'

export const Genre = ({ children }: PropsWithChildren) => {
  return (
    <section className={'mb-4'}>
      <div>{children}</div>
    </section>
  )
}

export default Genre
