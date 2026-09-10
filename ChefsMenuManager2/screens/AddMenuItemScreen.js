import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MenuContext } from '../context/MenuContext';

const COURSES = ['Starter', 'Main Course', 'Dessert'];

export default function AddMenuItemScreen({ navigation }) {
  const { addMenuItem } = useContext(MenuContext);

  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState(COURSES[0]);
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!dishName.trim()) {
      newErrors.dishName = 'Dish name is required.';
    }
    if (!description.trim()) {
      newErrors.description = 'Description is required.';
    }
    if (!price.trim()) {
      newErrors.price = 'Price is required.';
    } else if (isNaN(Number(price)) || Number(price) <= 0) {
      newErrors.price = 'Enter a valid price greater than 0.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) {
      return;
    }

    addMenuItem({
      dishName: dishName.trim(),
      description: description.trim(),
      course,
      price: Number(price).toFixed(2),
    });

    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>ADD MENU ITEM</Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.formContainer}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.label}>Dish Name</Text>
          <TextInput
            style={[styles.input, errors.dishName && styles.inputError]}
            placeholder="e.g. Bruschetta"
            value={dishName}
            onChangeText={setDishName}
          />
          {errors.dishName ? (
            <Text style={styles.errorText}>{errors.dishName}</Text>
          ) : null}

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[
              styles.input,
              styles.multilineInput,
              errors.description && styles.inputError,
            ]}
            placeholder="Briefly describe the dish"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={3}
          />
          {errors.description ? (
            <Text style={styles.errorText}>{errors.description}</Text>
          ) : null}

          <Text style={styles.label}>Course</Text>
          <View style={styles.pickerWrapper}>
            <Picker selectedValue={course} onValueChange={setCourse}>
              {COURSES.map((c) => (
                <Picker.Item key={c} label={c} value={c} />
              ))}
            </Picker>
          </View>

          <Text style={styles.label}>Price (R)</Text>
          <TextInput
            style={[styles.input, errors.price && styles.inputError]}
            placeholder="e.g. 65.00"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
          {errors.price ? (
            <Text style={styles.errorText}>{errors.price}</Text>
          ) : null}

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>SAVE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.cancelButtonText}>CANCEL</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f5fa',
  },
  header: {
    backgroundColor: '#2e5395',
    paddingVertical: 18,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  formContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
    marginTop: 14,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#c7c7c7',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
  },
  multilineInput: {
    height: 70,
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: '#c0392b',
  },
  errorText: {
    color: '#c0392b',
    fontSize: 12,
    marginTop: 4,
  },
  pickerWrapper: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#c7c7c7',
    borderRadius: 8,
    overflow: 'hidden',
  },
  saveButton: {
    backgroundColor: '#2e5395',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 26,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#888888',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  cancelButtonText: {
    color: '#555555',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
