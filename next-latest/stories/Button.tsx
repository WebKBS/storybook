import React from 'react';

import './button.css';

export interface ButtonProps {
  /**
   * 버튼의 primary 속성을 설정합니다.
   */
  primary?: boolean;
  /**
   *  버튼의 배경색을 설정합니다.
   */
  backgroundColor?: string;
  /**
   * 버튼의 사이즈를 설정합니다.
   */
  size?: "small" | "medium" | "large" | "xlarge";
  /**
   * 버튼의 라벨을 설정합니다.
   */
  label: string;
  /**
   * 버튼의 클릭 이벤트를 설정합니다.
   */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
