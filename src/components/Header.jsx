import NightlightIcon from '@mui/icons-material/Nightlight'
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined'

const Header = (props) => {
  const style = {
    width: '20px',
    height: '20px',
    transform: 'rotate(-15deg)',
  }
  return (
    <header
      className={
        props.mode
          ? 'text-slate-300 flex justify-between p-5 shadow-2xl font-semibold':'flex justify-between p-5 shadow-2xl text-slate-950 font-semibold' 
      }
    >
      <h4>Where in the World?</h4>
      <button
        type="button"
        onClick={() => props.setMode((prevMode) => !prevMode)}
      >
        {props.mode ? <NightlightOutlinedIcon sx={style}/>:<NightlightIcon sx={style}/>}
        Dark mode
      </button>
    </header>
  )
}

export default Header
