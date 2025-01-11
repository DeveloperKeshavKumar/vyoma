import { FlatList, StyleSheet, Text, View } from "react-native";
import products from "@/assets/products.json";
import ProductListItem from "@/components/ProductListItem";

export default function HomePage() {
  return (
    <FlatList 
    numColumns={2}
    contentContainerClassName="gap-2"
    columnWrapperClassName="gap-2"
    data={products}
     renderItem={({ item }) => <ProductListItem product={item} />} />
  );
}
