import request from '../../utils/request';
import { IGroupMessage } from '../../types/message.type';

export const postGroupTextApi = (path: string, data: IGroupMessage) => {
  return request.post<IGroupMessage>(path, data);
};
export const postGroupForwardTextApi = (path: string, data) => {
  return request.post<IGroupMessage>(path, data);
};
