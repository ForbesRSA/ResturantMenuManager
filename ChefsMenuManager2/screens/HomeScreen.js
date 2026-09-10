import React, { useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { MenuContext } from '../context/MenuContext';

export default function HomeScreen({ navigation }) {
  const { menuItems } = useContext(MenuContext);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeaderRow}>
        <Text style={styles.cardTitle}>{item.dishName}</Text>
        <Text style={styles.cardPrice}>R{item.price}</Text>
      </View>
      <Text style={styles.cardCourse}>{item.course}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>RESTAURANT MENU MANAGER</Text>
      </View>

      <View style={styles.body}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddMenuItem')}
        >
          <Text style={styles.addButtonText}>+ ADD MENU ITEM</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>MENU ITEMS ({menuItems.length})</Text>

        {menuItems.length === 0 ? (
          <Text style={styles.emptyText}>
            No menu items yet. Tap "+ Add Menu Item" to create one.
          </Text>
        ) : (
          <FlatList
            data={menuItems}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 24 }}
          />
        )}
      </View>
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
  body: {
    flex: 1,
    padding: 16,
  },
  addButton: {
    backgroundColor: '#3f7d3f',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1f3864',
    marginBottom: 10,
  },
  emptyText: {
    color: '#888888',
    fontStyle: 'italic',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 30,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 12,
    marginBottom: 10,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222222',
    flexShrink: 1,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2e5395',
  },
  cardCourse: {
    fontSize: 12,
    color: '#3f7d3f',
    fontWeight: '600',
    marginTop: 2,
  },
  cardDescription: {
    fontSize: 13,
    color: '#555555',
    marginTop: 4,
  },
});
