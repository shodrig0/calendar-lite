import type { TaskItem } from "../types/task"

const generatedId = crypto.randomUUID()

// const calculateDuration = (start: number, end: number): number => {
//     return start + end
// }

export const mockTask: TaskItem[] = [
    {
        id: generatedId,
        title: 'Example Task 1',
        startTask: 14,
        endTask: 16,
    },
    {
        id: generatedId,
        title: 'Example Task 2',
        startTask: 15,
        endTask: 19,
    }
]