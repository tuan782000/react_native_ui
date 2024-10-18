import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  View,
  Text,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const countries = [
  { id: 'US', name: 'United States' },
  { id: 'VN', name: 'Vietnam' },
  { id: 'GB', name: 'United Kingdom' },
  { id: 'AF', name: 'Afghanistan' },
  { id: 'AL', name: 'Albania' },
  { id: 'DZ', name: 'Algeria' },
  { id: 'AS', name: 'American Samoa' },
  { id: 'AD', name: 'Andorra' },
  { id: 'AO', name: 'Angola' },
  { id: 'AI', name: 'Anguilla' },
  { id: 'AQ', name: 'Antarctica' },
  { id: 'AG', name: 'Antigua and Barbuda' },
  { id: 'AR', name: 'Argentina' },
  { id: 'AM', name: 'Armenia' },
  { id: 'AW', name: 'Aruba' },
  { id: 'AU', name: 'Australia' },
  { id: 'AT', name: 'Austria' },

  // other countries
];

const CountryPickerWithFlags = () => {
  const [value, setValue] = React.useState(0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      <TouchableOpacity
        onPress={() => {
          // handle onPress
        }}
        style={styles.headerClose}>
        <FeatherIcon color="#1d1d1d" name="x" size={24} />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Select Country</Text>

        <Text style={styles.headerSubtitle}>
          The terms and services which apply to you will depend on your country of residence
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {countries.map(({ id, name }, index) => {
          const isActive = value === index;

          return (
            <TouchableOpacity
              key={id}
              onPress={() => {
                setValue(index);
              }}
              style={styles.radioWrapper}>
              <Image
                alt={`Flag of ${name}`}
                style={styles.radioImage}
                source={{
                  uri: `https://flagsapi.com/${id}/flat/64.png`,
                }} />

              <View
                style={[styles.radio, index === 0 && { borderTopWidth: 0 }]}>
                <Text style={styles.radioLabel}>{name}</Text>

                <View
                  style={[
                    styles.radioCheck,
                    isActive && styles.radioCheckActive,
                  ]}>
                  <FontAwesome
                    color="#fff"
                    name="check"
                    style={!isActive && { display: 'none' }}
                    size={12} />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default CountryPickerWithFlags

const styles = StyleSheet.create({
  content: {
    marginTop: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
  },
  /** Header */
  header: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  headerClose: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 6,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
  },
  headerSubtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    marginTop: 6,
  },
  /** Radio */
  radio: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#e8e8e8',
    height: 54,
    paddingRight: 24,
  },
  radioWrapper: {
    paddingLeft: 24,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  radioImage: {
    width: 30,
    height: 30,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222222',
    marginBottom: 2,
  },
  radioCheck: {
    width: 22,
    height: 22,
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    borderWidth: 1,
    borderColor: '#999B9A',
  },
  radioCheckActive: {
    borderColor: '#007bff',
    backgroundColor: '#007bff',
  },
});