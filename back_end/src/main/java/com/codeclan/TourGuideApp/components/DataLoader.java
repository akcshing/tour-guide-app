package com.codeclan.TourGuideApp.components;


import com.codeclan.TourGuideApp.enums.AccessibilityType;
import com.codeclan.TourGuideApp.enums.DayType;
import com.codeclan.TourGuideApp.enums.TimeOfDayType;
import com.codeclan.TourGuideApp.models.Attraction;
import com.codeclan.TourGuideApp.models.Booking;
import com.codeclan.TourGuideApp.models.Customer;
import com.codeclan.TourGuideApp.repositories.AttractionRepository;
import com.codeclan.TourGuideApp.repositories.bookings.BookingRepository;
import com.codeclan.TourGuideApp.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    AttractionRepository attractionRepository;

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    CustomerRepository customerRepository;

    public DataLoader(){

    }


    public void run(ApplicationArguments args) {

        Attraction castle = new Attraction("Edinburgh Castle","Castlehill, Edinburgh EH1 2NG, Scotland","Edinburgh Castle is a world famous icon of Scotland and part of the Old and New Towns of Edinburgh’s World Heritage Site. It was recently voted top UK Heritage Attraction in the British Travel Awards and is Scotland’s number one paid-for tourist attraction.",17.00,"https://www.scotchwhiskyexperience.co.uk/assets/000/001/866/Edinburgh_Castle_original.jpg?1494241918", AccessibilityType.CHILDFRIENDLY,"Castle", TimeOfDayType.MORNING);
        attractionRepository.save(castle);

        Attraction national_Museum_of_Scotland = new Attraction("National Museum of Scotland","Chambers Street, Edinburgh EH1 1JF, Scotland","Explore the diversity of the natural world, world cultures, science and technology, art, design and fashion, and Scottish history, all under one roof.",00.00,"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Museum_of_Scotland.jpg/1200px-Museum_of_Scotland.jpg",AccessibilityType.CHILDFRIENDLY,"Museum", TimeOfDayType.AFTERNOON);
        attractionRepository.save(national_Museum_of_Scotland);

        Attraction dynamicEarth = new Attraction("Dynamic Earth","112 Holyrood Road, Edinburgh EH8 8AS, Scotland","A visit to Dynamic Earth is like nothing else on Earth. It's a chance to experience the primeval forces of nature as they shaped our planet, to journey through space and time and even go on a ADVENTURE around the world. You'll be embarking on the interactive adventure of a lifetime - the lifetime of our planet. As if this wasn't enough, Dynamic Earth is home to Scotland's only 360 degree full dome film theatre. We have a variety of films showing throughout the year.",16.00,"https://media.dayoutwiththekids.co.uk/media/7983/32611-dynamic-earth-edinburgh-01.jpg?anchor=center&mode=crop&quality=75&width=1680&height=940",AccessibilityType.CHILDFRIENDLY,"Museum", TimeOfDayType.MORNING);
        attractionRepository.save(dynamicEarth);

        Attraction yatch = new Attraction("Royal Yacht Britannia","Ocean Drive, Ocean Terminal, Edinburgh EH6 6JJ, Scotland","Step aboard The Queen's former floating palace and experience this iconic 5 star attraction for yourself. Rated Scotland's Best Attraction for 12 years running and in TripAdvisor's UK Top 10 for the last 5 years, Britannia is one of the most famous ships in the world. Sailing a million miles on a thousand official visits, during 40 years in service, the Royal Yacht played host to glittering state banquets and official receptions, but was also home to the Royal Family and crew of 220 Royal Yachtsmen. Explore Britannia's highly accessible 5 decks with highlights including the elegant Royal Apartments, Crew's Quarters, Engine Room and stunning Royal Deck Tea Room. Highly accessible for wheelchairs and buggies.",16.50,"https://www.luxuryscotland.co.uk/news-offers/wp-content/uploads/2014/11/Royal-Yacht-Britannia-Edinburgh.jpg",AccessibilityType.WHEELCHAIRACCES,"Special Interest", TimeOfDayType.AFTERNOON);
        attractionRepository.save(yatch);

        Attraction botanic = new Attraction("Royal Botanic Garden Edinburgh","20 Inverleith Row, Edinburgh EH3 5LR, Scotland","The Botanics offers visitors peace and tranquility amongst its stunning 72 acres in Edinburgh city centre. Founded in 1670, the Garden is acknowledged to be one of the finest in the world.",00.00,"https://images-i.jpimedia.uk/imagefetch/c_fill,f_auto,h_1275,q_auto:eco,w_1700/https://inews.co.uk/wp-content/uploads/2018/11/Victorian-Temperate-Palm-House.jpg",AccessibilityType.DOGFRIENDLY,"Garden", TimeOfDayType.MORNING);
        attractionRepository.save(botanic);

        Attraction childhood = new Attraction("Museum of Childhood","42 High Street Edinburgh EH1 1TB, Scotland","Adults can indulge in a nostalgia-fest and children discover how their (not so) aged parents amused themselves as youngsters in a world before video games. There’s a wholesomeness to the construction kits and embroidery sets that once kept little fingers busy in a world that embraced the notion of Improving Sunday Toys, while train sets and dolls houses have enduring appeal. If the implacable stare of the massed ranks of a compendious collection of dolls becomes a little unnerving, there are dressing-up boxes, and regular organised activities to provide diversions.",00.00,"https://3.bp.blogspot.com/-Aa-lRYMoYV4/XA_-8MI3vwI/AAAAAAAAJMY/rjg9NtuSawkbs-USPsMvc9ot7vN0OGLrQCPcBGAYYCw/s1600/IMG_8654.JPG",AccessibilityType.CHILDFRIENDLY,"Museum", TimeOfDayType.MORNING);
        attractionRepository.save(childhood);

        Attraction knoxHouse = new Attraction("John Knox House Museum","43-45 High Street, Edinburgh EH1 1SR, Scotland","Dating back to 1470, and now incorporated into the Scottish Storytelling Centre, John Knox House is one of Scotland's greatest cultural treasures and is associated with the most dramatic events in Scotland's turbulent history. Enter this ornate 15th century building and discover the conflicts of the Royal Mile’s oldest house. Walk in the footsteps of the famous inhabitants and hear the drama of Scotland’s Reformation unfold in every room. Look out for the tricks and traps to fool intruders and hunt for the devil hiding in The Oak Room ceiling.",6.00,"https://ewh.org.uk/wp-content/uploads/2017/11/JOHN-KNOX-HOUSE-1-e1520265794948.jpg",AccessibilityType.CHILDFRIENDLY,"Museum", TimeOfDayType.MORNING);
        attractionRepository.save(knoxHouse);

        Attraction authursSeat = new Attraction("Arthur's Seat","Queen's Drive, Edinburgh EH8 8HG, Scotland","Arthur's Seat is one of four hill forts, dating from around 2,000 years ago. Situated within Holyrood Park, as well as it's rich cultural heritage, the park offers walks, solace, wildlife, volcanic geology and unparalleled vistas of the city from its many vantage points. The park has several Site of Special Scientific Interest (SSSI) designations due to its exceptional range of grassland habitats and its internationally important volcanic geology. Ranger service on site.",0.00,"https://s27363.pcdn.co/wp-content/uploads/2016/08/Climbing-Arthurs-Seat-1163x738.jpg.optimal.jpg", AccessibilityType.DOGFRIENDLY,"Garden", TimeOfDayType.MORNING);
        attractionRepository.save(authursSeat);

        Attraction maryKing = new Attraction("The Real Mary King's Close","2 Warriston's Close, Edinburgh EH1 1PG, Scotland","Hidden beneath the Royal Mile lies Edinburgh’s deepest secret: a warren of hidden ‘closes’ where real people lived, worked and died. For centuries they have lain forgotten and abandoned…until now. Visit Edinburgh's most famous Close, which makes Edinburgh's Hidden History unmissable.",16.50,"https://pbs.twimg.com/media/Ddy7L4XVMAASJxW.jpg",AccessibilityType.DIETARYREQUIREMENTS,"Museum", TimeOfDayType.EVENING);
        attractionRepository.save(maryKing);

        Attraction gilmertonCove = new Attraction("Gilmerton Cove","16A Drum Street, Edinburgh EH17 8QH, Scotland","Advance booking is essential. Enter one of Scotland's most curious heritage sites. An archeological mystery that has baffled investigators for over 300 years. Gilmerton Cove is a series of chambers and passageways lying hidden beneath the streets on the South side of Edinburgh. Join us on a guided tour and help us unravel the mysteries of this strange mysterious labyrinth. Please note this attraction is by appointment only, please call to book a slot",10.00,"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Gilmerton_Cove3a_%285719925456%29.jpg/1200px-Gilmerton_Cove3a_%285719925456%29.jpg\n",AccessibilityType.CHILDFRIENDLY,"Special Interest", TimeOfDayType.EVENING);
        attractionRepository.save(gilmertonCove);

        Attraction holyrood = new Attraction("Palace of Holyroodhouse","Canongate, Edinburgh EH8 8DX, Scotland","The Palace of Holyroodhouse is the official residence in Scotland of Her Majesty The Queen. Open throughout the year, the Palace of Holyroodhouse stands at the end of Edinburgh's Royal Mile. Explore the Palace's close associations with some of Scotland’s most well-known historic figures such as Mary, Queen of Scots and Bonnie Prince Charlie, and learn how today it is used by The Queen when carrying out official engagements in Scotland.",16.00,"https://www.virginexperiencedays.co.uk/content/img/product/large/visit-to-palace-of-27150249.jpg",AccessibilityType.WHEELCHAIRACCES,"Castle", TimeOfDayType.MORNING);
        attractionRepository.save(holyrood);

//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
//        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);
//
////        Attraction castle = new Attraction("castle","edinburgh","on a rock",15.00,"pic","historical", TimeOfDayType.MORNING);
//        attractionRepository.save(castle);

        Customer john = new Customer("John Jack","5 Lighting Road, Leeds",23,"01555 789080", "JJack@email.com");
        customerRepository.save(john);

        Customer layla = new Customer("Layla Raymond","6 Manor Close, York",45,"01555 678976", "PixieD@Gamil.com");
        customerRepository.save(layla);

        Customer harry = new Customer("Harry Hill","44 Stone Lane, London",21,"01270 234897", "HHill@hotmail.com");
        customerRepository.save(harry);

        Customer johnT = new Customer("John Thomas","23 Charley Lane, Glasgow",60,"0780156893", "LLC250@yahoo.com");
        customerRepository.save(johnT);

        Customer kyleJr = new Customer("Kyle Brown Jr","48/121 South Av, New York",12,"0", "0");
        customerRepository.save(kyleJr);

        Customer kyleSr = new Customer("Kyle Brown Sr","48/121 South Av, New York",32,"0998 1415678", "MrBr0wn124@hotmail.com");
        customerRepository.save(kyleSr);

        Customer shelly = new Customer("Shelly Brown","48/121 South Av, New York",34,"0", "MrsBr0wn700@hotmail.com");
        customerRepository.save(shelly);

        Customer sarah = new Customer("Sarah Ray","567 Nathan Road, Hong Kong",21,"01789 0092345", "SunRay@gmail.com");
        customerRepository.save(sarah);

        Booking booking1 = new Booking(TimeOfDayType.MORNING, authursSeat,sarah, DayType.MONDAY );
        bookingRepository.save(booking1);

    }


}
