export interface TaskModel {
    id?: string;
    name: string;
    category: string;
    description: string;
    reminder: Date;
    frequency: 'Daily' | 'Weekly' | 'Monthly' | 'Each year';
}
