import { Link, Slot, Stack, Tabs } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Icon } from "@/components/ui/icon";
import { LogOut, ShoppingCart, User } from "lucide-react-native";
import { Pressable } from "react-native";
import { useCart } from "@/store/cartStore";
import { Text } from "@/components/ui/text";
import { useAuth } from "@/store/authStore";
import { Button, ButtonIcon } from "@/components/ui/button";

const queryClient = new QueryClient()
export default function Layout() {
   const countOfCartItems: number = useCart(state => state.items.length);

   const isLoggedIn = useAuth(state => !!state.token);
   const resetToken = useAuth((state) => state.resetToken);

   return (
      <GluestackUIProvider>
         <QueryClientProvider client={queryClient}>
            <Stack
               screenOptions={{
                  headerRight: () =>
                     countOfCartItems > 0 && (
                        <Link href={'/cart'} asChild>
                           <Pressable className="flex-row gap-2 mr-4 items-center">
                              <Icon as={ShoppingCart} />
                              <Text className="text-white bg-black px-2 rounded-md">{countOfCartItems}</Text>
                           </Pressable>
                        </Link>
                     ),
               }}
            >
               <Stack.Screen
                  name="index"
                  options={{
                     title: 'Vyoma',
                     headerLeft: () =>
                        !isLoggedIn && (
                           <Link href={'/login'} asChild>
                              <Pressable className="flex-row gap-2">
                                 <Icon as={User} />
                              </Pressable>
                           </Link>
                        ),
                     headerRight: () => (
                        isLoggedIn && (
                           <Button className="mr-4" onPressIn={resetToken}>
                              <ButtonIcon as={LogOut} />
                           </Button>
                        )
                     )
                  }}
               />
               <Stack.Screen name="product/[id]" options={{ title: 'Product' }} />
               <Stack.Screen name="cart" options={{ title: 'Cart' }} />
               <Stack.Screen name="(auth)/login" options={{ title: 'Login' }} />
               <Stack.Screen name="(auth)/signup" options={{ title: 'Signup' }} />
            </Stack>
         </QueryClientProvider>
      </GluestackUIProvider>
   )
}