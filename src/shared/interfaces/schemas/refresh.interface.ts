import { ObjectId } from 'mongodb'
import { IBase } from './base.interface'

export interface IRefresh extends IBase {
  token: string
  user_id: ObjectId
}
