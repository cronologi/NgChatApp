

export interface IThread {
  id:number;
  messageIds: number[];
  participants: { [key:number]: number } // each participant has a number of unread messages
}
