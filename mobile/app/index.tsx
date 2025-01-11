import { FlatList, StyleSheet, Text, View } from "react-native";
import products from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";

export default function HomePage() {
  return (
    <FlatList data={products} renderItem={({ item }) => <ProductListItem product={item}>{item.name}</ProductListItem>} />
  );
}
