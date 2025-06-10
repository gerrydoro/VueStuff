export default interface ItemToDo {
    assignee: any
    idx: number,
    title: string,
    done: boolean
    timestamp: string,
    user: string
}

export interface ItemToDoNext extends ItemToDo {
    next: ItemToDo
}