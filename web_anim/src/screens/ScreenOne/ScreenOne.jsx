
const ScreenOne = () => {
    const svgWidth = window.innerWidth;
    const svgHeight = 110


    return (


        <div className="screenone-master-container">
            <svg className="svg-container" width={svgWidth} height={svgHeight} >
                <rect
                    x="0"
                    y="0"
                    width={svgWidth}
                    height={svgHeight}
                    style={{ fill: 'blue' }}
                />            </svg>
            <div className="header-container">
                <div className="header-logo">FuckIT</div>
                <div className="navbar-container">
                    <ul className="navbar">
                        <li>tell</li>
                        <li>your</li>
                        <li>celebrity</li>
                        <li>crush</li>
                    </ul>
                </div>
            </div>
            <div className="hero-container">
                <div className="hero-text">
                    <h1>what do i have to do to get </h1>
                    <h1>in bed with</h1>
                    <div className="damon-container">
                        <h1>my one love, </h1>
                        <h1 className="damon-salvatore">DAMON SALVATORE</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScreenOne
