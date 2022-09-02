import React from 'react'

export const Icon: React.FC<{ size: number; src: string }> = ({ src, size }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="Icon" draggable={false} width={size} height={size} className="icon" />
}
