function ErrorBox({message}){
    return(
        <div className="center">
            <article className="container">
                <p className="error-msg">{message}</p>
            </article>
        </div>
    )
}

export default ErrorBox;