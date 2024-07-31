export type ChannelTypes = {
  name: string;
  id: string;
  removable: boolean;
};

export type MessageTypes = {
  username: string;
  id: string;
  channelId: string;
  body: string;
};
