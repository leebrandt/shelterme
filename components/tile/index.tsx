import styles from './tile.module.scss'

const Tile = ({
  height,
  width,
  backgroundImage,
  name
}:{
  height: string | number, 
  width: string | number,
  backgroundImage: string,
  name: string
}) => {
  return(
    <div className={styles.tile} style={{
      height, 
      width, 
      backgroundImage:`url(${backgroundImage})`
    }}>
      <span>{name}</span>
    </div>

  )
}

export default Tile