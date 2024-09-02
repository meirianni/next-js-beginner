import { useParams } from "next/navigation";
import { useRouter } from "next/router";


const ProductName = () => {
    const router = useRouter()
    return (
        <>
        ProductName : {router.query.productName}
        </>
    )
}

export default ProductName;