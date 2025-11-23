import React from 'react'

interface H1Props {
  text: string;
}

const H1: React.FC<H1Props> = ({text}) => {
  return <h1 className="quicksand-semibold text-4xl md:text-6xl">{text}</h1>;
}

export default H1
