# Restaurant Menu Manager — Part 2 (Working Version)

A React Native (Expo) app built to match your own Part 1 wireframes: a Home
screen ("RESTAURANT MENU MANAGER") with an "+ ADD MENU ITEM" button and a
live-updating list of menu items, and a separate Add Menu Item screen with
Dish Name, Description, Course, Price, Save and Cancel — navigated to using
React Navigation, exactly as shown in your wireframes.

Per the Part 2 brief, this version covers **adding and viewing** menu items
only. Editing, deleting, searching, filtering and statistics (which appear in
your Part 1 designs) are Final PoE features and are not built yet — but the
project is structured (Context + separate screens) so they're easy to add
later without a redesign.

## Project structure

```
App.js                          - navigation stack (Home -> AddMenuItem)
context/MenuContext.js          - shared state: menuItems + addMenuItem()
screens/HomeScreen.js           - title, "+ Add Menu Item" button, FlatList
screens/AddMenuItemScreen.js    - form with validation, Save / Cancel
```

## Run it locally

1. Install [Node.js](https://nodejs.org) (LTS) if you don't have it.
2. From this folder, install dependencies:
   ```
   npm install
   ```
3. Start the project:
   ```
   npx expo start
   ```
4. Scan the QR code with the **Expo Go** app on your Android phone, or press
   `a` in the terminal to open it in an Android emulator.

## What's implemented (matches Part 2 requirements)

- **User Interface (30 marks):** clear titles on both screens, consistent
  colours/spacing, readable text, simple layout matching your wireframes.
- **Capture Menu Information (25 marks):** TextInput for Dish Name and
  Description, a Picker for Course (Starter / Main Course / Dessert), and a
  numeric TextInput for Price — on their own "Add Menu Item" screen, as
  designed.
- **Display Menu Items (25 marks):** the Home screen FlatList shows every
  saved item and updates automatically the moment you save a new one and
  navigate back.
- **Improve the User Experience (20 marks):**
  - Required-field validation (dish name, description, price).
  - Price is checked to be a valid number greater than 0.
  - Inline error messages appear under each invalid field.
  - A friendly "No menu items yet..." message on the empty Home screen.
  - A Cancel button to back out of the form without saving.
  - Consistent colours, spacing and card styling across both screens.

## Next steps for submission

1. **Push to GitHub**
   ```
   git init
   git add .
   git commit -m "Part 2: working Restaurant Menu Manager app"
   git branch -M main
   git remote add origin <your-empty-repo-url>
   git push -u origin main
   ```
2. **Record your video (3–5 min, unlisted on YouTube)** showing:
   - The user interface (Home screen and Add Menu Item screen)
   - Entering menu information
   - Validation (try submitting an empty form, or a bad price)
   - Successfully adding a menu item and returning to the Home screen
   - The updated list displaying menu items
3. **Submit:** your GitHub repo link + the YouTube video link, as required by
   the "To submit for part 2" section of the brief.
