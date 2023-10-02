interface ModalTextProps{
text:string

}
const ModalText = ({text}:ModalTextProps)=>{
    return(
        <p>{text}</p>
    )
}

export default ModalText