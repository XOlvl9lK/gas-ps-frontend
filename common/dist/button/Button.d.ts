import { FC } from 'react';
declare type ButtonThemes = 'primary' | 'danger' | 'accept' | 'primaryOutlined' | 'dangerOutlined' | 'acceptOutlined';
export interface ButtonProps {
    theme: ButtonThemes;
    onClick?: (...args: any[]) => void;
    label: string;
    disabled?: boolean;
}
declare const button: FC<ButtonProps>;
export default button;
