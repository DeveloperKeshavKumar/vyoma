import { ActivityIndicator, FlatList, Text } from "react-native";
// import { useEffect, useState } from "react";
// import products from "@/assets/products.json";
import ProductListItem from "@/components/ProductListItem";
import { useWindowDimensions } from "react-native";
import { getProducts } from "@/api/products";
import { useQuery } from "@tanstack/react-query";

export default function HomePage() {
  const { width } = useWindowDimensions();
  const numColumns = width > 1024 ? 4 : width > 640 ? 3 : 2;

  // npx gluestack-ui add useBreakPointsValue
  // const numColumns = useBreakPointsValue({
  // deault: 2,
  // md:3,
  // lg:4
  // })

  const { data, isLoading, error } = useQuery({ queryKey: ["products"], queryFn: getProducts });

  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const data = await getProducts();
  //     setProducts(data.products);
  //   }
  //   fetchProducts();
  // }, [])

  if (isLoading) {
    return <ActivityIndicator />
  }

  if (error) {
    return <Text>Error: {error.message}</Text>
  }

  return (
    <FlatList
      key={numColumns}
      numColumns={numColumns}
      contentContainerClassName="gap-2 mx-auto w-full "
      columnWrapperClassName="gap-2"
      data={data.products}
      renderItem={({ item }) => <ProductListItem product={item} />} />
  );
}
