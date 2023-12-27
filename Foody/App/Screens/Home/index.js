import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AppButton, Container, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { useDispatch } from 'react-redux'
import { logout } from '../../Redux/reducer/User'
import HeaderLocation from '../../Components/CommonComponents/HeaderLocation/HeaderLocation'
import SearchBar from '../../Components/CommonComponents/SearchBar/SearchBar'
import Category from '../../Components/AppStack/Home/Category/Category'
import NearByHotel from '../../Components/AppStack/Home/NearByHotel/NearByHotel'

const Home = () => {
    const dispatch = useDispatch();
    return (
        <Container
            // style={{
            //     justifyContent: 'center',
            //     alignItems: 'center'
            // }}
            style={styles.Container}
        >   
            {/* <Text.Heading
                title='This is Home Page'
                style={{
                    fontSize: moderateScale(18)
                }}
            />
            <AppButton
                title='Go To Auth with Logout'
                textStyle={{
                    color: '#fff',
                    fontWeight: '700'
                }}
                style={{
                    paddingHorizontal: moderateScale(15),
                    marginTop: moderateScale(10)
                }}
                onPress={() => dispatch(logout())}
            /> */}

            <View>
                <HeaderLocation/>
                <SearchBar/>
                <Category/>
                <NearByHotel/>
            </View>
        </Container>
    )
}
const styles = StyleSheet.create({
    Container:{
        paddingHorizontal:20
    }
})

export default Home
