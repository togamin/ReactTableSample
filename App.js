import { createAppContainer,createStackNavigator } from 'react-navigation';
import TableScreen from './screen/TableScreen';
import DetailScreen from './screen/DetailScreen';

const App = createStackNavigator({
  Home:{screen: TableScreen},
  DetailScreen:{screen: DetailScreen},
},{
  defaultNavigationOptions:{
    //ヘッダーの文字
    headerTitle:'Table',
    headerTintColor:'#fff',
    //ヘッダーのスタイル
    headerBackTitle:null,
    headerStyle:{
      backgroundColor:'#333366',
    },
    //ヘッダータイトルのスタイル
    headerTitleStyle:{
      color:'#fff',
    },
  },
});

export default createAppContainer(App);
