function Error404Handler({location}) {
    return (
        <div>
            sorry no adress like this <code>{location.pathname}</code>
        </div>
    )
}

export default Error404Handler
