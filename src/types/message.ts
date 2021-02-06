export enum MessageType {
  System = 'system',
  Basic = 'basic',
  Image = 'image',
}

export enum FileType {
  Image = 'image',
}

export type MessageSchema = {
  id: string
  content: string
  messageType: MessageType
  attachments: AttachmentSchema[]
  links: LinkSchema[]
  creator?: CreatorSchame
  createdDate: string
}

export type AttachmentSchema = {
  id: string
  name: string
  size: number
  previewUrl: string
  downloadUrl: string
  fileType: FileType
}

export type LinkSchema = {
  id: string
  name: string
  url: string
}

export type CreatorSchame = {
  id: string
  name: string
  avatar: string
}

export type MessageRenderSchema = {
  rawData: MessageSchema
  render: (messages: MessageSchema) => React.ReactNode
}