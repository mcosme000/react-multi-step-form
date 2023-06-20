import classnames from 'classnames'

const Button = ({
  children,
  primary,
  confirm,
  link,
  ...rest
}) => {

  const classes = classnames(rest.className, 'p-2', {
    'bg-blue-200': primary,
    'bg-sky-200': confirm,
    'text-grey-200': link
  })

  return (
    <button {...rest} className={classes}>{children}</button>
  )
}

export default Button;
