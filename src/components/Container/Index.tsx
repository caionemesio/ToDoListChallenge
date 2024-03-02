import { ContainerProps } from "../../interfaces/interfaces";


const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div className={`bg-lightGray rounded-[10px] ${className || ''}`} {...props}>
      {children}
    </div>
  )
}
export default Container