import { ButtonComponent } from 'src/app/ui-components/button/button.component';

export interface TaskModel {
    id: string;
    title: string;
}

export interface ModalConfig {
    title: string;
    content: any;
    buttonSend?: ButtonComponent;
    buttonCancel?: ButtonComponent;
}
