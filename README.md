# ResturantMenuManager

# Chef's Menu Manager — Final POE

A React Native (Expo) app that lets a chef add, edit, delete, search, filter and
review statistics for menu items.

## Project structure

```
App.js                         Navigation setup (stack) + MenuProvider
src/
  constants.js                 Courses, screen names, feedback duration
  theme.js                     Shared colours
  context/MenuContext.js       Menu state: add, update, delete, feedback messages
  screens/                     HomeScreen, AddMenuItemScreen (add + edit), StatisticsScreen
  components/                  ScreenHeader, AppButton, FormField, FeedbackMessage,
                               MenuForm, MenuItemCard, SearchFilterBar, StatCard
  utils/                       validation.js, menuHelpers.js (filter + statistics)
```

## Change log (since Part 2)

### New features
- **Edit / update menu items:** each card has an Edit button. It opens the form
  pre-filled with the dish; pressing UPDATE saves the changes and the list updates immediately.
- **Delete menu items:** each card has a Delete button with a confirmation dialog.
- **Search by name:** live, case-insensitive search on the home screen.
- **Filter by course:** All / Starter / Main Course / Dessert chips; combined with the search.
- **Clear search/filter:** "Clear search and filter" link shows all items again.
- **Statistics screen:** total items, average price, lowest and highest price, items per course.
- **Navigation:** "VIEW STATISTICS" button on the home screen and Back buttons on every other screen.

## Refactoring
- `MenuContext` now provides `addMenuItem`, `updateMenuItem`, `deleteMenuItem` and a shared feedback message.
- The Add screen's form was moved into a reusable `MenuForm` component used for both add and edit.
- Repeated UI was extracted into reusable components: `ScreenHeader`, `AppButton`, `FormField`,
  `FeedbackMessage`, `MenuItemCard`, `SearchFilterBar`, `StatCard`.
- Validation moved to `utils/validation.js`; filtering and statistics to `utils/menuHelpers.js`.
- Colours moved to `theme.js`; courses and screen names to `constants.js`.
- Price is stored as a number and formatted with `formatPrice()` when displayed.

### Validation and user feedback
- Added minimum length checks for dish name (2) and description (5).
- Success banners ("added", "updated", "deleted") appear on the home screen and disappear after 3 seconds.
- Separate empty-state messages for "no items yet" and "no search results".
- Added an item counter ("Showing 2 of 5 items").
