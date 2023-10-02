
interface ModalProps {
    children: React.ReactNode
}

const ModalRoot = ({ children }: ModalProps) => {

    return (
        <div className="bg-purple-700">
            {children}
        </div>
    )
}

export default ModalRoot