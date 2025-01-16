import { ReactNode } from 'react';

interface ToastProps {
  children: ReactNode;
  position?: 'start' | 'center' | 'end';
  vertical?: 'top' | 'middle' | 'bottom';
  type?: 'info' | 'success' | 'warning' | 'error';
}

export const Toast = ({
  children,
  position = 'end',
  vertical = 'bottom',
  type = 'info'
}: ToastProps) => { 
    console.log(type);
  const positionClasses = `toast-${position} toast-${vertical}`;
  return (
    <div className={`toast ${positionClasses} z-50`}>
      <div className={`alert alert-${type}`}>
        <span>{children}</span>
      </div>
    </div>
  );
};
