import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Link } from "expo-router";
import { Mail } from "lucide-react-native";
import { useState } from "react";

export default function LoginPage() {
   const [showPassword, setShowPassword] = useState(false);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const handleState = () => {
      setShowPassword((showState) => {
         return !showState;
      });
   };
   return (
      <FormControl className="p-4 rounded-lg">
         <VStack space="xl">
            <Heading className="text-center ">Login to your account</Heading>
            <VStack space="md">
               <Text className="text-typography-500">Email</Text>
               <Input>
                  <InputField value={email} onChangeText={setEmail} type="text" placeholder="Enter email" />
                  <InputSlot className="pr-3">
                     <InputIcon as={Mail} className="mr-4" />
                  </InputSlot>
               </Input>
            </VStack>
            <VStack space="md">
               <Text className="text-typography-500">Password</Text>
               <Input>
                  <InputField value={password} onChangeText={setPassword} type={showPassword ? "text" : "password"} placeholder="Enter password" />
                  <InputSlot className="pr-3" onPress={handleState}>
                     <InputIcon className="mr-4"
                        as={showPassword ? EyeIcon : EyeOffIcon}
                     />
                  </InputSlot>
               </Input>
            </VStack>
            <Text>
               Do not have an account,
               <Link href='/signup'> <Text className="underline">Signup</Text></Link>
            </Text>
            <Button
               className="mx-auto"
               onPress={() => {
                  // setShowModal(false);
                  // console.log("Login Page")
               }}
            >
               <ButtonText className="text-typography-0">Now</ButtonText>
            </Button>
         </VStack>
      </FormControl>
   );
}
