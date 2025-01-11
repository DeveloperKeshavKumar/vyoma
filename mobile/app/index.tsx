import { FlatList, StyleSheet, Text, View } from "react-native";
import products from "@/assets/products.json";
import ProductListItem from "@/components/ProductListItem";
import { useWindowDimensions } from "react-native";

export default function HomePage() {
  const { width } = useWindowDimensions();
  const numColumns = width > 1024 ? 4 : width > 640 ? 3 : 2;

  // npx gluestack-ui add useBreakPointsValue
  // const numColumns = useBreakPointsValue({
  // deault: 2,
  // md:3,
  // lg:4
  // })
  return (
    <FlatList
      key={numColumns}
      numColumns={numColumns}
      contentContainerClassName="gap-2 mx-auto w-full "
      columnWrapperClassName="gap-2"
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />} />
  );
}
