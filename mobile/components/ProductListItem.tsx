import { Text } from "@/components/ui/text";
import { Card } from "./ui/card";
import { Image } from "./ui/image";
import { VStack } from "./ui/vstack";
import { Heading } from "./ui/heading";
import { Link } from "expo-router";
import { Pressable } from "react-native";

export default function ProductListItem({ product }) {
   return (
      <Link href={`/product/${product.id}`} asChild>
         <Pressable className="flex-1">
            <Card className="p-5 rounded-lg max-w-[360px] flex-1">
               <Image
                  source={{
                     uri: product.image,
                  }}
                  className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
                  alt={`${product.name} image`}
                  resizeMode="contain"
               />
               <Text>{product.name}</Text>

               <Heading size="md" className="mb-1">
                  ${product.price}
               </Heading>
            </Card>
         </Pressable>
      </Link>
   )
}