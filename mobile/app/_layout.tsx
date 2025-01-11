import { Slot, Stack, Tabs } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function Layout() {
   return (
      <GluestackUIProvider>
         <Stack>
            <Stack.Screen name="index" options={{ title: 'Vyoma' }} />
            <Stack.Screen name="product/[id]" options={{ title: 'Product' }} />
         </Stack>
      </GluestackUIProvider>
   )
}