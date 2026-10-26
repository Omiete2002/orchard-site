import jollof from './assets/dishes/jollof.jpg'
import egusi from './assets/dishes/egusi.jpg'
import seabass from './assets/dishes/seabass.jpg'
import yassa from './assets/dishes/yassa.jpg'
import suya from './assets/dishes/suya.jpg'
import akara from './assets/dishes/akara.jpg'
import okra from './assets/dishes/okra.jpg'
import kelewele from './assets/dishes/kelewele.jpg'
import d_redWines from './assets/drinks/red-wines.jpg'
import d_whiteWines from './assets/drinks/white-wines.jpg'
import d_rose from './assets/drinks/rose.jpg'
import d_sparkling from './assets/drinks/sparkling.jpg'
import d_whisky from './assets/drinks/whisky.jpg'
import d_cognac from './assets/drinks/cognac.jpg'
import d_ginVodka from './assets/drinks/gin-vodka.jpg'
import d_rumTequila from './assets/drinks/rum-tequila.jpg'
import d_beerCider from './assets/drinks/beer-cider.jpg'
import d_hibiscus from './assets/drinks/hibiscus.jpg'
import d_tropical from './assets/drinks/tropical.jpg'
import d_virginMojito from './assets/drinks/virgin-mojito.jpg'
import d_gingerFizz from './assets/drinks/ginger-fizz.jpg'
import d_coffee from './assets/drinks/coffee.jpg'
import d_tea from './assets/drinks/tea.jpg'
import d_juices from './assets/drinks/juices.jpg'
import d_softdrinks from './assets/drinks/softdrinks.jpg'
import d_margarita from './assets/drinks/margarita.jpg'
import d_mojito from './assets/drinks/mojito.jpg'
import d_espresso from './assets/drinks/espresso.jpg'
import d_negroni from './assets/drinks/negroni.jpg'
import d_whiskySour from './assets/drinks/whisky-sour.jpg'
import d_sunset from './assets/drinks/sunset.jpg'
import d_diplomat from './assets/drinks/diplomat.jpg'
import d_lagos from './assets/drinks/lagos.jpg'
import d_greenHouse from './assets/drinks/green-house.jpg'
import d_oldFashioned from './assets/drinks/old-fashioned.jpg'

// Drink name -> photo (portrait crops). Names must match the menu exactly.
export const drinkImages = {
  'Red Wines': d_redWines,
  'White Wines': d_whiteWines,
  'Rosé': d_rose,
  'Sparkling & Champagne': d_sparkling,
  'Whisky': d_whisky,
  'Cognac': d_cognac,
  'Gin & Vodka': d_ginVodka,
  'Rum & Tequila': d_rumTequila,
  'Beer & Cider': d_beerCider,
  'Orchard Hibiscus Cooler': d_hibiscus,
  'Tropical Garden': d_tropical,
  'Virgin Mojito': d_virginMojito,
  'Orchard Ginger Fizz': d_gingerFizz,
  'Coffee': d_coffee,
  'Tea': d_tea,
  'Fresh Juices': d_juices,
  'Soft Drinks & Water': d_softdrinks,
  'Margarita': d_margarita,
  'Mojito': d_mojito,
  'Espresso Martini': d_espresso,
  'Negroni': d_negroni,
  'Whisky Sour': d_whiskySour,
  'Orchard Sunset': d_sunset,
  'The Diplomat': d_diplomat,
  'Lagos to Dakar': d_lagos,
  'The Green House': d_greenHouse,
  'West African Old Fashioned': d_oldFashioned,
}

// Menu item name -> photo. Only dishes that exist on the menu get a photo.
export const dishImages = {
  'Nigerian Party Jollof': jollof,
  'Egusi & Pounded Yam': egusi,
  'Grilled Fish & Plantain': seabass,
  'Senegalese Chicken Yassa': yassa,
  'Signature Beef Suya': suya,
  'Akara & Pap': akara,
  'Orchard Seafood Okra': okra,
  'Plantain Bites': kelewele,
}

export const hours = [
  ['Breakfast', '7:00 AM – 11:30 AM'],
  ['Lunch', 'Noon – 4:00 PM'],
  ['Afternoon Lounge', '4:00 – 6:00 PM'],
  ['Dinner', '6:00 – 10:30 PM'],
  ['Late Lounge', '10:00 PM – Close'],
]

export const spaces = [
  { no: 'I', zone: 'Zone A', name: 'The Living Room', short: 'Deep sofas, warm lamps and quiet corners.', text: 'The heart of Orchard. Deep comfortable sofas, upholstered armchairs, warm table lamps, low tables, bookshelves and indoor plants make intimate groups feel at home. Made for conversation and cocktails.', tone: 'a' },
  { no: 'II', zone: 'Zone B', name: 'The Dining Room', short: 'Banquettes, fine tableware, adjustable light.', text: 'A limited number of proper dining-height tables, luxurious banquettes, excellent tableware and adjustable lighting. Designed for breakfast, business lunch and refined dinner service.', tone: 'b' },
  { no: 'III', zone: 'Zone C', name: 'The Signature Bar', short: 'A glowing centrepiece of pours and ideas.', text: 'A visually striking centrepiece offering signature cocktails, premium spirits, wines, non-alcoholic creations, fresh juices, coffee and light refreshments.', tone: 'c' },
  { no: 'IV', zone: 'Zone D', name: 'The Orchard Garden', short: 'Open-air, lantern-lit, unhurried.', text: 'A genuine open-air social terrace with natural vegetation, attractive shade, weather-resistant seating, evening lanterns and subtle landscape lighting, with a designated smoking area away from food service.', tone: 'd' },
]

export const rhythm = [
  ['Monday', 'The Quiet Orchard', 'Meetings and unhurried lunches'],
  ['Tuesday', 'West African Table', 'Cuisine discovery'],
  ['Wednesday', 'Soul & Classics', 'Midweek good company'],
  ['Thursday', 'After Work at Orchard', 'Drinks with colleagues'],
  ['Friday', 'Orchard After Dark', 'Our premium evening'],
  ['Saturday', 'Garden Brunch & Sundowners', 'Linger a little longer'],
  ['Sunday', 'Family & Friends Table', 'Brunch and group dining'],
]

export const menus = {
  'Breakfast & Brunch': { sub: 'Served 7:00 AM – 11:30 AM', groups: [
    ['The Morning Table', [
      ['The Orchard Royal Breakfast', 'Eggs your way, chicken sausages, mushrooms, beans, grilled tomato and toast.'],
      ['Akara & Pap', 'Golden bean fritters served with creamy traditional pap.'],
      ['Yam & Egg Sauce', 'Boiled or lightly fried yam with rich tomato-pepper egg sauce.'],
      ['Ghanaian Waakye Breakfast Bowl', 'Rice and beans, boiled egg, fried plantain and pepper sauce.']]],
    ['Something Light', [
      ['Plantain Omelette', 'Fluffy omelette with sweet plantain, peppers and herbs.'],
      ['French Toast & Tropical Fruits', 'Golden French toast with seasonal fruits and syrup.'],
      ['Orchard Light Breakfast', 'Fresh fruit, yoghurt, granola and honey.']]]]},
  'West African Signatures': { sub: 'Lunch & Dinner', groups: [
    ['Our Signatures', [
      ['Nigerian Party Jollof', 'Smoky party-style rice, grilled chicken and fried plantain.'],
      ['Ghanaian Jollof', 'Fragrant Ghanaian rice, grilled chicken and fresh slaw.'],
      ['Senegalese Chicken Yassa', 'Lemon-mustard chicken with caramelised onions and steamed rice.'],
      ['Ivorian Attiéké & Grilled Fish', 'Steamed cassava couscous, grilled fish and tomato-onion relish.'],
      ['Sierra Leonean Cassava Leaf', 'Slow-cooked cassava leaf stew with rice. Limited daily portions.'],
      ['Senegalese Beef Mafé', 'Tender beef in rich groundnut sauce with rice.'],
      ['Orchard Seafood Okra', 'Fresh okra with fish and prawns, with a choice of swallow.'],
      ['Egusi & Pounded Yam', 'Traditional melon-seed soup with assorted meat.'],
      ['Grilled Fish & Plantain', 'Whole grilled fish, pepper sauce and golden plantain.']]]]},
  'Lounge & Continental': { sub: 'Starters · Favourites · Desserts', groups: [
    ['Starters & Sharing', [
      ['Signature Beef Suya', 'Spiced beef skewers, onions and yaji.'],
      ['Orchard Spicy Wings', 'Crispy chicken wings with house pepper glaze.'],
      ['Plantain Bites', 'Golden plantain with a signature pepper dip.'],
      ['Garlic Butter Prawns', 'Prawns sautéed with garlic, lemon and herbs.'],
      ['Orchard Mini Sliders', 'Three miniature beef burgers with house sauce.'],
      ['Vegetable Spring Rolls', 'Crisp vegetable rolls with sweet chilli dip.'],
      ['Orchard Sharing Platter', 'Suya, wings, plantain bites and spring rolls; ideal for sharing.']]],
    ['Continental Favourites', [
      ['Creamy Chicken Pasta', 'Penne with grilled chicken and creamy herb sauce.'],
      ['Grilled Lamb Chops', 'Herb-marinated lamb, mashed potatoes and vegetables.'],
      ['Chicken Caesar Salad', 'Grilled chicken, crisp lettuce, parmesan and Caesar dressing.'],
      ['Orchard Beef Burger', 'Premium beef patty, cheddar, lettuce and fries.']]],
    ['Sides & Sweet Endings', [
      ['French Fries', 'Classic fries with house dip.'],
      ['Fried Plantain', 'Sweet golden dodo.'],
      ['Chocolate Brownie', 'Warm brownie with vanilla ice cream.'],
      ['Tropical Fruit Platter', 'Seasonal sliced fruits.'],
      ['Vanilla Ice Cream', 'Two scoops with chocolate sauce.']]]]},
  'The Bar': { sub: 'Signature pours · Timeless classics', groups: [
    ['The Orchard Collection', [
      ['Orchard Sunset', 'Rum, pineapple, citrus and grenadine.'],
      ['The Diplomat', 'Gin, elderflower, cucumber and lime.'],
      ['Lagos to Dakar', 'Vodka, hibiscus, ginger and lemon.'],
      ['The Green House', 'Gin, cucumber, basil, lime and tonic.'],
      ['West African Old Fashioned', 'Whisky, bitters and spiced ginger syrup.']]],
    ['Classic Cocktails', [
      ['Margarita', 'Tequila, triple sec and lime.'],
      ['Mojito', 'White rum, mint, lime and soda.'],
      ['Espresso Martini', 'Vodka, espresso and coffee liqueur.'],
      ['Negroni', 'Gin, Campari and sweet vermouth.'],
      ['Whisky Sour', 'Whisky, lemon and syrup; egg white optional.']]],
    ['Zero Proof', [
      ['Orchard Hibiscus Cooler', 'Zobo, ginger, citrus and soda.'],
      ['Tropical Garden', 'Pineapple, orange, mint and lime.'],
      ['Virgin Mojito', 'Fresh mint, lime, sugar and soda.'],
      ['Orchard Ginger Fizz', 'Ginger, lemon, honey and soda.']]],
    ['Coffee, Tea & Refreshments', [
      ['Coffee', 'Espresso · Americano · Cappuccino · Latte'],
      ['Tea', 'English Breakfast · Green Tea · Peppermint'],
      ['Fresh Juices', 'Orange · Pineapple · Watermelon'],
      ['Soft Drinks & Water', 'Cola · Lemon-Lime · Tonic · Soda · Still · Sparkling']]],
    ['Wines & Bubbles', [
      ['Red Wines', 'Merlot · Cabernet Sauvignon · Shiraz'],
      ['White Wines', 'Sauvignon Blanc · Chardonnay'],
      ['Rosé', 'A crisp, dry rosé selection.'],
      ['Sparkling & Champagne', 'Prosecco · Premium Champagne · Prestige Champagne']]],
    ['Spirits & Beer', [
      ['Whisky', 'Blended Scotch · Single Malt · Bourbon'],
      ['Cognac', 'VSOP · XO'],
      ['Gin & Vodka', 'Premium and reserve selections.'],
      ['Rum & Tequila', 'White Rum · Dark Rum · Blanco · Reposado'],
      ['Beer & Cider', 'A compact range of popular local and imported favourites.']]]]},
}
