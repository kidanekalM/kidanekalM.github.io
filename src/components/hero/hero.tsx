import styles from './styles.module.css'
interface Props{
    Name:string;
    motto:string;
    backgroundImage:string
}
function Hero({Name,motto,backgroundImage}:Props) {
    return <>
      <main className={styles.main}>
        {backgroundImage && (
          <img className={styles.avatar} src={backgroundImage} alt={`${Name} avatar`} loading="lazy" />
        )}
        <h1 className={styles.name}>{Name}</h1>
        <h2 className={styles.motto}>{motto}</h2>
        <div className={styles.blob + ' ' + styles.one}></div>
        <div className={styles.blob + ' ' + styles.two}></div>
      </main>
    </>
}
export default Hero