export interface Tool {
  name: string
  description: string
  icon: string
  badge: string
  badgeColor: string
}

export interface UseCase {
  title: string
  description: string
  prompt: string
  response: string
}

export interface Tip {
  icon: string
  title: string
  description: string
}

export interface WorkflowStep {
  number: number
  icon: string
  title: string
  description: string
}
