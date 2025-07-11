// data/destinations.js
export const destinations = {
    regions: [
    { name: "Europe", count: 61 },
    { name: "Caribbean", count: 25 },
    { name: "Asia", count: 35 },
    { name: "North America", count: 29 },
    { name: "Indian Ocean", count: 13 },
    { name: "Oceania", count: 14 },
    { name: "Middle East & Africa", count: 20 }
 ],

  tier1: [
    { country: "Indonesia", destinations: ["Bali (Seminyak, Uluwatu, Canggu, Ubud, Nusa Dua)", "Lombok (Senggigi, Gili Islands)", "Sumba", "Sumbawa", "Java (Yogyakarta)"] },
    { country: "Greece", destinations: ["Mykonos", "Santorini", "Crete (Elounda, Chania, Heraklion)", "Corfu", "Paros", "Naxos", "Rhodes"] },
    { country: "Maldives", destinations: ["Baa Atoll", "North Male Atoll", "South Ari Atoll", "Noonu Atoll", "Raa Atoll"] },
    { country: "Italy", destinations: ["Amalfi Coast (Positano, Ravello, Praiano)", "Tuscany (Chianti, Val d'Orcia, Siena, Lucca)", "Lake Como (Bellagio, Varenna, Tremezzo)", "Sicily (Taormina, Noto, Cefalù, Syracuse)", "Sardinia (Costa Smeralda, Porto Cervo, Alghero)", "Capri", "Portofino", "Puglia (Ostuni, Lecce, Monopoli)", "Lake Garda", "Umbria", "Elba Island"] },
    { country: "Spain", destinations: ["Ibiza", "Mallorca (Deià, Sóller, Palma, Pollença)", "Marbella", "Costa del Sol (Estepona, Sotogrande)", "Canary Islands (Tenerife, Lanzarote, Gran Canaria)", "Menorca", "Formentera", "Costa Brava (Begur, Cadaqués)", "Madrid"] },
    { country: "Thailand", destinations: ["Phuket", "Koh Samui", "Krabi", "Koh Phangan", "Koh Lanta", "Koh Yao Noi", "Chiang Mai"] },
    { country: "France", destinations: ["French Riviera (Nice, Cannes, Villefranche-sur-Mer, Eze, Cap Ferrat, Antibes)", "Provence (Luberon, Aix-en-Provence, Gordes, Saint-Rémy-de-Provence)", "Corsica (Porto-Vecchio, Bonifacio, Calvi)", "Paris", "St. Tropez"] },
    { country: "Mexico", destinations: ["Tulum", "Cabo San Lucas", "Punta Mita", "Riviera Maya", "Puerto Vallarta", "San Miguel de Allende", "Isla Holbox", "Bacalar", "Sayulita", "Todos Santos"] },
    { country: "USA", destinations: ["Malibu", "Miami", "The Hamptons", "Hawaii (Maui, Kauai, Oahu, Big Island)", "Lake Tahoe", "Palm Springs", "Santa Barbara"] },
    { country: "UAE", destinations: ["Dubai", "Abu Dhabi", "Ras Al Khaimah"] },
    { country: "Portugal", destinations: ["Algarve (Vilamoura, Lagos, Quinta do Lago)", "Lisbon Coast (Cascais, Sintra)", "Madeira (Funchal, Calheta)", "Porto", "Azores (São Miguel)"] },
    { country: "Turks and Caicos", destinations: ["Providenciales", "Grace Bay"] },
    { country: "Barbados", destinations: ["West Coast", "St. James", "Holetown", "Sandy Lane", "Speightstown"] },
    { country: "Costa Rica", destinations: ["Guanacaste", "Manuel Antonio", "Santa Teresa", "Nosara", "Papagayo Peninsula"] },
    { country: "Bahamas", destinations: ["Nassau", "Exuma", "Paradise Island"] },
    { country: "Jamaica", destinations: ["Montego Bay", "Negril", "Ocho Rios", "Port Antonio"] },
    { country: "Seychelles", destinations: ["Mahe", "Praslin", "La Digue"] },
    { country: "Turkey", destinations: ["Bodrum", "Antalya", "Istanbul", "Cesme"] },
    { country: "South Africa", destinations: ["Cape Town", "Hermanus", "Knysna", "Franschhoek", "Stellenbosch"] },
    { country: "Qatar", destinations: ["Doha", "The Pearl"] },
    { country: "Oman", destinations: ["Muscat", "Salalah"] },
    { country: "Belize", destinations: ["Ambergris Caye", "Placencia", "Turneffe Atoll"] },
    { country: "Anguilla", destinations: ["Shoal Bay"] },
    { country: "St. Lucia", destinations: ["Rodney Bay", "Marigot Bay", "Soufrière"] },
    { country: "Antigua and Barbuda", destinations: ["Jolly Harbour", "Dickenson Bay", "English Harbour"] },
    { country: "Panama", destinations: ["Bocas del Toro", "Pearl Islands", "Pedasi", "San Blas Islands"] },
    { country: "Vietnam", destinations: ["Da Nang", "Phu Quoc", "Nha Trang", "Hoi An", "Quy Nhon"] },
    { country: "Philippines", destinations: ["Boracay", "Palawan (El Nido, Coron)", "Cebu", "Siargao", "Bohol"] }
  ],

  tier2: [
    { country: "Croatia", destinations: ["Dubrovnik", "Hvar", "Split", "Istria (Rovinj, Poreč, Motovun)", "Korčula", "Brač", "Vis", "Šibenik", "Trogir"] },
    { country: "Montenegro", destinations: ["Kotor", "Budva", "Sveti Stefan", "Tivat", "Herceg Novi"] },
    { country: "Cyprus", destinations: ["Paphos", "Limassol", "Ayia Napa", "Protaras", "Larnaca"] },
    { country: "Austria", destinations: ["Tyrol (Kitzbühel, Innsbruck)", "Arlberg"] },
    { country: "Canary Islands", destinations: ["Tenerife", "Lanzarote", "Gran Canaria"] },
    { country: "Mauritius", destinations: ["Belle Mare", "Grand Baie", "Le Morne", "Flic en Flac", "Tamarin"] },
    { country: "Sri Lanka", destinations: ["Galle", "Weligama", "Bentota", "Tangalle", "Mirissa"] },
    { country: "Malaysia", destinations: ["Langkawi", "Penang"] },
    { country: "Dominican Republic", destinations: ["Punta Cana", "Casa de Campo", "Cap Cana", "Samaná Peninsula"] },
    { country: "Brazil", destinations: ["Florianópolis", "Bahia", "Rio de Janeiro"] },
    { country: "Japan", destinations: ["Niseko", "Kyoto", "Hakone", "Okinawa", "Karuizawa", "Nara"] },
    { country: "Morocco", destinations: ["Marrakech", "Essaouira", "Agadir", "Oualidia"] },
    { country: "Australia", destinations: ["Byron Bay", "Whitsundays", "Port Douglas", "Mornington Peninsula"] }
  ],

  tier3: [
    { country: "Kenya", destinations: ["Diani Beach", "Watamu", "Malindi"] },
    { country: "Tanzania", destinations: ["Zanzibar"] },
    { country: "New Zealand", destinations: ["Queenstown", "Bay of Islands", "Taupo", "Matakana"] },
    { country: "Fiji", destinations: ["Mamanuca Islands", "Coral Coast", "Yasawa Islands", "Denarau Island"] },
    { country: "Vanuatu", destinations: ["Efate", "Espiritu Santo"] },
    { country: "Iceland", destinations: ["Golden Circle", "Hella", "Akureyri"] },
  ]
};