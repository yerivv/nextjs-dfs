
import Logo from '../../../public/static/images/logo.svg'

const LogoImg = ( {type, color} ) => {
  return(
    <Logo width={140} height={62} fill={color} />
  )
}

export default LogoImg