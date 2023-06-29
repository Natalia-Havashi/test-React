const Modal = ({children}) => {
    return (
        <div style={{display: 'block', backdropFilter: 'blur(5px)'}}>
            <div>
                <div>
                    <div>
                        <h5>Modal</h5>
                        <button type="button"
                        aria-label="Close"></button>
                    </div>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Modal