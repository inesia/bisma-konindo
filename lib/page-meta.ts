import type { Metadata } from 'next'
import { COMPANY } from './proposal-content'

export function pageMetadata(title: string, description: string): Metadata {
  return {
    title: `${title} — ${COMPANY.name}`,
    description,
  }
}
