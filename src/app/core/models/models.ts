export interface TaskModel {
    id?: string;
    name: string;
    category: string;
    description: string;
    date: Date;
    reminder: string;
    frequency: 'Daily' | 'Weekly' | 'Monthly' | 'Each year';
}

export interface ToastModel {
    action: 'open' | 'close';
    status?: 'success' | 'error';
    content?: string;
}
