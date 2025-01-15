import { fetchOrders } from '@/api/order';
import { Card } from '@/components/ui/card';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import dayjs from 'dayjs';

export default async function OrdersPage() {
   const orders = await fetchOrders();

   return (<div>
      <h1 className="text-2xl font-bold text-center mt-4">Orders</h1>

      <Card className="w-full max-w-screen-lg mx-auto my-4">
         <HStack className="p-4 border-b border-gray-200 gap-4">
            <Text className="font-bold">Id</Text>
            <Text className="font-bold">Date</Text>
            <Text className="ml-auto font-bold">Status</Text>
         </HStack>
         {orders.map((order) => (
            <HStack key={order.id} className="p-4 border-b border-gray-200 gap-4">
               <Text>{order.id}</Text>
               <Text>{dayjs(order.createdAt).format('DD/MM/YYYY HH:mm')}</Text>
               <Text className="ml-auto">{order.status}</Text>
            </HStack>
         ))}
      </Card>
   </div>
   );
}