import React from 'react'

export default function LangControls(props) {
  return (
    <>
      <buton>
        British{' '}
        <span role='img' aria-label='en-GB'>🇬🇧</span>
      </buton>
      <buton>
        American{' '}
        <span role='img' aria-label='en-US'>🇺🇸</span>
      </buton>
      <buton>
        Korean{' '}
        <span role='img' aria-label='ko'>🇰🇷</span>
      </buton>
    </>
  )
}