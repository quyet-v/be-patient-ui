interface Props {
    children: React.ReactNode,
    className?: string
}

export const FullContainer: React.FC<Props> = ({children, className}) => {
    return <div className={`w-full h-full ${className}`}>
        {children}
    </div>
}