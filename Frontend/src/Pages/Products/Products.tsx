
import ProductCard from '../../components/productCard/ProductCard'
import styles from './styles.module.css'
import spc from './pics/spc.jpg'
import cer from './pics/ceramics.jpg'
import gyp from './pics/gypsum.jpg'
export default function Products(){
    return <>
        {/* <h1 className={styles.title}>Products</h1> */}
        <div className={styles.services}>
        <ProductCard side='right' title="" desc="" imgSrc={"spc"} callToAction='Contact' link="tel:+251922335151"/>
        <ProductCard side='right' title="" desc="" imgSrc={"cer"} callToAction='Contact' link="tel:+251922335151"/>
        <ProductCard side='right' title="" desc="" imgSrc={"gyp"} callToAction='Contact' link="tel:+251922335151"/>
    </div> 
    </>
}