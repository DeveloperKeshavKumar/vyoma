import { FlatList, StyleSheet, Text, View } from "react-native";
import products from "@/assets/products.json";
import ProductListItem from "@/components/ProductListItem";
import { Button, ButtonText } from "@/components/ui/button";

export default function HomePage() {
  return (
    <Button size="sm" variant="solid" action="positive">
      <ButtonText>
        Click Me
      </ButtonText>
    </Button>
  )
  // return (
  //   <FlatList data={products} renderItem={({ item }) => <ProductListItem product={item}>{item.name}</ProductListItem>} />
  // );
}
