import { IParticipant } from './../model/participant';
import { IThread } from './../model/thread';
import { IMessage } from './../model/message';

export interface IAllUserData {
  participants: IParticipant[];
  threads: IThread[];
  messages: IMessage[];
}
