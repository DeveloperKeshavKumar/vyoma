import { registerUser } from "@/api/auth";
import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useAuth } from "@/store/authStore";
import { useMutation } from "@tanstack/react-query";
import { Link, Redirect, useRouter } from "expo-router";
import { Mail, User } from "lucide-react-native";
import { useState } from "react";

export default function SignupPage() {
   const [showPassword, setShowPassword] = useState(false);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const handleState = () => {
      setShowPassword((showState) => {
         return !showState;
      });
   };

   const router = useRouter();
   const isLoggedIn = useAuth(state => !!state.token);

   const signinMutation = useMutation({
      mutationFn: () => registerUser(email, password, name),
      onSuccess: () => {
         router.push('/login')        
      },
      onError: (error) => {
         console.log(error);
      },
   });

   if (isLoggedIn) {
      return <Redirect href={'/'} />;
   }

   return (
      <FormControl className="p-4 rounded-lg mx-auto max-w-[100%]" isInvalid={signinMutation.error}>
         <VStack space="xl">
            <Heading className="text-center mx-auto">Signup to new account</Heading>
            <VStack space="sm">
               <Text className="text-typography-500">Name</Text>
               <Input className="min-w-[250px]">
                  <InputField value={name} onChangeText={setName} type="text" />
                  <InputSlot className="pr-3">
                     <InputIcon as={User} className="mr-4" />
                  </InputSlot>
               </Input>
            </VStack>
            <VStack space="sm">
               <Text className="text-typography-500">Email</Text>
               <Input className="min-w-[250px]">
                  <InputField value={email} onChangeText={setEmail} type="text" />
                  <InputSlot className="pr-3">
                     <InputIcon as={Mail} className="mr-4" />
                  </InputSlot>
               </Input>
            </VStack>
            <VStack space="sm">
               <Text className="text-typography-500">Password</Text>
               <Input className="text-center">
                  <InputField value={password} onChangeText={setPassword} type={showPassword ? "text" : "password"} />
                  <InputSlot className="pr-3" onPress={handleState}>
                     <InputIcon className="px-3 mr-4"
                        as={showPassword ? EyeIcon : EyeOffIcon}
                     />
                  </InputSlot>
               </Input>
            </VStack>
            <Text>
               Already have an account,
               <Link href='/login'> <Text className="underline">Login</Text></Link>
            </Text>
            <Button
               className="mx-auto"
               onPress={() => signinMutation.mutate()}
            >
               <ButtonText className="text-typography-0">Create</ButtonText>
            </Button>
         </VStack>
      </FormControl>
   );
}
