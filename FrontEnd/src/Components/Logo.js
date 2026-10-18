const logo = new URL('../../Resources/icons_and_logos/logo.svg', import.meta.url).href

const Logo = () => {
    return (<div className = "logo">
       <img src={logo} alt="Logo" /> 
    </div>)
}

export default Logo;