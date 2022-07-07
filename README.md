# React Redux with Sagas

You have been provided with data for a small Zoo. Your web app should display all of the animal species along with the class for that species. Please read all instructions before you get started.

> NOTE: You should only need to modify **two** files for this Code Challenge: (`src/index.js` and `server/routers/zoo.router.js`).

## Setup

1. Create a database named `zoo_animals`
2. Run the SQL in the `database.sql` file in that database
3. `npm install`
4. `npm run server`
5. `npm run client`

## Task List

- [ ] Write your SQL in the `routes/zoo.router.js` file.
- [ ] Add a Saga in the `index.js` file for making your `GET` request. It should listen for the action type of `GET_ZOO_ANIMALS`.

## Sample Output

When the Saga and router are working as expected, the page should display the following:

| Species | Class |
|---|---|
| Blue Spiny Lizard | Reptile |
| Murray River Turtle | Reptile |
| Tomato Frog | Amphibian |
| Wyoming Toad | Amphibian |
| Tiger Salamander | Amphibian |
| Freshwater Catfish | Fish |
| Sarus Crane | Bird |
| Great Horned Owl | Bird |
| Magpie Robin | Bird |
| Toco Toucan | Bird |
| Northern Pintail Duck | Bird |
| Blue-winged Teal | Bird |
| Dwarf Mongoose | Mammal |
| Moutain Goat | Mammal |
| ... | ... |

## Stretch Goal

> NOTE: Please commit your code before moving on to the stretch goals.

- [ ] Create a form that allows the Zookeeper to add a new animal
- [ ] Add ability to transfer an animal to a different zoo (remove them from the database)
- [ ] Create a form that allows the Zookeeper to add a new class
