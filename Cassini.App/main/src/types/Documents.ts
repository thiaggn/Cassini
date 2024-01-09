export type Subject = {
    id: number,
    title: string,
    color: TopicColor,
    content: (PageCollection | Page)[]
}

export type PageCollection = {
    id: number,
    title: string,
    pages: Page[]
}

export type Page = {
    id: number,
    title: string,
    blocks: Block[]
}

export type Block = {
    id: number,
    type: BlockType,
    content: Line[]
}

export type Line = [
    content: string,
    styling: TextStyle[]
]
export enum TextStyle {
    Bold = 'b',
    Italic = 'i',
    Code = 'c'
}
export enum BlockType {
    Text = 0,
    Image= 1,
    Table= 2,
    Code = 3
}

export enum TopicColor {
    Blue = '#015fc9',
    Green = '#469138',
    Yellow = '#d0a42b',
    Pink = '#d53891',
    Purple = '#8c21e1',
    Cyan = "#00fff7"
}