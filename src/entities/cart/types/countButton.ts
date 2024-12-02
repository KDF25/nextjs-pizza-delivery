import { counterAction } from '../config';

export interface CountButtonProps {
  value?: number;
  size?: 'sm' | 'lg';
  onClick?: (type: counterAction) => void;
  className?: string;
}
