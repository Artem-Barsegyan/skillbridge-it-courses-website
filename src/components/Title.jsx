const Title = ({ title, description }) => {
    return (
        <div className="courses-info-title main-top-title">
            <div>
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Title;