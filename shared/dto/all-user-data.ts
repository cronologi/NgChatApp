import { IParticipant } from './../model/participant';
import { IThread } from './../model/thread';
import { IMessage } from './../model/mesage';

export interface IAllUserData {
  participants: IParticipant[];
  threads: IThread[];
  messages: IMessage[];
}
