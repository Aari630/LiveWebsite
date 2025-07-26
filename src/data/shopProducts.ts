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
    name: "Premium Western Trail Saddle",
    image: "w1.webp",
    description: "Western Horse Saddle for Sale Hand-Tooled Show Saddle with Silver Accents – Premium Leather Horse Tack and Colors Available",
    category: "Western Saddles",
    amazonLink: "https://www.amazon.com/Western-Saddle-Hand-Tooled-Silver-Accents/dp/B0FG1WHN79?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 2,
    name: "Classic Western Roping Saddle",
    image: "w2.webp",
    description: "Horse Saddle Western Handmade Beautifully Show Saddle – Crafted with Sterling Silver Metals, Cow Suede Seat, Intricate Carved Leather Design, and Premium Genuine Real Leather Construction",
    category: "Western Saddles",
    amazonLink: "https://www.amazon.com/Horse-Saddle-Western-Handmade-Beautifully/dp/B0DQYKPFK4?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 3,
    name: "Youth Western Training Saddle",
    image: "w3.webp",
    description: "Full Carved Flower Tooled Western Saddle with Padded Seat – Premium Real Leather Handcrafted, Carved & Tooled for Barrel Racing, Pleasure Riding, and Training Avaikable",
    category: "Western Saddles",
    amazonLink: "https://www.amazon.com/Carved-Flower-Tooled-Western-Saddle/dp/B0DR85PK2X?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 4,
    name: "Custom Leather Western Saddle",
    image: "w4.webp",
    description: "Western Horse Saddle Teal Pink Black Crystal Show Western Leather Barrel Racer Trail Tack Set with Flower Tooled Design, Barrel Pleasure Saddle, Free Matching Headstall",
    category: "Western Saddles",
    amazonLink: "https://www.amazon.com/Western-Saddle-Pleasure-Matching-Headstall/dp/B0DR1XLC8W?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 5,
    name: "Western Pleasure Saddle",
    image: "w5.webp",
    description: "Western Leather Barrel Racer Trail Tack Set with Flower Tooled Design, Teal and Black Crystal Accents, Barrel Pleasure Western Horse Saddle, Matching Headstall and Breast Collar",
    category: "Western Saddles",
    amazonLink: "https://www.amazon.com/Western-Pleasure-Saddle-Matching-Headstall/dp/B0DR1V7WYM?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 6,
    name: "Western Barrel Racing Saddle",
    image: "w6.jpg",
    description: "Western Padded Cushion Seat Fully Carved Western Carved Genuine Natutal Hand Made Saddle Real in Leather with Free Headstall and Breast Collar",
    category: "Western Saddles",
    amazonLink: "https://www.amazon.com/Saddle-Fusion-Western-Cushion-Headstall/dp/B0DS9XM85S?ref_=ast_sto_dp&th=1&psc=1",
  },
  {
    id: 7,
    name: "Western Cutting Saddle",
    image: "w7.webp",
    description: "Fully Carved Western Carved Genuine Natutal Hand Made Saddle Black Suede Seat Real in Leather with Free Headstall and Breast Collar",
    category: "Western Saddles",
    amazonLink: "https://www.amazon.com/Saddle-Fusion-Western-Genuine-Headstall/dp/B0DS9XDG16?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 8,
    name: "Western Reining Saddle",
    image: "w8.webp",
    description: "Western Horse Leather Hot Seat Tooled Barrel Pleasure Handmade Saddle with Intricate Carved Detailing, Comfortable Hot Seat for Extended Rides, Complete",
    category: "Western Saddles",
    amazonLink: "https://www.amazon.com/Saddle-Fusion-Intricate-Detailing-Comfortable/dp/B0DRPCJ8K4?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 9,
    name: "Western Ranch Saddle",
    image: "w9.webp",
    description: "Black Suede Western Leather Saddle, Handcrafted, Floral Tooled, 100% Real Leather Hand Made Saddle Square Cut Skirt with Free Headstall and Breast Collar",
    category: "Western Saddles",
    amazonLink: "https://www.amazon.com/Saddle-Fusion-Western-Handcrafted-Headstall/dp/B0DRP5LHYQ?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 10,
    name: "Western Trail Comfort Saddle",
    image: "w10.jpg",
    description: "Western Big Horn Leather Wade Roping Ranch Hard Carved Horse Saddle 10 Leather Handmade Saddle Pleasure Trail/with Complete Set Headstall and Breast Collar",
    category: "Western Saddles",
    amazonLink: "https://www.amazon.com/Saddle-Fusion-Handmade-Pleasure-Headstall/dp/B0DT1NLZNP?ref_=ast_sto_dp&th=1&psc=1"
  },

  // Western Show Saddles (10 products)
  {
    id: 11,
    name: "Elegant Western Show Saddle",
    image: "s1.jpg",
    description: "Show Saddle Western Ranch Antique Show Carved Real Leather Saddle with Headstall and Breast Collar Real Silver Metals in Leather 16",
    category: "Western Show Saddles",
    amazonLink: "https://www.amazon.com/Saddle-Western-Antique-Leather-Headstall/dp/B0DP3GDQ1L?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 12,
    name: "Silver Show Western Saddle",
    image: "s2.webp",
    description: "Beautiful Western Show Carved Real Leather Fully Hand Made Saddle with Free Headstall and Breast Collar Real Silver Metals in Leather",
    category: "Western Show Saddles",
    amazonLink: "https://www.amazon.com/Beautiful-Western-Leather-Saddle-Headstall/dp/B0DP5C2LLZ?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 13,
    name: "Western Show Pleasure Saddle",
    image: "s3.webp",
    description: "Western Show Saddle Horse ASaddle,Color Natural Pleasure Trail Silver Streling Metals/Leather Saddle with Complete Set Free Headstall and Breast Collar",
    category: "Western Show Saddles",
    amazonLink: "https://www.amazon.com/Saddle-Fusion-Chestnut-Pleasure-Headstall/dp/B0DS9MLWBZ?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 14,
    name: "Western Show Trail Saddle",
    image: "s4.webp",
    description: "Natural Western Show Saddle Western Ranch Antique Show Carved Real Leather Saddle with Headstall and Breast Collar Real Silver Metals in Leather 16",
    category: "Western Show Saddles",
    amazonLink: "https://www.amazon.com/Natural-Western-Saddle-Antique-Headstall/dp/B0DP4HJWRL?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 15,
    name: "Western Show Reining Saddle",
    image: "s5.jpg",
    description: "Western Horse Saddles with Sterling Silver Metals, Show-Quality Carved Leather Saddle with Natural Suede Seat, Handcrafted Real Leather Carved Saddle - Premium Handmade Saddle for Show.",
    category: "Western Show Saddles",
    amazonLink: "http://amazon.com/Western-Sterling-Show-Quality-Saddle-Handcrafted/dp/B0DQY7YYC7?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 16,
    name: "Western Show Cutting Saddle",
    image: "s6.jpg",
    description: "Western Antique Show Full Carved Leather Hand Made Saddle Made to Order with Headstall and Breast Collar Real Silver Streling Metals/Leather Saddle 16",
    category: "Western Show Saddles",
    amazonLink: "https://www.amazon.com/Western-Antique-Saddle-Headstall-Streling/dp/B0DNSYVLSP?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 17,
    name: "Western Show Barrel Saddle",
    image: "s7.webp",
    description: "Western Antique Show Full Carved Real Hand Made Leather Saddle Made to Order Real Silver Streling Metals/Leather Saddle 16 with Headstall and Breast Collar",
    category: "Western Show Saddles",
    amazonLink: "https://www.amazon.com/Western-Antique-Saddle-Streling-Headstall/dp/B0DNT1YZSL?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 18,
    name: "Western Show Youth Saddle",
    image: "s8.webp",
    description: "Western Western Show Carved Handmade Real Sterling Silver Metal Genuine Natural Leather Hand Made Saddle Leather/with Free Headstall and Breast Collar",
    category: "Western Show Saddles",
    amazonLink: "https://www.amazon.com/Western-Handmade-Sterling-Saddle-Headstall/dp/B0DNWMNPC2?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 19,
    name: "Western Show Roping Saddle",
    image: "s9.webp",
    description: "Western Show Carved Handmade Natural Leather Saddle with Sterling Silver Accents, Black Real Metal Hardware, and Real Leather Construction – Fully Carved, Handcrafted Saddle",
    category: "Western Show Saddles",
    amazonLink: "https://www.amazon.com/Saddle-Fusion-Handmade-Sterling-Construction/dp/B0DV74CLN7?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 20,
    name: "Western Show Custom Saddle",
    image: "s10.jpg",
    description: "New Western Show Saddle with Natural Suede Seat Carved Genuine Leather, Real Metal Accents, Handcrafted Western Show Saddle",
    category: "Western Show Saddles",
    amazonLink: "https://www.amazon.com/Saddle-Fusion-Western-Natural-Handcrafted/dp/B0DRFSNWMG?ref_=ast_sto_dp&th=1&psc=1"
  },

  // Australian Saddles (10 products)
  {
    id: 21,
    name: "Australian Stock Saddle",
    image: "a1.webp",
    description: "Australian Outrider Black Aussie Horse Saddle Hand Made Collection Aussie Style with Horn Embossed on Flap, with Leathers & Stirrups and Girth/Complete Set",
    category: "Australian Saddles",
    amazonLink: "https://www.amazon.com/Australian-Outrider-Saddle-Collection-Embossed/dp/B0DNWNQQFS?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 22,
    name: "Australian Trail Saddle",
    image: "a2.jpg",
    description: "Australian Handmade Style Half Breed Aussie Stock Leather Saddle Premium Cattle Work, Endurance Riding, Knee Pads",
    category: "Australian Saddles",
    amazonLink: "https://www.amazon.com/Saddle-Fusion-Australian-Handmade-Endurance/dp/B0DS9XZZVQ?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 23,
    name: "Australian Campdraft Saddle",
    image: "a3.webp",
    description: "Australian Genuine Leather Saddle Pad | Hand Made Saddle Without Horn Aussie Style with Leathers & Stirrups | Seat for Stable Horse Riding Anti Slip Saddle Seat",
    category: "Australian Saddles",
    amazonLink: "https://www.amazon.com/Australian-Saddle-Leathers-Stirrups-Complete/dp/B0DNWNSGTW?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 24,
    name: "Australian Outback Saddle",
    image: "a4.webp",
    description: "Australian Embossed Black Leather Stock Horse Saddle with Horn – Australian Style Saddle with Wide Tree & Regular Tree Options – Includes Knee Pads for Enhanced Comfort.",
    category: "Australian Saddles",
    amazonLink: "https://www.amazon.com/Australian-Embossed-Black-Leather-Saddle/dp/B0DR8TTGXD?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 25,
    name: "Australian Barrell Saddle",
    image: "a5.webp",
    description: "Ausralian Leather Aussie Style Type Horse Saddle with Horn 17 Inch with Complete Set Saddle for Horses Made to Order",
    category: "Australian Saddles",
    amazonLink: "https://www.amazon.com/Ausralian-Leather-Aussie-Saddle-Complete/dp/B0DNR89YPL?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 26,
    name: "Australian Show Saddle",
    image: "a6.webp",
    description: "Australian Collection Horse Aussie Style Synthetic Saddle Seat Size Half Breed Fender Blue Synthetic Perfect Branded Super Soft Material Branded",
    category: "Australian Saddles",
    amazonLink: "https://www.amazon.com/Australian-Collection-Synthetic-Saddle-Material/dp/B0DPB55V4L?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 27,
    name: "Australian Youth Saddle",
    image: "a7.jpg",
    description: "Synthetic Australian Stock Black Australian Collection Horse Aussie Style Saddle Seat Size Perfect Super Soft Material Branded",
    category: "Australian Saddles",
    amazonLink: "https://www.amazon.com/Synthetic-Australian-Collection-Saddle-Material/dp/B0DP7XHTWF?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 28,
    name: "Australian Endurance Saddle",
    image: "a8.webp",
    description: "Handmade Half Breed Australian Outrider Collection Saddle – Premium Leather Australian Aussie Style Horse Saddle with English Suede Seat, Fully Rigged for Trail Riding, Endurance Events.",
    category: "Australian Saddles",
    amazonLink: "https://www.amazon.com/Handmade-Australian-Outrider-Collection-Saddle/dp/B0DQYCQ4ND?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 29,
    name: "Australian Roping Saddle",
    image: "a9.jpg",
    description: "Australian Stock Outrider Collection – Cow Indium Softie Seat Real Leather Aussie Style Horse Handmade Saddle with Under Girth, Over Girth and Stirrups Comes",
    category: "Australian Saddles",
    amazonLink: "https://www.amazon.com/Complete-Australian-Stock-Outrider-Collection/dp/B0DQYDF1WV?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 30,
    name: "Australian Custom Saddle",
    image: "a10.webp",
    description: "Embossed Australian Long Flap Aussie Style Collection Leather Stock Saddle - Wide Tree & Regular Tree, X-Large 19 for Endurance Riding.",
    category: "Australian Saddles",
    amazonLink: "https://www.amazon.com/Embossed-Australian-Collection-Leather-Saddle/dp/B0DRD712NL?ref_=ast_sto_dp&th=1&psc=1"
  },

  // Endurance Saddles (10 products)
  {
    id: 31,
    name: "Lightweight Endurance Saddle",
    image: "e1.webp",
    description: "Ultra-lightweight endurance saddle for long-distance competitions and trail riding",
    category: "Endurance Saddles",
    amazonLink: "https://amazon.com/lightweight-endurance-saddle"
  },
  {
    id: 32,
    name: "Endurance Trail Saddle",
    image: "e2.webp",
    description: "English Western Endurance Genuine Leather Saddle Western Trail Beautifully Hand Made Collection Horse Leather Saddle Travel Comfortable Seat Saddle",
    category: "Endurance Saddles",
    amazonLink: "https://www.amazon.com/Endurance-Saddle-Beautifully-Collection-Comfortable/dp/B0DPB5S7Q1?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 33,
    name: "Endurance Competition Saddle",
    image: "e3.jpg",
    description: "Endurance Genuine Real Leather English Hand Made Saddle Horse Easy Comfortable Quilted Cow Indium Black Softie Seat Saddle",
    category: "Endurance Saddles",
    amazonLink: "https://www.amazon.com/Endurance-Genuine-Leather-Saddle-Comfortable/dp/B0DP3BLB13?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 34,
    name: "Endurance Distance Saddle",
    image: "e4.webp",
    description: "Brown Endurance Genuine Real Leather English Hand Made Saddle Horse Easy Comfortable Plain Cow Indium Black Softie Seat Saddle",
    category: "Endurance Saddles",
    amazonLink: "https://www.amazon.com/Endurance-Genuine-Leather-Saddle-Comfortable/dp/B0DP3DTG7F?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 35,
    name: "Endurance Adventure Saddle",
    image: "e5.webp",
    description: "English Western Endurance Quilted Seat Leather Horse Saddle Tone Combination English Rigging, Travel Comfortable Horse Saddle/Quilted Sdeat Travel Comfortable Seat Saddle",
    category: "Endurance Saddles",
    amazonLink: "https://www.amazon.com/English-Endurance-Saddle-Combination-Comfortable/dp/B0DP7V4BS6?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 36,
    name: "Endurance Racing Saddle",
    image: "e6.webp",
    description: "Western Endurance Brown Leather Saddle Cow Indium Softy Seat, Slick Cantle, Fenders Border Tooling Collection Horse Leather Saddle, Durable, Comfortable, Saddle.",
    category: "Endurance Saddles",
    amazonLink: "https://www.amazon.com/Saddle-Fusion-Endurance-Collection-Comfortable/dp/B0DVMNGYSW?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 37,
    name: "Endurance Comfort Saddle",
    image: "e7.webp",
    description: "English Endurance Leather Saddle | Cutback Skirts, Bulkless English Rigging, Round Pommel, Slick Cantle | Border Tooling Collection",
    category: "Endurance Saddles",
    amazonLink: "https://www.amazon.com/Saddle-Fusion-Endurance-Bulkless-Collection/dp/B0DRJFDKFM?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 38,
    name: "Endurance Western Saddle",
    image: "e8.jpg",
    description: "Western Endurance Saddle with Comfortable Seat, with Quilted Cutback Skirts, Beautiful Round Pommel, and Premium Leather – Ideal for Endurance Riding, Horseback Riding, and Collectors.",
    category: "Endurance Saddles",
    amazonLink: "https://www.amazon.com/Western-Saddle-Comfortable-Cutback-Beautiful/dp/B0DQYB8BK5?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 39,
    name: "Endurance English Saddle",
    image: "e9.jpg",
    description: "Natural Endurance Hand Tooled & Carved Real Leather English Saddle Easy Comfortable Cow Indium Black Softie Seat Saddle/All Customization Available",
    category: "Endurance Saddles",
    amazonLink: "https://www.amazon.com/Saddle-Fusion-Endurance-Comfortable-Customization/dp/B0DXB8J5Z2?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 40,
    name: "Endurance Custom Saddle",
    image: "e10.webp",
    description: "Endurance Plain Suede Seat Seat Real Drup Dyed Leather Finished Horse Hand Made Saddle Tone Combination English Rigging, Travel Comfortable Seat Saddle",
    category: "Endurance Saddles",
    amazonLink: "https://www.amazon.com/Endurance-Finished-Saddle-Combination-Comfortable/dp/B0DP3BRZM9?ref_=ast_sto_dp&th=1&psc=1"
  },

  // English Saddles (10 products)
  {
    id: 41,
    name: "English Dressage Saddle",
    image: "en1.webp",
    description: "Black English Dressage Style Combination Genuine Real Leather Full Cow Indium Softie English Saddle Horses with Free Complete Bridle and Stirrups Leathers",
    category: "English Saddles",
    amazonLink: "https://www.amazon.com/Dressage-Combination-Saddle-Complete-Stirrups/dp/B0DNZ25WX6?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 42,
    name: "English Jumping Saddle",
    image: "en2.jpg",
    description: "Icelandic Black Cow Indium Softie Genuine Real Leather Hand Made Saddle English Horse Easy Comfortable Quilted Seat Saddle with Free Set",
    category: "English Saddles",
    amazonLink: "https://www.amazon.com/Icelandic-Genuine-Leather-Saddle-Comfortable/dp/B0DNXYHMWV?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 43,
    name: "English All-Purpose Saddle",
    image: "en3.webp",
    description: "English Dressage Style Blue Genuine High Qaulity Leather Full Covered Cow Indium Softie English Horse Saddle Saddle Hand Made Horse Easy Comfortable Plain Cow Black Softie Seat",
    category: "English Saddles",
    amazonLink: "https://www.amazon.com/English-Dressage-Genuine-Saddle-Comfortable/dp/B0DP7TPCCF?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 44,
    name: "English Eventing Saddle",
    image: "en4.jpg",
    description: "English Dressage Style Tan Genuine High Qaulity Leather Full Covered Cow Indium Softie English Horse Saddle Saddle Hand Made Horse Easy Comfortable Plain Cow Black Softie Seat",
    category: "English Saddles",
    amazonLink: "https://www.amazon.com/English-Dressage-Genuine-Saddle-Comfortable/dp/B0DP7TNVQW?ref_=ast_sto_dp&th=1&psc=1"
  },

  // Brazilian Saddles (10 products)
  {
    id: 45,
    name: "Brazilian Vaquero Saddle",
    image: "b1.webp",
    description: "Brazilian Genuine Real Leather English Saddle Horse Easy Comfortable Quilted Cow Indium White Softie Seat Saddle 17 Inches",
    category: "Brazilian Saddles",
    amazonLink: "https://www.amazon.com/Brazilian-Genuine-Leather-Saddle-Comfortable/dp/B0DNKKKPJ8?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 46,
    name: "Brazilian Trail Saddle",
    image: "b2.webp",
    description: "Brazilian Genuine Real Leather English Hand Made Saddle Horse Easy Comfortable Quilted Cow Indium White Softie Seat Saddle 17 Inches",
    category: "Brazilian Saddles",
    amazonLink: "https://www.amazon.com/Brazilian-Genuine-Leather-Saddle-Comfortable/dp/B0DNSZ87H2?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 47,
    name: "Brazilian Show Saddle",
    image: "b3.webp",
    description: "Brazilian Genuine Real Leather Hand Made Saddle Cow Indium Softie Hand Tooled English Horse Easy Comfortable Quilted Seat Saddle 17 Inches",
    category: "Brazilian Saddles",
    amazonLink: "https://www.amazon.com/Brazilian-Genuine-Leather-Saddle-Comfortable/dp/B0DNZ2B6R3?ref_=ast_sto_dp&th=1&psc=1"
  },
  {
    id: 48,
    name: "Brazilian Ranch Saddle",
    image: "b4.webp",
    description: "Blue Seat Brazilian Genuine Real Leather English Saddle Horse Easy Comfortable Quilted Cow Indium White Softie Seat Saddle",
    category: "Brazilian Saddles",
    amazonLink: "https://www.amazon.com/Saddle-Fusion-Brazilian-Genuine-Comfortable/dp/B0DRGYY5W2?ref_=ast_sto_dp&th=1&psc=1"
  }
  
].filter(product => product.name !== "Western Horse Saddle for Sale Hand-Tooled Show Saddle with Silver Accents");