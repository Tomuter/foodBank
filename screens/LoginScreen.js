

import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, Image } from 'react-native'


const LoginScreen = () => {
  const navigation=useNavigation()
  return (
    <View className='items-center bg-black flex-1 pt-16' >
      <View className='flex justify-between flex-1' >
        <View className='flex items-center'>
            <View className='bg-slate-300 rounded-full w-28 h-28 my-3'  />
            <View className='flex items-center'>
                <Text className=' text-4xl font-bold text-white'>Food Bank</Text>
                <Text className='text-slate-400'>Special & Delicious Food</Text>
            </View>
        </View>
        <View className='space-y-5' >
            <TouchableOpacity onPress={()=>navigation.navigate('Main')} className='bg-red-500 p-4 rounded-full'>
                <Text className='text-white text-center text-2xl font-semibold'>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-white p-4 rounded-full'>
                <Text className='text-center text-2xl font-semibold'>SignUp</Text>
            </TouchableOpacity>

        </View>
        <View>
        <View className=' flex flex-row items-center bg-red-500  mb-10 rounded-sm'>
          <View className='px-5'>
              <Text className='text-white text-4xl font-bold'>15%</Text>
              <Text className='text-white text-3xl font-semibold'>Discount</Text>
              <Text className='text-white font-light'>From Our Store</Text>
          </View>
          <View className=' border-l-2 border-b-2 border-white  rounded-sm'>
            <View>
              <Image 
              source={require('../assets/food2.jpg')}
              className='h-32 w-32 rounded-r-sm'
              />
            </View>
          </View>
        </View>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen