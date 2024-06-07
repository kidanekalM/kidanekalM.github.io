import styles from './styles.module.css'
interface Props{
    Name:string;
    motto:string;
    backgroundImage:string
}
function Hero({Name,motto,backgroundImage}:Props) {
    return<>
    <main className={styles.main} style={{ backgroundImage: `url('${backgroundImage}')` }} >

        <h1 className={styles.name}>{Name}</h1>
        <h2 className={styles.motto}>{motto}</h2>
    </main>
    </>
}
export default Hero