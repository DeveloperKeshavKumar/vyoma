import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { useLocalSearchParams } from "expo-router";
import products from "@/assets/products.json";

interface ProductType {
   id: number;
   name: string;
   description: string;
   image: string;
   price: number;
}

export default function ProductDetails() {
   const { id } = useLocalSearchParams();
   const product: ProductType = products.find((product) => product.id === Number(id));
   if(!product) {
      return <Text>Product not found</Text>
   }
   return (
      <Card className="p-5 rounded-lg max-w-[100%] flex-1">
         <Image
            source={{
               uri: product.image,
            }}
            className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
            alt={`${product.name} image`}
            resizeMode="contain"
         />
         <Text>{product.name}</Text>

         <VStack className="mb-6" >
            <Heading size="md" className="mb-4">
               ${product.price}
            </Heading>
            <Text>{product.description}</Text>
         </VStack>
         <Box className="flex-col sm:flex-row">
            <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
               <ButtonText size="sm">Add to cart</ButtonText>
            </Button>
            <Button
               variant="outline"
               className="px-4 py-2 border-outline-300 sm:flex-1"
            >
               <ButtonText size="sm" className="text-typography-600">
                  Wishlist
               </ButtonText>
            </Button>
         </Box>
      </Card>
   )

}