import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid'


const Search = () => {
    const navigation=useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
    <View className='flex items-center  p-3 w-14 rounded-full bg-red-500 mt-3'>
        <MagnifyingGlassIcon color={'white'} size={24} />      
    </View>
    </TouchableOpacity>
  )
}

export default Search