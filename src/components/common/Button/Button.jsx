import styles from './Button.module.css'

/**
 * Component Button dung chung cho toan he thong.
 * variant: 'primary' | 'secondary' | 'ghost'
 * size: 'sm' | 'md' | 'lg'
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  onClick,
  ...rest
}) {
  const className = [styles.btn, styles[variant], styles[size]]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
