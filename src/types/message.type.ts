import {
  HeartBeatStatus,
  PostMessageMessageSender,
  PostMessageSubType,
  PostMessageType,
  PostMetaEventType,
  PostType,
} from './data.type';

abstract class MessageType {
  message_type: PostMessageType;
  sub_type: PostMessageSubType;
  message_id: number;
  user_id: number;
  message: any;
  raw_message: string;
  font: number;
  sender: PostMessageMessageSender;
}

/**
 * 私聊消息
 * @param temp_source:临时会话来源
 */
export class IPrivateMessage extends MessageType {
  timep_source: number;
}

/**
 * 群聊消息
 * @param group_id:群号
 * @param anonymous:匿名信息
 */
export class IGroupMessage extends MessageType {
  group_id: number;
  anonymous: {
    id: number;
    name: string;
    flag: string;
  };
}
