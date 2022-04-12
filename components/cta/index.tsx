import styles from './cta.module.scss'

const CTA = ({ 
    text,
    icon,
    name,
    onClick
  }:{ 
   text : string,
   icon: string,
   name: string,
   onClick: any
  }) => {
  return(
    <button className={styles.cta} name={name} onClick={onClick}>
      <i className={icon} /> {text}
    </button>
  )
}

export default CTA;