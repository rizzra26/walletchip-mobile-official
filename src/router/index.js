import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SignIn,
  SignUp,
  CreatePin,
  ResetPassword,
  ForgotPassword,
  HomePage,
  DetailTransaction,
  PinSuccess,
  TransactionHistory,
  SearchReceiver,
  Profile,
  PersonalInfo,
  InputAmount,
  Confirmation,
  TopUp,
  ChangePassword,
  ManagePhone,
  PinConfirm,
  TransferResult,
  Notification,
} from '../screens';
import HeaderHome from '../components/HeaderHome';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
        headerTitleStyle: {
          fontFamily: 'NunitoSans-SemiBold',
        },
      }}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreatePin"
        component={CreatePin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PinSuccess"
        component={PinSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          header: props => <HeaderHome {...props} />,
        }}
      />
      <Stack.Screen
        name="TopUp"
        component={TopUp}
        options={{
          title: 'Top Up',
        }}
      />
      <Stack.Screen
        name="DetailTransaction"
        component={DetailTransaction}
        options={{
          title: 'Transaction',
        }}
      />
      <Stack.Screen
        name="TransactionHistory"
        component={TransactionHistory}
        options={{
          title: 'History',
        }}
      />
      <Stack.Screen
        name="SearchReceiver"
        component={SearchReceiver}
        options={{
          title: 'Find Receiver',
        }}
      />
      <Stack.Screen
        name="InputAmount"
        component={InputAmount}
        options={{
          title: 'Transfer',
        }}
      />
      <Stack.Screen
        name="Confirmation"
        component={Confirmation}
        options={{
          title: 'Confirmation',
        }}
      />
      <Stack.Screen
        name="PinConfirm"
        component={PinConfirm}
        options={{
          title: 'Enter Your PIN',
        }}
      />
      <Stack.Screen
        name="TransferResult"
        component={TransferResult}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '',
        }}
      />
      <Stack.Screen
        name="PersonalInfo"
        component={PersonalInfo}
        options={{
          title: 'Personal Information',
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          title: 'Change Password',
        }}
      />
      <Stack.Screen
        name="ManagePhone"
        component={ManagePhone}
        options={{
          title: 'Manage Phone Number',
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          title: 'Notification',
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
