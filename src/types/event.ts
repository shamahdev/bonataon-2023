import { Member } from './member'

export type EventData = {
  ID: string
  name: String
  seat: Number
  startAt: Date
  endAt: Date
  address: string
  location?: String
}

export type Invitation = {
  ID?: String
  memberID?: String
  eventID?: String
  seat: String
}

export type InvitationDetail = {
  invitation: Invitation
  member: Member
  event: EventData
}
