import styles from './styles.module.css'
export default function AdminSignIn()
{
    return<>
    <div className={styles.container}>
        <h1 className={styles.title}>Sign In</h1>
        <form action="POST" className={styles.formElement}>
            <div className={styles.formItem}>
                <label htmlFor="username">Username</label>
                <input className={styles.inputField} type="text" id="username" required />
            </div>
            <div className={styles.formItem}>
                <label htmlFor="password">Password</label>
                <input className={styles.inputField} type="password" name="password" id="password" />
            </div>
            <input type="submit" value="submit" className={styles.submit} onSubmit={function(e){console.log(e); }}/>
        </form>
    </div>
    </>
}