import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { AdjustmentsHorizontalIcon, ArrowLeftIcon, Bars3Icon, MagnifyingGlassIcon } from 'react-native-heroicons/solid'
import SearchFoodCategory from '../components/SearchFoodCategory'
import { useNavigation } from '@react-navigation/native'


const SearchScreen = () => {
  const navigation=useNavigation()
  return (
    <SafeAreaView className='bg-black flex-1'>
      <ScrollView className='px-2'>
        <View className='flex flex-row justify-between '>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
          <ArrowLeftIcon color={'gray'} />
          </TouchableOpacity>         
          <Bars3Icon color={'gray'}  />
        </View>
        <View className='flex flex-row items-center mt-8 '>
        <View className='bg-white items-center flex-row flex-1 p-3 rounded-full justify-between'>        
          <TextInput className=' text-gray-500 text-md' placeholder='Search from here...' />
           <MagnifyingGlassIcon color='black' />
        </View>
        <View className='ml-10 mr-5 border border-white rounded-md'>
          <AdjustmentsHorizontalIcon color={'white'} />
        </View>
        </View>
        <View className='mt-8'>
          <SearchFoodCategory />
          <SearchFoodCategory />
          <SearchFoodCategory />
          <SearchFoodCategory />
          <SearchFoodCategory />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchScreen