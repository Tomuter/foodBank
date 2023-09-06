import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { ArrowLeftIcon, Bars3Icon} from 'react-native-heroicons/solid';
import FoodCategory from '../components/FoodCategory';
import Search from '../components/Search';

const HomeScreen = () => {
  const navigation=useNavigation()
  return (
    <>
    <ScrollView className='bg-black'>
      <View className='relative' >
        <View className='bg-gray-900 inset-0 opacity-50'>
         <Image 
           source={require('../assets/food1.jpg')}
           className='w-full h-60 bg-gray-300 p-4 rounded-br-2xl rounded-bl-2xl'
         />
         </View>
         {/* for arrow to go back */}
         <TouchableOpacity
         onPress={navigation.goBack}
         className='absolute top-14 left-5 p-2 rounded-full'>
            <ArrowLeftIcon size={20} color='gray' />
         </TouchableOpacity>
         <TouchableOpacity
         onPress={navigation.goBack}
         className='absolute top-14 right-5 p-2rounded-full'>
            <Bars3Icon size={20} color='gray' />
         </TouchableOpacity>
         <Text className='absolute top-36 right-16 text-white text-3xl font-bold'>
          Different Kind of Food
         </Text>
      </View>
      <View className='pl-2'>
      <Search />
      <FoodCategory />
      <FoodCategory />
      </View>
      </ScrollView>
    </>
  )
}

export default HomeScreen