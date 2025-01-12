import { Link, Redirect, Slot, Stack, Tabs, useRouter } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Icon } from "@/components/ui/icon";
import { ShoppingCart } from "lucide-react-native";
import { Platform, Pressable } from "react-native";
import { useCart } from "@/store/cartStore";
import { Text } from "@/components/ui/text";

const queryClient = new QueryClient()
export default function Layout() {
   const countOfCartItems: number = useCart(state => state.items.length);
   const router = useRouter();

   return (
      <GluestackUIProvider>
         <QueryClientProvider client={queryClient}>
            <Stack
               screenOptions={{
                  headerRight: () => (countOfCartItems > 0 &&
                     <Link href={'/cart'} asChild>
                        <Pressable
                           onPressIn={() => {
                              if (Platform.OS === 'android') {
                                 router.push('/cart')
                              }
                           }}
                           className="mr-4 flex-row gap-2 justify-center items-center">
                           <Icon as={ShoppingCart} />
                           <Text bold className="px-2  rounded-full bg-black text-white">{countOfCartItems}</Text>
                        </Pressable>
                     </Link>
                  )
               }}
            >
               <Stack.Screen name="index" options={{ title: 'Vyoma' }} />
               <Stack.Screen name="product/[id]" options={{ title: 'Product' }} />
               <Stack.Screen name="cart" options={{ title: 'Cart' }} />
            </Stack>
         </QueryClientProvider>
      </GluestackUIProvider>
   )
}