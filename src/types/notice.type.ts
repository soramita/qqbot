import { PostNoticeNotifySubType, PostNoticeType, PostType } from './data.type';

abstract class NoticeType {
  time: number;
  self_id: number;
  post_type: PostType;
  notice_type: PostNoticeType;
}

/**
 * 私聊消息撤回
 * @param user_id:好友QQ号
 * @param message_id:被撤回的消息ID
 */
export class IFriendRecall extends NoticeType {
  user_id: number;
  message_id: number;
}
/**
 * 群消息撤回
 * @param user_id:消息发送者QQ号
 * @param message_id:被撤回的消息ID
 * @param group_id:群号
 * @param operator_id:操作者QQ号
 */
export class IGroupRecall extends NoticeType {
  user_id: number;
  message_id: number;
  group_id: number;
  operator_id: number;
}

/**
 * 群成员增加
 * @param user_id:加入者QQ号
 * @param sub_type:approve表示管理员同意，invite表示管理员邀请
 * @param group_id:群号
 * @param operator_id:操作者QQ号
 */
export class IGroupIncrease extends NoticeType {
  sub_type: 'approve' | 'invite';
  user_id: number;
  group_id: number;
  operator_id: number;
}

/**
 * 群成员减少
 * @param user_id:离开者QQ号
 * @param sub_type:leave表示主动退钱，kick表示成员被踢，kick_me表示当前账号被踢
 * @param group_id:群号
 * @param operator_id:操作者QQ号
 */
export class IGroupDecrease extends NoticeType {
  sub_type: 'leave' | 'kick' | 'kick_me';
  user_id: number;
  group_id: number;
  operator_id: number;
}

/**
 * 群文件上传
 * @param user_id:离开者QQ号
 * @param group_id:群号
 */
export class IGroupUpload extends NoticeType {
  user_id: number;
  group_id: number;
  file: {
    id: string;
    name: string;
    size: number;
    busid: number;
  };
}

/**
 * 群禁言
 * @param user_id:被禁言QQ号(全体为0)
 * @param group_id:群号
 * @param operator_id:操作者QQ号
 * @param duration:禁言时长(全体禁言为-1)
 */
export class IGroupBan extends NoticeType {
  user_id: number;
  group_id: number;
  operator_id: number;
  duration: number;
}

/**
 * 好友添加
 * @param user_id:新添加好友QQ号
 */
export class IFriendAdd extends NoticeType {
  user_id: number;
}

/**
 * 好友戳一戳
 * @param user_id:发送者QQ号
 * @param sub_type:提示类型
 * @param sender_id:发送者QQ号
 * @param target_id:被戳者QQ号
 */
export class IFriendNotify extends NoticeType {
  user_id: number;
  sub_type: PostNoticeNotifySubType;
  sender_id: number;
  target_id: number;
}

/**
 * 群内戳一戳
 * @param user_id:发送者QQ号
 * @param sub_type:提示类型
 * @param group_id:群号
 * @param target_id:被戳者QQ号
 */
export class IGroupNotify extends NoticeType {
  user_id: number;
  sub_type: PostNoticeNotifySubType;
  group_id: number;
  target_id: number;
}

/**
 * 群红包运气王提示
 * @param user_id:红包发送者QQ号
 * @param sub_type:提示类型
 * @param group_id:群号
 * @param target_id:运气王QQ号
 */
export class INoticeLuckyKing extends NoticeType {
  user_id: number;
  sub_type: PostNoticeNotifySubType;
  group_id: number;
  target_id: number;
}

/**
 * 群成员荣誉变更提示
 * @param user_id:成员QQ号
 * @param sub_type:提示类型
 * @param group_id:群号
 * @param honor_type:talkative龙王,performer群聊之火,emotion快乐源泉
 */
export class INoticeHonor extends NoticeType {
  user_id: number;
  sub_type: PostNoticeNotifySubType;
  group_id: number;
  honor_type: 'talkative' | 'performer' | 'emotion';
}

/**
 * 群成员头衔变更
 * @param user_id:成员QQ号
 * @param sub_type:提示类型
 * @param group_id:群号
 * @param title:获得的新头衔
 */
export class INoticeTitle extends NoticeType {
  user_id: number;
  sub_type: PostNoticeNotifySubType;
  group_id: number;
  title: string;
}

/**
 * 群成员名片更新
 * @param user_id:成员QQ号
 * @param card_new:新名片
 * @param group_id:群号
 * @param card_old:旧名片
 */
export class IGroupCard extends NoticeType {
  user_id: number;
  card_new: string;
  group_id: number;
  card_old: string;
}

/**
 * 接收到离线文件
 * @param user_id:发送者QQ号
 */
export class IOfflineFile extends NoticeType {
  user_id: number;
  file: {
    name: string;
    size: number;
    url: string;
  };
}

/**
 * 精华消息变更
 * @param group_id:群号
 * @param sub_type:添加为add,移出为delete
 * @param sender_id:消息发送者QQ号
 * @param operator_id:操作者QQ号
 * @param message_id:消息ID
 */
export class IGroupEssence extends NoticeType {
  group_id: number;
  sub_type: 'add' | 'delete';
  sender_id: number;
  operator_id: number;
  message_id: number;
}

/**
 * 客户端在线状态变更
 */
export class IClient_status {
  post_type: PostType;
  notice_type: NoticeType;
  client: {
    app_id: number;
    device_name: string;
    device_kind: string;
  };
  online: boolean;
}
