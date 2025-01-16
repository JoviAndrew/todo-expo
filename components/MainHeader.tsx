import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import HeaderButtonMenu from './HeaderButtonMenu';

export type Props = {
  pageName: string;
};

// Main header component in index page
const MainHeader: React.FC<Props> = ({pageName}) => {
  
  return (
    <SafeAreaView style={{
				backgroundColor: '#8FBCE6',
				flexDirection: 'row',
				paddingBottom: 10,
				paddingTop: 30,
				paddingHorizontal: 20,
				justifyContent: 'space-between',
				alignContent: 'center',
			}}>
      <Text style={{ fontSize: 30, fontWeight: '500', color: 'white'}}>{pageName}</Text>
			{/* <HeaderButtonMenu /> */}
    </SafeAreaView>
  )
}

export default MainHeader