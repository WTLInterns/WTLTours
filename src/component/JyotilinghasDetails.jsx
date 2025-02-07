import React from "react";
import { useParams } from "react-router-dom";
import "./JyotilinghasDetails.css";

// Importing all the images
import somnath from "../assets/Images/somnath.jpeg";
import mallikarjuna from "../assets/Images/mallikarjuna.jpeg";
import mahakaleshwar from "../assets/Images/mahakaleshwar.jpeg";
import omkareshwar from "../assets/Images/omkareshwar.jpeg";
import kedarnath from "../assets/Images/kedarnath.jpeg";
import bhimashankar from "../assets/Images/bhimashankar.jpeg";
import vishwanath from "../assets/Images/vishwanath.jpeg";
import ramanath from "../assets/Images/ramanath.jpeg";
import nageshwar from "../assets/Images/nageshwar.jpeg";
import tryambakeshwar from "../assets/Images/tryambakeshwar.jpeg";
import adhyashankar from "../assets/Images/adhyashankar.jpg";
import grishneshwar from "../assets/Images/grishneshwar.jpeg";

// Jyotirlinga information
const jyotirlingaInfo = {
  "Somnath (Gujarat)": {
    description: "Somnath, one of the 12 revered Jyotirlingas dedicated to Lord Shiva, is located in Prabhas Patan near Veraval in Saurashtra, Gujarat. This sacred temple holds immense spiritual, historical, and cultural significance. It has been destroyed and rebuilt multiple times, symbolizing resilience and devotion. The present structure, rebuilt in 1951 under the leadership of Sardar Vallabhbhai Patel, stands majestically on the shores of the Arabian Sea, offering breathtaking views. Often referred to as The Eternal Shrine, the temple features intricate carvings, grand pillars, and a majestic shikhara (spire). It is believed that the Jyotirlinga was originally installed by the Moon God (Chandra) as a mark of his devotion to Lord Shiva. The temple attracts thousands of pilgrims, especially during Mahashivaratri, which is celebrated with great fervor. A mesmerizing light and sound show narrates its glorious history every evening. Nearby attractions include Triveni Sangam, Bhalka Tirth, and the Prabhas Patan Museum, enhancing the spiritual experience. Mentioned in ancient texts like the Shiva Purana and Rigveda, Somnath remains a beacon of faith, strength, and divine energy, drawing devotees from all over the world.",
    image: somnath,
  },
  "Mallikarjuna (AndhraPradesh)": {
    description: "Mallikarjuna Jyotirlinga is located in Srisailam, Andhra Pradesh.It is one of the 12 revered Jyotirlingas in India.The temple is dedicated to Lord Shiva and is a major pilgrimage site.Nestled on the banks of the Krishna River, it offers a serene environment.The temple’s history and grandeur attract numerous devotees every year.It is an important spiritual and cultural landmark in South India.The surrounding hills and forests add to the temple's spiritual appeal.The temple is renowned for its beautiful architecture, showcasing intricate carvings.The main shrine houses the Jyotirlinga, which is a symbol of Lord Shiva's power.The temple is also famous for its ancient history, dating back to several centuries.During festivals like Maha Shivaratri, the temple attracts thousands of devotees.Pilgrims believe that visiting Mallikarjuna Jyotirlinga brings spiritual purification.It is also associated with many legends from Hindu mythology.The temple complex includes other shrines dedicated to various deities.Visiting Mallikarjuna is considered a significant part of the spiritual journey for many.",
    image: mallikarjuna,
  },
  "Mahakaleshwar (MadhyaPradesh)": {
    description: "Mahakaleshwar Jyotirlinga is situated in Ujjain, Madhya Pradesh.It is one of the most revered Jyotirlingas and dedicated to Lord Shiva.The temple is located on the banks of the Shipra River, known for its beautiful architecture.The unique feature of the temple is the Bhasma Aarti performed with sacred ash.This ritual involves the offering of sacred ash to the Jyotirlinga early in the morning.Mahakaleshwar is considered a powerful and divine site for spiritual enlightenment.The temple is known for its grand structure and intricate carvings, symbolizing divine power.The temple's sanctum houses the Mahakaleshwar Jyotirlinga, which is a symbol of Lord Shiva’s energy.Devotees believe that the Jyotirlinga here is self-manifested, making it even more sacred.It attracts thousands of pilgrims during important festivals like Maha Shivaratri.During this time, the temple is illuminated with lights, and special prayers are offered.The temple complex is a hub for spiritual activities, including meditation and prayer.Mahakaleshwar is deeply rooted in Hindu mythology, with many ancient legends surrounding it.The temple also houses other deities, adding to its significance as a spiritual destination.Visiting Mahakaleshwar is believed to cleanse one’s soul and grant liberation.",
    image: mahakaleshwar,
  },
  "Omkareshwar (MadhyaPradesh)": {
    description: "Omkareshwar Jyotirlinga is located on Mandhata Island in the Narmada River, with the island naturally shaped like the sacred 'Om' symbol, adding to its divine significance. It is one of the 12 Jyotirlingas dedicated to Lord Shiva, making it an important pilgrimage site for devotees. The temple is situated in a serene and peaceful environment, offering spiritual solace to those who visit. Thousands of devotees flock to Omkareshwar, especially during the festive months of Maha Shivaratri and Shravan, when the temple is at its vibrant best. The ancient architecture of the temple reflects the grandeur of Hindu temple design, with intricate carvings and sculptures. It is believed that Lord Shiva himself established the Jyotirlinga here, which adds to the sacredness of the site. The scenic beauty of the Narmada River enhances the spiritual charm, and pilgrims often take a holy dip in the river, believing it cleanses the soul. The temple is surrounded by lush greenery, creating a serene atmosphere perfect for both devotion and relaxation. Omkareshwar also serves as an ideal location for meditation and prayer, offering a peaceful refuge for spiritual seekers. The temple complex houses several smaller shrines dedicated to different deities, further enriching its spiritual significance. During festivals, the temple comes alive with grand celebrations, traditional rituals, and prayers. It is considered one of the most revered Shiva worship sites, drawing countless pilgrims each year. A visit to Omkareshwar is believed to bring peace, prosperity, and divine blessings to all who come in devotion.",
    image: omkareshwar,
  },
  "Kedarnath (Uttarakhand)": {
    description: "Kedarnath Jyotirlinga is one of the holiest and most revered shrines dedicated to Lord Shiva, located in the majestic Himalayas at an altitude of 3,583 meters. The temple is believed to have been built by the Pandavas, with its origins dating back to ancient times. It was later revived by Adi Shankaracharya in the 8th century. The trek to Kedarnath is challenging, as pilgrims must travel through rugged terrain and harsh weather conditions, making it a journey of devotion and faith. The temple remains open only from April to November due to heavy snowfall during the winter months. Kedarnath is part of the Char Dham Yatra, one of the most important pilgrimage circuits in India, attracting millions of devotees every year. The stunning snow-capped peaks surrounding the temple add to its spiritual grandeur. Pilgrims believe that a visit to Kedarnath will purify their soul and lead to moksha, or liberation. The temple's simple yet majestic structure stands as a symbol of strength and faith in the face of nature’s challenges. Kedarnath's serene beauty and peaceful environment offer a perfect place for meditation and reflection. The temple is dedicated to the Jyotirlinga of Lord Shiva, which is believed to be self-manifested. Pilgrims also take a holy dip in the nearby Saraswati River, believing it purifies their body and soul. During the peak pilgrimage season, the temple is filled with devotees chanting prayers and seeking Lord Shiva's blessings. The breathtaking natural beauty of Kedarnath, combined with its spiritual significance, makes it a must-visit for devotees and travelers alike. Kedarnath remains a symbol of unwavering faith, strength, and divine energy.",
    image: kedarnath,
  },
  "Bhimashankar (Maharashtra)": {
    description: "Bhimashankar Jyotirlinga, dedicated to Lord Shiva, is located in the serene Sahyadri Hills near Pune, Maharashtra. Surrounded by lush greenery and the Bhimashankar Wildlife Sanctuary, it offers a tranquil and spiritual atmosphere. According to legend, Lord Shiva manifested here after defeating the demon Bhima, giving the temple its name. The temple's architecture follows the traditional Nagara style, with intricate carvings and a striking shikhara. Bhimashankar is a popular pilgrimage destination, especially during festivals like Maha Shivaratri, when thousands of devotees visit. The temple is also an important site for those seeking spiritual enlightenment and peace. Pilgrims believe that visiting Bhimashankar removes all obstacles in life and brings divine blessings. The surrounding natural beauty, with its dense forests and waterfalls, adds to the spiritual ambiance of the temple. Bhimashankar is one of the twelve Jyotirlingas, making it a significant site for Shiva worship. Devotees undertake a pilgrimage to Bhimashankar to seek solace and purification of the mind and soul. The temple is also an important part of the religious circuit of the Trimbakeshwar and other nearby holy sites. The peaceful surroundings of Bhimashankar make it an ideal spot for meditation and reflection. The temple holds great religious and historical importance, attracting both pilgrims and tourists. The experience of visiting Bhimashankar is both spiritually enriching and mentally rejuvenating. With its spiritual significance, stunning views, and serene environment, Bhimashankar remains one of Maharashtra's most sacred destinations.",
    image: bhimashankar,
  },
  "Vishwanath (UttarPradesh)": {
    description: "Vishwanath Jyotirlinga, located in the holy city of Varanasi, Uttar Pradesh, is one of the most sacred temples dedicated to Lord Shiva. Varanasi, also known as Kashi, is considered one of the oldest living cities in the world and holds immense spiritual significance. The Kashi Vishwanath Temple, built on the banks of the sacred Ganges River, attracts millions of devotees each year. The temple has a rich history, with its structure being rebuilt several times over the centuries due to invasions and destruction. It is believed that a visit to the Vishwanath Temple grants moksha, liberation from the cycle of birth and death. The temple is renowned for its intricate architecture, with golden spires and beautiful carvings that add to its divine aura. The Ganges River, flowing beside the temple, is considered the holiest river in Hinduism, and devotees often take a holy dip to purify themselves. Vishwanath is one of the 12 Jyotirlingas and holds a prominent place in Hindu mythology. During important festivals like Maha Shivaratri, the temple sees an influx of devotees, all offering prayers and seeking blessings from Lord Shiva. The temple is not just a religious site but a cultural and historical landmark. The surrounding ghats and vibrant atmosphere make it a unique pilgrimage destination. Varanasi, with its spiritual energy and deep-rooted traditions, offers an unparalleled experience for those seeking both religious and cultural immersion. The Kashi Vishwanath Temple remains a beacon of faith, drawing devotees from all over the world. The experience of visiting Vishwanath is not just a spiritual journey, but also a cultural awakening.",
    image: vishwanath,
  },
  "Ramanath (TamilNadu)": {
    description: "The Ramanathaswamy Temple, located in Rameswaram, Tamil Nadu, is one of the twelve revered Jyotirlingas dedicated to Lord Shiva. It holds great spiritual significance, as it is believed that Lord Rama built the temple to worship Shiva and atone for the sins committed during the war with Ravana. The temple’s history dates back to the 12th century, with contributions from various kings over time. The sanctum of the temple houses the sacred Jyotirlinga, which is highly revered by devotees. Pilgrims visit the temple to take a dip in the Agni Theertham, which is believed to purify the soul. The grand corridors and intricate sculptures of the temple reflect the brilliance of Dravidian and Chola architecture. Notably, the temple features 22 sacred wells, each associated with healing properties. The temple is also linked to Lord Rama’s worship of Lord Shiva, with the belief that he installed the Shiva Lingam here. The temple hosts various rituals, including the Rudra Abhishekam, and is a major center of devotion, especially during festivals like Maha Shivaratri. The site is an important part of the pilgrimage circuit that connects Rameswaram with Kashi and other sacred destinations, making it a significant symbol of Hindu spirituality and devotion.",
    image: ramanath,
  },
  "Nageshwar (Gujarat)": {
    description: "The Nageshwar Jyotirlinga, located near Dwarka in Gujarat, is one of the twelve revered Jyotirlingas dedicated to Lord Shiva. This sacred temple is situated in the village of Dwarka and is believed to be one of the most significant pilgrimage sites for devotees of Lord Shiva. The Nageshwar Temple is associated with the story of a devotee named Supriya, who was protected from a demon by Lord Shiva when he invoked the Nageshwar form of Shiva. The Jyotirlinga at this temple is believed to possess healing powers and is worshipped with great devotion by pilgrims. The temple is surrounded by serene landscapes, adding to its spiritual charm. The architecture of the Nageshwar Temple follows traditional Gujarat styles, with intricate carvings and sculptures. The temple is also famous for its scenic beauty and tranquility, making it an ideal destination for spiritual seekers. Nageshwar is one of the key temples in the Dwarka region, which holds immense significance in Hindu mythology. The temple is said to be a place where Lord Shiva, in the form of Nageshwar, is believed to have eradicated the fear of poison from devotees. The shrine is accessible by road and is a part of the Dwarka pilgrimage circuit, drawing visitors from all over India. It is believed that a visit to Nageshwar brings prosperity and removes obstacles from one’s life. The temple is also known for its regular rituals, prayers, and religious events, especially during festivals like Maha Shivaratri. The Nageshwar Jyotirlinga is an embodiment of the immense power and grace of Lord Shiva, making it a spiritual landmark in the region. Devotees offer prayers and perform ceremonies at the temple, seeking divine blessings for health, wealth, and well-being. The temple’s serene atmosphere and spiritual significance make it a must-visit destination for those seeking Lord Shiva’s blessings.",
    image: nageshwar,
  },
  "Tryambakeshwar (Maharashtra)": {
    description: "The Trimbakeshwar Temple, located in Trimbak, Maharashtra, is one of the twelve revered Jyotirlingas dedicated to Lord Shiva. Situated at the base of the Brahmagiri Hill, it is considered one of the holiest sites in Hinduism. The temple is famous for its unique three-faced Shiva Lingam, representing the three main deities of the Hindu trinity—Brahma, Vishnu, and Shiva. The origin of the river Godavari, one of the major rivers in India, is also believed to be near this temple, adding to its significance. The temple was built by the Maratha king, Balaji Baji Rao, in the 18th century, but its history traces back to ancient times. The Trimbakeshwar Temple is surrounded by beautiful and serene landscapes, making it a peaceful pilgrimage spot. Devotees visit the temple to seek blessings for longevity, prosperity, and spiritual progress. The temple is also known for its sacred rituals, including the Rudra Abhishekam, which is performed for the well-being of the devotees. The temple complex includes the sacred Kushavarta Kund, a holy pond where pilgrims take a dip to cleanse their souls. The Trimbakeshwar Temple is particularly significant during the Mahashivaratri festival, which attracts thousands of pilgrims. The temple is located in a region rich in natural beauty, with lush green hills and the calm flow of the Godavari River. It is a vital part of the pilgrimage circuit that connects other significant spiritual sites in Maharashtra. The temple’s architectural design follows the ancient Hindu traditions, with intricate carvings and a sense of grandeur that adds to its spiritual atmosphere. The Trimbakeshwar Jyotirlinga is believed to have immense power, and it is said that Lord Shiva himself resides in this form, protecting and blessing his devotees. It is a destination for those seeking divine grace, spiritual fulfillment, and a deeper connection with Lord Shiva.",
    image: tryambakeshwar,
  },
  "Adhyashankar (Himalayas)": {
    description: "Adi Shankaracharya's temple at Adhyasankar, located in the serene Himalayas, is a sacred site dedicated to Lord Shiva. This temple is believed to have been established by the great philosopher and saint Adi Shankaracharya himself. The temple is situated in a peaceful and secluded location, offering a tranquil atmosphere for spiritual seekers. Adhyasankar is associated with the teachings of Advaita Vedanta, the philosophy of non-duality, which Adi Shankaracharya promoted. The temple stands on a hilltop, providing breathtaking views of the surrounding mountains and valleys. It is believed that Adi Shankaracharya meditated in this area, gaining spiritual enlightenment and divine blessings. The temple is dedicated to Lord Shiva in the form of a Jyotirlinga, a symbol of divine light and energy. Pilgrims and devotees visit this temple to seek Lord Shiva's blessings for inner peace, wisdom, and liberation from the cycle of birth and death. The sacred environment of the temple is known for its spiritual significance, offering a place for meditation and reflection. The region is also home to several other temples and spiritual sites, making it a popular pilgrimage destination for followers of Hinduism. The temple’s architecture is simple yet elegant, reflecting the ancient Indian temple styles. It is surrounded by lush greenery and is often enveloped in mist, enhancing the sense of spiritual serenity. Adhyasankar is a place where both nature and divinity come together, making it a perfect location for seekers of higher truth and knowledge. The temple holds a special place in the hearts of devotees who seek a deeper connection with the divine through the teachings of Adi Shankaracharya. It is also considered an important destination for those following the Advaita Vedanta tradition.",
    image: adhyashankar,
  },
  "Grishneshwar (Maharashtra)": {
    description: "The Grishneshwar Temple, located in Ellora, Maharashtra, is one of the twelve revered Jyotirlingas dedicated to Lord Shiva. It is believed to be the site where Lord Shiva manifested as a Jyotirlinga to bless his devotees. The temple holds immense spiritual significance and is considered one of the most important pilgrimage destinations for Shiva devotees. Grishneshwar is known for its unique architecture, featuring intricate carvings and sculptures that reflect the rich cultural heritage of the region. The temple is also famous for its peaceful atmosphere, providing a serene environment for worship and meditation. According to legend, a devotee named Kusuma was blessed by Lord Shiva when she prayed with unwavering devotion, and her prayers were answered at this very spot. The temple is built near the famous Ellora Caves, which is a UNESCO World Heritage Site, making it a significant cultural and religious destination. Grishneshwar is also closely associated with the story of the demon Andhaka, who was slain by Lord Shiva, and this event is believed to have taken place near the temple. Pilgrims visit Grishneshwar to seek blessings for good health, prosperity, and protection from evil forces. The temple is especially crowded during the Maha Shivaratri festival, where thousands of devotees gather to perform prayers and rituals. The temple's simple yet elegant design stands as a testament to the devotion and artistry of the craftsmen who built it. It is also known for the sacred Kund, a holy water reservoir, where devotees take a ritual dip before entering the temple. The Grishneshwar Jyotirlinga is considered highly auspicious and is believed to have the power to remove obstacles from one's life. The temple plays a crucial role in the spiritual and cultural heritage of Maharashtra, attracting both devotees and tourists alike.",
    image: grishneshwar,
  },
};

const JyotilingasDetails = () => {
  const { name } = useParams(); // Get the name from URL params

  // Find the info for the Jyotirlinga based on the 'name' from the URL
  const info = jyotirlingaInfo[name] || { description: "Information not available.", image: somnath }; // Default to Somnath if name not found

  return (
    <div className="details-container">
      <h2>{name}</h2>
      <img src={info.image} alt={name} className="details-image" />
      <p>{info.description}</p>
    </div>
  );
};

export default JyotilingasDetails;
