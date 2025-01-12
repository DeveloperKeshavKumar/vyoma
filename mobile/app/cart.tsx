import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useCart } from "@/store/cartStore";
import { Link } from "expo-router";
import { StyleSheet, View, FlatList } from "react-native";

export default function CartPage() {
  const cartItems = useCart(state => state.items);
  const resetCart = useCart(state => state.resetCart)
  const onCheckout = async () => {
    // send order to server
    //reset the cart in store
    resetCart();
  }

  if (cartItems.length === 0) {
    return (
      <View>
        <Text bold className="mx-auto text-2xl">No Items in cart</Text>
        <Link href="/" asChild>
          <Button className="max-w-max mx-auto mt-4">
            <ButtonText>Add Now</ButtonText>
          </Button>
        </Link>
      </View>
    )
  }

  return (
    <FlatList
      contentContainerClassName="gap-2 mx-auto max-w-[80%] w-full"
      data={cartItems}
      renderItem={({ item }) => (
        <HStack className="bg-white p-3">
          <VStack space="sm">
            <Text bold>{item.product.name}</Text>
            <Text>$ {item.product.price}</Text>
          </VStack>
          <Text className="ml-auto">{item.quantity}</Text>
        </HStack>
      )}
      ListFooterComponent={() => (
        <Button onPress={onCheckout}>
          <ButtonText>Check Out</ButtonText>
        </Button>
      )}
    />
  );
}
