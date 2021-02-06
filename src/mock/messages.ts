import type { MessageSchema } from '../types'
import { MessageType, FileType } from '../types'
import avatar from '../assets/logo.svg'
import bg from '../assets/bg.png'

export function getMessages() {
  const mockMessages: MessageSchema[] = [
    {
      id: 'message-01',
      messageType: MessageType.Basic,
      content: '这是一条文字消息',
      attachments: [],
      links: [],
      creator: {
        id: '001',
        name: 'Jack',
        avatar,
      },
      createdDate: '2020-02-05 10:10',
    },
    {
      id: 'message-02',
      messageType: MessageType.Basic,
      content: '',
      attachments: [
        {
          id: 'attachment-001',
          name: '附件1',
          size: 100,
          previewUrl: avatar,
          downloadUrl: '',
          fileType: FileType.Image,
        },
        {
          id: 'attachment-002',
          name: '附件2',
          size: 100,
          previewUrl: avatar,
          downloadUrl: '',
          fileType: FileType.Image,
        },
      ],
      links: [],
      creator: {
        id: '001',
        name: 'Jack',
        avatar,
      },
      createdDate: '2020-02-05 10:11',
    },
    {
      id: 'message-03',
      messageType: MessageType.Basic,
      content: '消息 + 附件 ~~~~~~~~~~',
      attachments: [
        {
          id: 'attachment-003',
          name: '附件3',
          size: 100,
          previewUrl: avatar,
          downloadUrl: '',
          fileType: FileType.Image,
        },
        {
          id: 'attachment-004',
          name: '附件4',
          size: 100,
          previewUrl: avatar,
          downloadUrl: '',
          fileType: FileType.Image,
        },
      ],
      links: [],
      creator: {
        id: '001',
        name: 'Jack',
        avatar,
      },
      createdDate: '2020-02-05 10:15',
    },
    {
      id: 'message-04',
      messageType: MessageType.System,
      content: '这是一条系统消息',
      attachments: [],
      links: [],
      createdDate: '2020-02-05 10:19',
    },
    {
      id: 'message-05',
      messageType: MessageType.Basic,
      content: '这是一条连接消息',
      attachments: [],
      links: [
        {
          id: 'link-01',
          name: '百度一下',
          url: 'https://www.baidu.com',
        },
        {
          id: 'link-02',
          name: 'Google',
          url: 'https://google.com',
        },
        {
          id: 'link-03',
          name: 'dogedoge',
          url: 'https://www.dogedoge.com',
        }
      ],
      creator: {
        id: '001',
        name: 'Jack',
        avatar,
      },
      createdDate: '2020-02-05 18:19',
    },
    {
      id: 'message-06',
      messageType: MessageType.System,
      content: '邀请成员[XXX]进群成功',
      attachments: [],
      links: [],
      createdDate: '2020-02-05 20:19',
    },
    {
      id: 'message-07',
      messageType: 'unsupport' as MessageType,
      content: '',
      attachments: [],
      links: [],
      createdDate: '2020-02-06 11:30',
    },
    {
      id: 'message-08',
      messageType: MessageType.Image,
      content: '',
      attachments: [
        {
          id: 'attachment-003',
          name: '附件3',
          size: 100,
          previewUrl: bg,
          downloadUrl: '',
          fileType: FileType.Image,
        },
        {
          id: 'attachment-004',
          name: '附件4',
          size: 100,
          previewUrl: avatar,
          downloadUrl: '',
          fileType: FileType.Image,
        },
      ],
      links: [],
      createdDate: '2020-02-06 20:30',
    }
  ]
  return new Promise<MessageSchema[]>((resolve, reject) => {
    resolve(mockMessages)
  })
}