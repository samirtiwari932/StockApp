import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {FontAwesome} from '@expo/vector-icons';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                // Load fonts
                await Font.loadAsync({
                    PlusJakartaSans: require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
                    PlusJakartaExtraBold: require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
                    PlusJakartaSansBold: require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
                    PLusJakaratSansItalic: require('../assets/fonts/PlusJakartaSans-Italic.ttf'),
                    PlusJakartaBoldItalic: require('../assets/fonts/PlusJakartaSans-BoldItalic.ttf'),
                    PlusJakartaSansMedium: require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
                    PlusJakartaSansSemiBold: require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),

                    ...FontAwesome.font,
                });
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                alert(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}