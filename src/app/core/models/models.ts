export interface TaskModel {
    id?: string;
    name: string;
    category: string;
    description: string;
    reminder: Date;
    frequency: 'Daily' | 'Weekly' | 'Monthly' | 'Each year';
}

export interface ToastModel {
    action: 'open' | 'close';
    status?: 'success' | 'error';
    content?: string;
}
