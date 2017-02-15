import { IAllUserData } from './../../../shared/dto/all-user-data';
import { IMessage } from './../../../shared/model/message';
import * as _ from 'lodash';
import { dbMessages, dbParticipants } from './../db-data';
import { Application, Request, Response } from 'express';
import { findDbThreadsPerUser } from '../persistence/findDbThreadsPerUser';

export function apiGetUserThreads(app: Application) {

  app.route('/api/threads').get((req: Request, res: Response) => {

    const participantId = 1;

    const threadsPerUser = findDbThreadsPerUser(participantId);

    let messages: IMessage[] = [],
        participantsIds: string[] = [];

    threadsPerUser.forEach(thread => {
      const threadMessages: IMessage[] = _.filter(dbMessages, (message:any) => {
        return message.threadId === thread.id;
      });

      messages.concat(threadMessages);
      participantsIds.concat(_.keys(thread.participants))
    });

    const participants = _.uniq(participantsIds.map(participantId => dbParticipants[participantId]));

    const response: IAllUserData = {
      participants,
      messages,
      threads: threadsPerUser
    };


    res.status(200).json(response);
  });

}
