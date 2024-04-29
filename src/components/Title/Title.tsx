import React from 'react'

type TitlePropsType = {
  title: string
}
export const Title: React.FC<TitlePropsType> = ({ title }) => {
  return <h2 className={'font-bold text-3xl mb-2.5'}>{title}</h2>
}
