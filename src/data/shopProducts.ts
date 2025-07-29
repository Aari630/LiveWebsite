export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  category: string;
  amazonLink?: string;
}

export const shopProducts: Product[] = [
  // Western Saddles (10 products)
  {
    id: 1,
    name: "Western Horse Saddle for Sale Hand-Tooled Show Saddle with Silver Accents – Premium Leather Horse Tack and Colors Available",
    image: "w1.webp",
    category: "Western Saddles",
    amazonLink:
      "https://www.amazon.com/Western-Saddle-Hand-Tooled-Silver-Accents/dp/B0FG1WHN79?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 2,
    name: "Horse Saddle Western Handmade Beautifully Show Saddle – Crafted with Sterling Silver Metals, Cow Suede Seat, Intricate Carved Leather Design, and Premium Genuine Real Leather Construction",
    image: "w2.webp",
    category: "Western Saddles",
    amazonLink:
      "https://www.amazon.com/Horse-Saddle-Western-Handmade-Beautifully/dp/B0DQYKPFK4?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 3,
    name: "Full Carved Flower Tooled Western Saddle with Padded Seat – Premium Real Leather Handcrafted, Carved & Tooled for Barrel Racing, Pleasure Riding, and Training Avaikable",
    image: "w3.webp",
    category: "Western Saddles",
    amazonLink:
      "https://www.amazon.com/Carved-Flower-Tooled-Western-Saddle/dp/B0DR85PK2X?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 4,
    name: "Western Horse Saddle Teal Pink Black Crystal Show Western Leather Barrel Racer Trail Tack Set with Flower Tooled Design, Barrel Pleasure Saddle, Free Matching Headstall",
    image: "w4.webp",
    category: "Western Saddles",
    amazonLink:
      "https://www.amazon.com/Western-Saddle-Pleasure-Matching-Headstall/dp/B0DR1XLC8W?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 5,
    name: "Western Leather Barrel Racer Trail Tack Set with Flower Tooled Design, Teal and Black Crystal Accents, Barrel Pleasure Western Horse Saddle, Matching Headstall and Breast Collar",
    image: "w5.webp",
    category: "Western Saddles",
    amazonLink:
      "https://www.amazon.com/Western-Pleasure-Saddle-Matching-Headstall/dp/B0DR1V7WYM?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 6,
    name: "Western Padded Cushion Seat Fully Carved Western Carved Genuine Natutal Hand Made Saddle Real in Leather with Free Headstall and Breast Collar",
    image: "w6.jpg",
    category: "Western Saddles",
    amazonLink:
      "https://www.amazon.com/Saddle-Fusion-Western-Cushion-Headstall/dp/B0DS9XM85S?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 7,
    name: "Fully Carved Western Carved Genuine Natutal Hand Made Saddle Black Suede Seat Real in Leather with Free Headstall and Breast Collar",
    image: "w7.webp",
    category: "Western Saddles",
    amazonLink:
      "https://www.amazon.com/Saddle-Fusion-Western-Genuine-Headstall/dp/B0DS9XDG16?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 8,
    name: "Western Horse Leather Hot Seat Tooled Barrel Pleasure Handmade Saddle with Intricate Carved Detailing, Comfortable Hot Seat for Extended Rides, Complete",
    image: "w8.webp",
    category: "Western Saddles",
    amazonLink:
      "https://www.amazon.com/Saddle-Fusion-Intricate-Detailing-Comfortable/dp/B0DRPCJ8K4?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 9,
    name: "Black Suede Western Leather Saddle, Handcrafted, Floral Tooled, 100% Real Leather Hand Made Saddle Square Cut Skirt with Free Headstall and Breast Collar",
    image: "w9.webp",
    category: "Western Saddles",
    amazonLink:
      "https://www.amazon.com/Saddle-Fusion-Western-Handcrafted-Headstall/dp/B0DRP5LHYQ?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 10,
    name: "Western Big Horn Leather Wade Roping Ranch Hard Carved Horse Saddle 10 Leather Handmade Saddle Pleasure Trail/with Complete Set Headstall and Breast Collar",
    image: "w10.jpg",
    category: "Western Saddles",
    amazonLink:
      "https://www.amazon.com/Saddle-Fusion-Handmade-Pleasure-Headstall/dp/B0DT1NLZNP?ref_=ast_sto_dp&th=1&psc=1",
  },

  // Western Show Saddles (10 products)
  {
    id: 11,
    name: "Show Saddle Western Ranch Antique Show Carved Real Leather Saddle with Headstall and Breast Collar Real Silver Metals in Leather 16",
    image: "s1.jpg",
    category: "Western Show Saddles",
    amazonLink:
      "https://www.amazon.com/Saddle-Western-Antique-Leather-Headstall/dp/B0DP3GDQ1L?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 12,
    name: "Beautiful Western Show Carved Real Leather Fully Hand Made Saddle with Free Headstall and Breast Collar Real Silver Metals in Leather",
    image: "s2.webp",
    category: "Western Show Saddles",
    amazonLink:
      "https://www.amazon.com/Beautiful-Western-Leather-Saddle-Headstall/dp/B0DP5C2LLZ?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 13,
    name: "Western Show Saddle Horse ASaddle,Color Natural Pleasure Trail Silver Streling Metals/Leather Saddle with Complete Set Free Headstall and Breast Collar",
    image: "s3.webp",
    category: "Western Show Saddles",
    amazonLink:
      "https://www.amazon.com/Saddle-Fusion-Chestnut-Pleasure-Headstall/dp/B0DS9MLWBZ?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 14,
    name: "Natural Western Show Saddle Western Ranch Antique Show Carved Real Leather Saddle with Headstall and Breast Collar Real Silver Metals in Leather 16",
    image: "s4.webp",
    category: "Western Show Saddles",
    amazonLink:
      "https://www.amazon.com/Natural-Western-Saddle-Antique-Headstall/dp/B0DP4HJWRL?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 15,
    name: "Western Horse Saddles with Sterling Silver Metals, Show-Quality Carved Leather Saddle with Natural Suede Seat, Handcrafted Real Leather Carved Saddle - Premium Handmade Saddle for Show",
    image: "s5.jpg",
    category: "Western Show Saddles",
    amazonLink:
      "http://amazon.com/Western-Sterling-Show-Quality-Saddle-Handcrafted/dp/B0DQY7YYC7?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 16,
    name: "Western Antique Show Full Carved Leather Hand Made Saddle Made to Order with Headstall and Breast Collar Real Silver Streling Metals/Leather Saddle 16",
    image: "s6.jpg",
    category: "Western Show Saddles",
    amazonLink:
      "https://www.amazon.com/Western-Antique-Saddle-Headstall-Streling/dp/B0DNSYVLSP?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 17,
    name: "Western Antique Show Full Carved Real Hand Made Leather Saddle Made to Order Real Silver Streling Metals/Leather Saddle 16 with Headstall and Breast Collar",
    image: "s7.webp",
    category: "Western Show Saddles",
    amazonLink:
      "https://www.amazon.com/Western-Antique-Saddle-Streling-Headstall/dp/B0DNT1YZSL?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 18,
    name: "Western Western Show Carved Handmade Real Sterling Silver Metal Genuine Natural Leather Hand Made Saddle Leather/with Free Headstall and Breast Collar",
    image: "s8.webp",
    category: "Western Show Saddles",
    amazonLink:
      "https://www.amazon.com/Western-Handmade-Sterling-Saddle-Headstall/dp/B0DNWMNPC2?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 19,
    name: "Western Show Carved Handmade Natural Leather Saddle with Sterling Silver Accents, Black Real Metal Hardware, and Real Leather Construction – Fully Carved, Handcrafted Saddle",
    image: "s9.webp",
    category: "Western Show Saddles",
    amazonLink:
      "https://www.amazon.com/Saddle-Fusion-Handmade-Sterling-Construction/dp/B0DV74CLN7?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 20,
    name: "New Western Show Saddle with Natural Suede Seat Carved Genuine Leather, Real Metal Accents, Handcrafted Western Show Saddle",
    image: "s10.jpg",
    category: "Western Show Saddles",
    amazonLink:
      "https://www.amazon.com/Saddle-Fusion-Western-Natural-Handcrafted/dp/B0DRFSNWMG?ref_=ast_sto_dp&th=1&psc=1",
  },

  // Australian Saddles (10 products)
  {
    id: 21,
    name: "Australian Outrider Black Aussie Horse Saddle Hand Made Collection Aussie Style with Horn Embossed on Flap, with Leathers & Stirrups and Girth/Complete Set",
    image: "a1.webp",
    category: "Australian Saddles",
    amazonLink:
      "https://www.amazon.com/Australian-Outrider-Saddle-Collection-Embossed/dp/B0DNWNQQFS?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 22,
    name: "Australian Handmade Style Half Breed Aussie Stock Leather Saddle Premium Cattle Work, Endurance Riding, Knee Pads",
    image: "a2.jpg",
    category: "Australian Saddles",
    amazonLink:
      "https://www.amazon.com/Saddle-Fusion-Australian-Handmade-Endurance/dp/B0DS9XZZVQ?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 23,
    name: "Australian Genuine Leather Saddle Pad | Hand Made Saddle Without Horn Aussie Style with Leathers & Stirrups | Seat for Stable Horse Riding Anti Slip Saddle Seat",
    image: "a3.webp",
    category: "Australian Saddles",
    amazonLink:
      "https://www.amazon.com/Australian-Saddle-Leathers-Stirrups-Complete/dp/B0DNWNSGTW?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 24,
    name: "Australian Embossed Black Leather Stock Horse Saddle with Horn – Australian Style Saddle with Wide Tree & Regular Tree Options – Includes Knee Pads for Enhanced Comfort.",
    image: "a4.webp",
    category: "Australian Saddles",
    amazonLink:
      "https://www.amazon.com/Australian-Embossed-Black-Leather-Saddle/dp/B0DR8TTGXD?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 25,
    name: "Ausralian Leather Aussie Style Type Horse Saddle with Horn 17 Inch with Complete Set Saddle for Horses Made to Order",
    image: "a5.webp",
    category: "Australian Saddles",
    amazonLink:
      "https://www.amazon.com/Ausralian-Leather-Aussie-Saddle-Complete/dp/B0DNR89YPL?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 26,
    name: "Australian Collection Horse Aussie Style Synthetic Saddle Seat Size Half Breed Fender Blue Synthetic Perfect Branded Super Soft Material Branded",
    image: "a6.webp",
    category: "Australian Saddles",
    amazonLink:
      "https://www.amazon.com/Australian-Collection-Synthetic-Saddle-Material/dp/B0DPB55V4L?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 27,
    name: "Synthetic Australian Stock Black Australian Collection Horse Aussie Style Saddle Seat Size Perfect Super Soft Material Branded",
    image: "a7.jpg",
    category: "Australian Saddles",
    amazonLink:
      "https://www.amazon.com/Synthetic-Australian-Collection-Saddle-Material/dp/B0DP7XHTWF?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 28,
    name: "Handmade Half Breed Australian Outrider Collection Saddle – Premium Leather Australian Aussie Style Horse Saddle with English Suede Seat, Fully Rigged for Trail Riding, Endurance Events",
    image: "a8.webp",
    category: "Australian Saddles",
    amazonLink:
      "https://www.amazon.com/Handmade-Australian-Outrider-Collection-Saddle/dp/B0DQYCQ4ND?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 29,
    name: "Australian Stock Outrider Collection – Cow Indium Softie Seat Real Leather Aussie Style Horse Handmade Saddle with Under Girth, Over Girth and Stirrups Comes",
    image: "a9.jpg",
    category: "Australian Saddles",
    amazonLink:
      "https://www.amazon.com/Complete-Australian-Stock-Outrider-Collection/dp/B0DQYDF1WV?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 30,
    name: "Embossed Australian Long Flap Aussie Style Collection Leather Stock Saddle - Wide Tree & Regular Tree, X-Large 19 for Endurance Riding",
    image: "a10.webp",
    category: "Australian Saddles",
    amazonLink:
      "https://www.amazon.com/Embossed-Australian-Collection-Leather-Saddle/dp/B0DRD712NL?ref_=ast_sto_dp&th=1&psc=1",
  },

  // Endurance Saddles (10 products)
  {
    id: 31,
    name: "Ultra-lightweight endurance saddle for long-distance competitions and trail riding",
    image: "e1.webp",
    category: "Endurance Saddles",
    amazonLink:
      "https://www.amazon.com/Western-Endurance-Saddle-Comfortable-Available/dp/B0F8JFKTWR?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 32,
    name: "English Western Endurance Genuine Leather Saddle Western Trail Beautifully Hand Made Collection Horse Leather Saddle Travel Comfortable Seat Saddle",
    image: "e2.webp",
    category: "Endurance Saddles",
    amazonLink:
      "https://www.amazon.com/Endurance-Saddle-Beautifully-Collection-Comfortable/dp/B0DPB5S7Q1?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 33,
    name: "Endurance Genuine Real Leather English Hand Made Saddle Horse Easy Comfortable Quilted Cow Indium Black Softie Seat Saddle",
    image: "e3.jpg",
    category: "Endurance Saddles",
    amazonLink:
      "https://www.amazon.com/Endurance-Genuine-Leather-Saddle-Comfortable/dp/B0DP3BLB13?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 34,
    name: "Brown Endurance Genuine Real Leather English Hand Made Saddle Horse Easy Comfortable Plain Cow Indium Black Softie Seat Saddle",
    image: "e4.webp",
    category: "Endurance Saddles",
    amazonLink:
      "https://www.amazon.com/Endurance-Genuine-Leather-Saddle-Comfortable/dp/B0DP3DTG7F?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 35,
    name: "English Western Endurance Quilted Seat Leather Horse Saddle Tone Combination English Rigging, Travel Comfortable Horse Saddle/Quilted Sdeat Travel Comfortable Seat Saddle",
    image: "e5.webp",
    category: "Endurance Saddles",
    amazonLink:
      "https://www.amazon.com/English-Endurance-Saddle-Combination-Comfortable/dp/B0DP7V4BS6?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 36,
    name: "EWestern Endurance Brown Leather Saddle Cow Indium Softy Seat, Slick Cantle, Fenders Border Tooling Collection Horse Leather Saddle, Durable, Comfortable, Saddle",
    image: "e6.webp",
    category: "Endurance Saddles",
    amazonLink:
      "https://www.amazon.com/Saddle-Fusion-Endurance-Collection-Comfortable/dp/B0DVMNGYSW?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 37,
    name: "English Endurance Leather Saddle | Cutback Skirts, Bulkless English Rigging, Round Pommel, Slick Cantle | Border Tooling Collection",
    image: "e7.webp",
    category: "Endurance Saddles",
    amazonLink:
      "https://www.amazon.com/Saddle-Fusion-Endurance-Bulkless-Collection/dp/B0DRJFDKFM?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 38,
    name: "Western Endurance Saddle with Comfortable Seat, with Quilted Cutback Skirts, Beautiful Round Pommel, and Premium Leather – Ideal for Endurance Riding, Horseback Riding, and Collectors",
    image: "e8.jpg",
    category: "Endurance Saddles",
    amazonLink:
      "https://www.amazon.com/Western-Saddle-Comfortable-Cutback-Beautiful/dp/B0DQYB8BK5?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 39,
    name: "Natural Endurance Hand Tooled & Carved Real Leather English Saddle Easy Comfortable Cow Indium Black Softie Seat Saddle/All Customization Available",
    image: "e9.jpg",
    category: "Endurance Saddles",
    amazonLink:
      "https://www.amazon.com/Saddle-Fusion-Endurance-Comfortable-Customization/dp/B0DXB8J5Z2?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 40,
    name: "Endurance Plain Suede Seat Seat Real Drup Dyed Leather Finished Horse Hand Made Saddle Tone Combination English Rigging, Travel Comfortable Seat Saddle",
    image: "e10.webp",
    category: "Endurance Saddles",
    amazonLink:
      "https://www.amazon.com/Endurance-Finished-Saddle-Combination-Comfortable/dp/B0DP3BRZM9?ref_=ast_sto_dp&th=1&psc=1",
  },

  // English Saddles (10 products)
  {
    id: 41,
    name: "Black English Dressage Style Combination Genuine Real Leather Full Cow Indium Softie English Saddle Horses with Free Complete Bridle and Stirrups Leathers",
    image: "en1.webp",
    category: "English Saddles",
    amazonLink:
      "https://www.amazon.com/Dressage-Combination-Saddle-Complete-Stirrups/dp/B0DNZ25WX6?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 42,
    name: "Icelandic Black Cow Indium Softie Genuine Real Leather Hand Made Saddle English Horse Easy Comfortable Quilted Seat Saddle with Free Set",
    image: "en2.jpg",
    category: "English Saddles",
    amazonLink:
      "https://www.amazon.com/Icelandic-Genuine-Leather-Saddle-Comfortable/dp/B0DNXYHMWV?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 43,
    name: "English Dressage Style Blue Genuine High Qaulity Leather Full Covered Cow Indium Softie English Horse Saddle Saddle Hand Made Horse Easy Comfortable Plain Cow Black Softie Seat",
    image: "en3.webp",
    category: "English Saddles",
    amazonLink:
      "https://www.amazon.com/English-Dressage-Genuine-Saddle-Comfortable/dp/B0DP7TPCCF?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 44,
    name: "English Dressage Style Tan Genuine High Qaulity Leather Full Covered Cow Indium Softie English Horse Saddle Saddle Hand Made Horse Easy Comfortable Plain Cow Black Softie Seat",
    image: "en4.jpg",
    category: "English Saddles",
    amazonLink:
      "https://www.amazon.com/English-Dressage-Genuine-Saddle-Comfortable/dp/B0DP7TNVQW?ref_=ast_sto_dp&th=1&psc=1",
  },

  // Brazilian Saddles (10 products)
  {
    id: 45,
    name: "Brazilian Genuine Real Leather English Saddle Horse Easy Comfortable Quilted Cow Indium White Softie Seat Saddle 17 Inches",
    image: "b1.webp",
    category: "Brazilian Saddles",
    amazonLink:
      "https://www.amazon.com/Brazilian-Genuine-Leather-Saddle-Comfortable/dp/B0DNKKKPJ8?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 46,
    name: "Brazilian Genuine Real Leather English Hand Made Saddle Horse Easy Comfortable Quilted Cow Indium White Softie Seat Saddle 17 Inches",
    image: "b2.webp",
    category: "Brazilian Saddles",
    amazonLink:
      "https://www.amazon.com/Brazilian-Genuine-Leather-Saddle-Comfortable/dp/B0DNSZ87H2?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 47,
    name: "Brazilian Genuine Real Leather Hand Made Saddle Cow Indium Softie Hand Tooled English Horse Easy Comfortable Quilted Seat Saddle 17 Inches",
    image: "b3.webp",
    category: "Brazilian Saddles",
    amazonLink:
      "https://www.amazon.com/Brazilian-Genuine-Leather-Saddle-Comfortable/dp/B0DNZ2B6R3?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 48,
    name: "Blue Seat Brazilian Genuine Real Leather English Saddle Horse Easy Comfortable Quilted Cow Indium White Softie Seat Saddle",
    image: "b4.webp",
    category: "Brazilian Saddles",
    amazonLink:
      "https://www.amazon.com/Saddle-Fusion-Brazilian-Genuine-Comfortable/dp/B0DRGYY5W2?ref_=ast_sto_dp&th=1&psc=1",
  },
].filter(
  (product) =>
    product.name !==
    "Western Horse Saddle for Sale Hand-Tooled Show Saddle with Silver Accents",
);