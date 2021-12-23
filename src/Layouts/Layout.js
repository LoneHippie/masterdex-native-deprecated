import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import { colors } from '../styles/theme';

const Layout = ({ children }) => {

    return (
        <SafeAreaView style={styles.main}>
            { children }
        </SafeAreaView>
    )
};

export default Layout;

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
		flex: 1,
        backgroundColor: colors.white,
		paddingTop: StatusBar.currentHeight,
        color: colors.text
    }
});