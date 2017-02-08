import { Application, Request, Response } from 'express';
import { findDbThreadsPerUser } from '../persistence/findDbThreadsPerUser';

export function apiGetUserThreads(app: Application) {

  app.route('/api/threads').get((req: Request, res: Response) => {

    const participantId = 1;

    const threadsPerUser = findDbThreadsPerUser(participantId);

  });

}
