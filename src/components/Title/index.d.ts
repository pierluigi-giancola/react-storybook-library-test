import * as React from 'react'

export interface TitleProps {
    text: string;
  }

declare class Title<As extends React.ElementType = 'h1'> {}