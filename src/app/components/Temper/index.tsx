import React from 'react';

export namespace Temper {
  export interface Props {
    color: string,
    name: string
  }
}

export const Temper = ({color, name }: Temper.Props): JSX.Element => {
  return <div style={{ color }}>안녕하세요 {name}</div>
}