// go-cqhttp数据结构
/**
 * 上报类型
 * @param message:消息
 * @param request:请求
 * @param notice:通知
 * @param meta_event:元事件
 */
export type PostType = 'message' | 'request' | 'notice ' | 'meta_event';

/**
 *表示消息发送者的信息
 */
export type PostMessageMessageSender = {
  user_id: number;
  nickname: string;
  sex: 'male' | 'female' | 'unknow';
  age: number;
  group_id?: number;
  card?: string;
  area?: string;
  level?: string;
  role?: 'owner' | 'admin' | 'member';
  title?: string;
};

/**
 * 消息类型
 * @param private:私聊
 * @param group:群聊
 */
export type PostMessageType = 'private' | 'group';

/**
 * 消息子类型
 * @param friend:好友
 * @param normal:群聊
 * @param anonymous:匿名
 * @param group_self:群中自身发送
 * @param group:群临时会话
 * @param notice:系统提示
 */
export type PostMessageSubType =
  | 'friend'
  | 'normal'
  | 'anonymous'
  | 'group_self'
  | 'group'
  | 'notice';

export type PostMessageTempSource = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/**
 * 请求类型
 * @param friend:好友请求
 * @param group:群请求
 */
export type PostRequestType = 'friend' | 'group';

/**
 * 通知类型
 * @param group_upload:群文件上传
 * @param group_admin:群管理员变更
 * @param group_decrease:群成员减少
 * @param group_increase:群成员增加
 * @param group_ban:群成员禁言
 * @param friend_add:群成员禁言
 * @param group_recall:群成员禁言
 * @param friend_recall:好友消息撤回
 * @param group_card:群名片变更
 * @param offline_file:离线文件上传
 * @param client_status:客户端状态变更
 * @param essence:精华消息
 * @param notify:系统通知
 */
export type PostNoticeType =
  | 'group_upload'
  | 'group_admin'
  | 'group_decrease'
  | 'group_increase'
  | 'group_ban'
  | 'friend_add'
  | 'group_recall'
  | 'friend_recall'
  | 'group_card'
  | 'offline_file'
  | 'client_status'
  | 'essence'
  | 'notify';

/**
 * 系统通知的子类型
 * @param honor:群荣耀变更
 * @param poke:戳一戳
 * @param lucky_king:群红包幸运王
 * @param title:群成员头衔变更
 */
export type PostNoticeNotifySubType = 'honor' | 'poke' | 'lucky_king' | 'title';

/**
 * 元事件类型
 */
export type PostMetaEventType = 'lifecycle' | 'heartbeat';

/**
 *  元事件类型为heartbeat(心跳包)时的结构
 *  @param app_initialized:程序是否初始化完毕
 *  @param app_enabled:程序是否可用
 *  @param plugins_good:插件正常(可能为 null)
 *  @param app_good:程序正常
 *  @param online:是否在线
 *  @param stat:统计信息
 */
export type HeartBeatStatus = {
  app_initialized: boolean;
  app_enabled: boolean;
  plugins_good: boolean | null;
  app_good: boolean;
  online: boolean;
  stat: HeartBeatStatusStatistics;
};

/**
 * heartbeat中stat的数据结构
 * @param PacketReceived:收包数
 * @param PacketSent:发包数
 * @param PacketLost:丢包数
 * @param MessageReceived:消息接收数
 * @param MessageSent:消息发送数
 * @param DisconnectTimes:连接断开次数
 * @param LostTimes:连接丢失次数
 * @param LastMessageTime:最后一次消息时间
 */
export type HeartBeatStatusStatistics = {
  PacketReceived: number;
  PacketSent: number;
  PacketLost: number;
  MessageReceived: number;
  MessageSent: number;
  DisconnectTimes: number;
  LostTimes: number;
  LastMessageTime: number;
};
