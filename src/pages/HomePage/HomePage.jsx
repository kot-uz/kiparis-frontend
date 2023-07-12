import { useGetAllProductsQuery } from "../../store";

const HomePage = () => {
  const {isLoading, isError, data} = useGetAllProductsQuery();
  return <div>
    {isLoading && <div>Loading...</div>}
    {isError && <div>Error occured. See console log</div>}
    {data &&
      <ul>
        {data.map(product=>(
        <li key={product._id}>{product.brand} {product.model}</li>
      ))}
    </ul>}
  </div>
}

export default HomePage;