import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Stack, useLocalSearchParams } from "expo-router";
// import products from "@/assets/products.json";
import { getProductById } from "@/api/products";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator } from "react-native";

export default function ProductDetails() {

   const { id } = useLocalSearchParams();
   const { data, isLoading, error } = useQuery({ queryKey: ["product", id], queryFn: () => getProductById(Number(id)) });
   // const [product, setProduct] = useState<ProductType | null>(null);
   // useEffect(() => {
   //    const fetchProduct = async (id: number) => {
   //       const data = await getProductById(id);
   //       console.log(data);
   //       setProduct(data.product);
   //    }
   //    fetchProduct(Number(id));
   // }, []);

   if (isLoading) {
      return <ActivityIndicator />
   }

   if (error) {
      return <Text>Product not found</Text>
   }
   return (
      <Card className="p-5 rounded-lg max-w-[100%] flex-1">
         <Stack.Screen options={{ title: data.product.name }} />
         <Image
            source={{
               uri: data.product.image,
            }}
            className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
            alt={`${data.product.name} image`}
            resizeMode="contain"
         />
         <Text>{data.product.name}</Text>

         <VStack className="mb-6" >
            <Heading size="md" className="mb-4">
               ${data.product.price}
            </Heading>
            <Text>{data.product.description}</Text>
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