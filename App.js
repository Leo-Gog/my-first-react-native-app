import {  StyleSheet} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import VideoList from './components/VideoList';
import MainNavBar from './components/MainNavBar';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView >
        <Header />
        <VideoList />
        <MainNavBar />
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

const styles = StyleSheet.create({
  safeArea:{
    flex:1
  }
});
