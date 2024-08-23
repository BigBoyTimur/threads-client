type Props = {
  children: string
  size?: string
}
function Typography({ children, size }: Props) {
  return (
    <p className={size}>{ children }</p>
  );
}

export default Typography;