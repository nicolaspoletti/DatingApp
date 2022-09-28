import { Photo } from "./photo"

export interface Member {
    id: number
    username: string
    photoUrl: string
    dateOfBirth: string
    age: number
    nickname: string
    created: Date
    lastActive: Date
    gender: string
    biography: string
    lookingFor: string
    interests: string
    city: string
    country: string
    photos: Photo[]
  }
  
