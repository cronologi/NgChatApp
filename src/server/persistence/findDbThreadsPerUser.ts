import { dbThreads } from './../db-data';
import { IThread } from './../../../shared/model/thread';
import * as _ from 'lodash';


export function findDbThreadsPerUser(participantId: number) {

  const allThreads: IThread[] = _.values(dbThreads)

  return _.filter(allThreads, thread =>
    _.includes(_.keys(thread.participants), participantId.toString()));
}
