import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetcher, QueryKeys } from '../../queryClient';
import { Product } from '../../type';
import ProductDetail from '../../components/product/details';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    fetcher({
      method: 'GET',
      path: `/products/${id}`,
      params: { id },
    })
  );

  if(!data) return null;
  

  return (
    <div>
      <h2>상품 상세</h2>
    <ProductDetail item={data}/>
   </div>
  )
};
export default ProductDetailPage;
