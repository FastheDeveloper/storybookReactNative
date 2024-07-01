import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppButtons} from '../../components/AppButtons';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {InputField} from '../../components/InputField';
import {CheckBox} from '../../components/CheckBox';
import {CompetitionList} from '../../components/CompetitionList';
import {TestData} from '../data/TestData';
import {Star} from '../../assets/svgs/Enter';
import Fuse from 'fuse.js';
type RootStackParamList = {
  Onboarding: undefined;
  CreateAccount: undefined;
  Home: undefined;
  // Add other screens if needed
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CreateAccount',
  'Home'
>;

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const CreateAccount = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [userDetails, setuserDetails] = useState({
    competition: '',
    email: '',
    password: '',
    rePassword: '',
    firstName: '',
    lastName: '',
    checked: false,
  });
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState(TestData);
  const [emailError, setEmailError] = useState(true);

  const [emailhasError, setEmailHasError] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [passBlurred, setPassBlurred] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  useEffect(() => {
    setEmailHasError(validateEmail(userDetails.email));
  }, [userDetails.email]);

  const specialChars = /[~`!@#$%^&*()_\-+=?]/;

  const [criteria, setCriteria] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  useEffect(() => {
    const length = userDetails.password.length >= 8;
    const uppercase = /[A-Z]/.test(userDetails.password);
    const lowercase = /[a-z]/.test(userDetails.password);
    const number = /[0-9]/.test(userDetails.password);
    const specialChar = specialChars.test(userDetails.password);

    setCriteria({
      length,
      uppercase,
      lowercase,
      number,
      specialChar,
    });
  }, [userDetails.password, passBlurred]);

  const handleChange = (text: string) => {
    setuserDetails({...userDetails, password: text});
  };
  const handleChange2 = (text: string) => {
    setuserDetails({...userDetails, rePassword: text});
  };

  const [formErrors, setFormErrors] = useState({
    competitionError: '',
    emailError: '',
    rePasswordError: '',
    firstNameError: '',
    lastNameError: '',
    passwordError: '',
    checkedError: '',
  });

  const validateForm = () => {
    let valid = true;
    const errors = {
      competitionError: '',
      emailError: '',
      rePasswordError: '',
      firstNameError: '',
      lastNameError: '',
      passwordError: '',
      checkedError: '',
    };

    if (!userDetails.competition) {
      errors.competitionError = 'You must pick a competition to register';
      valid = false;
    }

    if (!userDetails.email) {
      errors.emailError = 'Email field cannot be empty';
      valid = false;
    }

    if (!userDetails.rePassword) {
      errors.rePasswordError = 'Re-enter Password field cannot be empty';
      valid = false;
    }
    if (!userDetails.password) {
      errors.passwordError = 'Password field cannot be empty';
      valid = false;
    }

    if (!userDetails.firstName) {
      errors.firstNameError = '     First Name field cannot be empty';
      valid = false;
    }

    if (!userDetails.lastName) {
      errors.lastNameError = '     Last Name field cannot be empty';
      valid = false;
    }

    if (!userDetails.checked) {
      errors.checkedError = 'Please agree to terms and conditions';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const resetForm = () => {
    let valid = true;
    const errors = {
      competitionError: '',
      emailError: '',
      rePasswordError: '',
      firstNameError: '',
      lastNameError: '',
      passwordError: '',
      checkedError: '',
    };

    setFormErrors(errors);
    return valid;
  };
  const handleSubmit = () => {
    if (validateForm()) {
      setShowModal2(true);
    } else {
      console.log('Form validation failed. Please check errors.');
    }
  };

  const fuse = new Fuse(TestData, {
    keys: ['title', 'location'], // Keys to search by
  });

  useEffect(() => {
    if (searchInput === '') {
      setFilteredData(TestData);
    } else {
      const results = fuse.search(searchInput);
      setFilteredData(results.map(result => result.item));
    }
  }, [searchInput]);

  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={showModal}>
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.innerModal}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // backgroundColor: 'red',

                width: '82%',
              }}>
              <AppButtons
                onPress={() => navigation.goBack()}
                text={''}
                title={'GO_BACK_SHADE'}
              />
              <View style={{marginHorizontal: 5}} />
              <InputField
                onPress={() => setShowModal(true)}
                text={''}
                title={'SEARCH_INPUT'}
                placeholder={'Competition to sign up * '}
                showPassword={false}
                value={searchInput}
                onChangeText={text => setSearchInput(text)}
              />
            </View>
            <View style={styles.HeaderContainer}>
              <Text style={[styles.Header, {marginBottom: 10}]}>
                Competition
              </Text>
              <Text style={styles.textStyle}>
                An account is needed per one host. If you already have an
                account for the host of competition you want to sign up, you can
                login and register.
              </Text>
            </View>
            <CompetitionList
              comapetition={filteredData}
              onPress={(item: any) => {
                setuserDetails({...userDetails, competition: item.title});
                setShowModal(false);
                console.log(item.title);
              }}
            />
          </View>
        </SafeAreaView>
      </Modal>
      <Modal visible={showModal2}>
        <View style={styles.innerModal2}>
          <View style={styles.done}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={styles.star}>
                <Star width={24} height={24} />
              </View>
              <AppButtons
                onPress={() => {
                  setShowModal2(false);

                  navigation.navigate('Home');
                }}
                text={''}
                title={'CLOSE_BUTTON'}
              />
            </View>
            <Text style={[styles.Header, {marginVertical: 20}]}>
              Welcome to Soo
            </Text>
            <Text
              style={[{fontSize: 18, fontFamily: '400', marginVertical: 50}]}>
              Great to have you with us!
            </Text>

            <AppButtons
              onPress={() => {
                setShowModal2(false);

                navigation.navigate('Home');
              }}
              text={'Got it'}
              title={'BLAND'}
            />
            <View style={{marginBottom: '5%'}} />
          </View>
        </View>
      </Modal>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AppButtons
              onPress={() => navigation.goBack()}
              text={''}
              title={'GO_BACK'}
            />
            <Text style={styles.Header}>Create Account</Text>
          </View>
          <View style={styles.formFeild}>
            <View>
              <InputField
                onPress={() => setShowModal(true)}
                text={''}
                title={'DROP_DOWN'}
                placeholder={'Competition to sign up * '}
                showPassword={false}
                value={userDetails.competition}
              />

              {formErrors.competitionError ? (
                <Text style={styles.errorMessage}>
                  {formErrors.competitionError}
                </Text>
              ) : null}
            </View>
            <View>
              <InputField
                onPress={() => {}}
                text={''}
                title={'BLAND'}
                placeholder={'Enter your email * '}
                showPassword={false}
                value={userDetails.email}
                onChangeText={text =>
                  setuserDetails({...userDetails, email: text})
                }
                onBlur={() => {
                  setEmailError(validateEmail(userDetails.email));
                }}
                onFocus={resetForm}
              />
              {!emailError && (
                <Text style={styles.errorMessage}>Email format is invalid</Text>
              )}
              {formErrors.emailError ? (
                <Text style={styles.errorMessage}>{formErrors.emailError}</Text>
              ) : null}
            </View>

            <View>
              <InputField
                onPress={() => setShowPassword(!showPassword)}
                text={''}
                title={'PASSWORD_INPUT'}
                placeholder={'Enter your password * '}
                showPassword={showPassword}
                value={userDetails.password}
                //   secureTextEntry={showPassword}
                onChangeText={handleChange}
                onBlur={() => setPassBlurred(true)}
                onFocus={resetForm}
              />

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#E9EAEB',
                }}
              />
              <InputField
                onPress={() => setShowPassword(!showPassword)}
                text={''}
                title={'PASSWORD_INPUT'}
                placeholder={'Re-enter your password * '}
                showPassword={showPassword}
                value={userDetails.rePassword}
                onChangeText={handleChange2}
                onFocus={resetForm}
              />
              {passBlurred && (
                <View>
                  {!criteria.length && (
                    <Text style={styles.invalid}>✓ At least 8 characters</Text>
                  )}
                  {(!criteria.uppercase ||
                    !criteria.lowercase ||
                    !criteria.number ||
                    !criteria.specialChar) && (
                    <>
                      <Text style={styles.invalid}>
                        ✓ Include at least 3 uppercase letters, lowercase
                      </Text>
                      <Text style={styles.invalid}>
                        {'    '}
                        letters, number, or special characters
                      </Text>
                      <Text style={styles.invalid}>
                        {'    '}
                        (~`!@#$%^&*()_-+=?)
                      </Text>
                    </>
                  )}
                </View>
              )}
              {userDetails.password !== userDetails.rePassword &&
                userDetails.rePassword.length > 0 && (
                  <Text style={styles.errorMessage}>
                    New password and Confirm password do not match.
                  </Text>
                )}

              {formErrors.passwordError ? (
                <Text style={styles.errorMessage}>
                  {formErrors.passwordError}
                </Text>
              ) : null}
              {formErrors.rePasswordError ? (
                <Text style={styles.errorMessage}>
                  {formErrors.rePasswordError}
                </Text>
              ) : null}
            </View>
            <InputField
              onPress={() => {}}
              text={''}
              title={'BLAND'}
              placeholder={'First Name in English *'}
              showPassword={false}
              value={userDetails.firstName}
              onChangeText={text =>
                setuserDetails({...userDetails, firstName: text})
              }
              onFocus={resetForm}
            />
            {formErrors.firstNameError ? (
              <Text style={styles.errorMessage}>
                {formErrors.firstNameError}
              </Text>
            ) : null}
            <InputField
              onPress={() => {}}
              text={''}
              title={'BLAND'}
              placeholder={'Last Name in English *'}
              showPassword={false}
              value={userDetails.lastName}
              onChangeText={text =>
                setuserDetails({...userDetails, lastName: text})
              }
              onFocus={resetForm}
            />
            {formErrors.lastNameError ? (
              <Text style={styles.errorMessage}>
                {formErrors.lastNameError}
              </Text>
            ) : null}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CheckBox
                onPress={() =>
                  setuserDetails({
                    ...userDetails,
                    checked: !userDetails.checked,
                  })
                }
                selected={userDetails.checked}
                title={''}
              />
              <View style={{marginLeft: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text>By signing up, I agree to Cloit's </Text>
                  <Text style={styles.underLine}>Terms & </Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.underLine}>Conditions</Text>
                  <Text> and </Text>
                  <Text style={styles.underLine}>Privacy Policy.</Text>
                </View>
              </View>
            </View>
            {formErrors.checkedError ? (
              <Text style={styles.errorMessage}>{formErrors.checkedError}</Text>
            ) : null}
            <AppButtons
              onPress={handleSubmit}
              text={'Sign Up'}
              title={'BLAND'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    flex: 1,
    padding: '5%',
  },
  Header: {
    fontSize: 24,
    color: '#101828',
    fontWeight: '800',
    marginLeft: 10,
  },
  formFeild: {
    marginVertical: 10,
    gap: 30,
  },
  underLine: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  errorMessage: {
    color: 'red',
    fontSize: 14,
    alignSelf: 'flex-start',
    paddingHorizontal: '5%',
    fontWeight: '400',
  },
  valid: {
    color: 'green',
  },
  invalid: {
    color: 'red',
  },
  modalContainer: {
    flex: 1,
  },
  innerModal: {
    padding: '5%',
    // backgroundColor: 'blue',
  },
  innerModal2: {
    padding: '5%',
    backgroundColor: 'lightgrey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderContainer: {
    marginVertical: '7%',
  },
  textStyle: {
    marginHorizontal: 10,
  },
  done: {
    backgroundColor: 'white',
    width: '100%',
    // height: 300,
    borderRadius: 16,
    overflow: 'hidden',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  star: {
    backgroundColor: '#253BFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    width: 52,
    borderRadius: 50,
  },
});
