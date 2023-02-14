import {
  HeartBeatStatus,
  PostMessageSubType,
  PostMetaEventType,
  PostType,
} from './data.type';

abstract class MetaEventType {
  time: number;
  self_id: number;
  post_type: PostType;
  meta_event_type: PostMetaEventType;
}
export class IHeartbeat extends MetaEventType {
  status: HeartBeatStatus;
  interval: number;
}

export class ILifecycle extends MetaEventType {
  sub_type: 'enable' | 'disable' | 'connect';
}
