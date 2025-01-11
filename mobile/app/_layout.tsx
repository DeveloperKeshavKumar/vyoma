import { Slot, Stack, Tabs } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()
export default function Layout() {
   return (
      <GluestackUIProvider>
         <QueryClientProvider client={queryClient}>
            <Stack>
               <Stack.Screen name="index" options={{ title: 'Vyoma' }} />
               <Stack.Screen name="product/[id]" options={{ title: 'Product' }} />
            </Stack>
         </QueryClientProvider>
      </GluestackUIProvider>
   )
}