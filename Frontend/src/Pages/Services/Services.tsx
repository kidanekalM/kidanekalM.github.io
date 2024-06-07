
import ProductCard from "../../components/productCard/ProductCard"
import styles from './styles.module.css'
export default function Services(){
        return <>
        {/* <h1 className={styles.title}>Services</h1> */}
    <div className={styles.services}>
        <ProductCard side='right' title="Web Design" desc="" imgSrc={"arc"} callToAction='Call Us' link="tel:+251922335151"/>
    </div>
    </>
}