'use client'

import { useEffect } from 'react'
import { pocketMock } from 'pocket-mocker'

export function PocketMockProvider() {
  useEffect(() => {
    pocketMock()
  }, [])
  
  return null
}