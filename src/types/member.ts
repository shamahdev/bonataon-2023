export type Member = {
  id: string
  name: string
  avatar?: string
  branch: {
    id: string
    name: string
    level: 'BPP' | 'BPD' | 'BPC'
  }
  position: string
  email: string
  phone: string
  kta: string
}
