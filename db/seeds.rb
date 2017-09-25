# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create({first_name: "Guest", last_name:"User", email:"guest@example.com", password:"123456"})
u2 = User.create({first_name: "Betty", last_name:"Lam", email:"betty@example.com", password:"123456"})
u3 = User.create({first_name: "Nixon", last_name:"Yiu", email:"nixon@example.com", password:"123456"})
u4 = User.create({first_name: "David", last_name:"Jang", email:"david@example.com", password:"123456"})
u5 = User.create({first_name: "Rebekah", last_name:"Liu", email:"rebekah@example.com", password:"123456"})
User.create({first_name: "Tommy", last_name:"Kilmer", email:"tommy@example.com", password:"123456"})
User.create({first_name: "Brian", last_name:"Sohn", email:"brian@example.com", password:"123456"})
User.create({first_name: "Jerry", last_name:"Lau", email:"jerry@example.com", password:"123456"})
User.create({first_name: "Adrian", last_name:"Rivero", email:"adrian@example.com", password:"123456"})
User.create({first_name: "Carmen", last_name:"To", email:"carmen@example.com", password:"123456"})


Event.create({organizer_id: u1.id, title: "Chinese Lantern Festival", location: "New York State Fairgrounds",
start_date: "2017-09-30T21:00", end_date: "2017-09-30T23:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506301997/pexels-photo-431722_fd1vpv.jpg",
description:"Come celebrate the arrival of spring at New York State's annual Chinese Lantern festival.
Stroll down the streets of downtown and see the colorful, traditional Chinese lantern displays. Take part in creative courses to make your own lantern to display at home.
See performances featuring Chinese acrobats, traditional lion and dragon dancers, and more during the evening show, (weather permitting).
Enjoy delicious and authentic Chinese confections such as egg tarts, dragon beard candy and tang yuan from various vendors.",
category: "Holiday", event_type: "Festival"})
#description inspired by www.lanternfestnys.com

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u1.id, title: "ABC: Halloween Live Concert SF", location: "San Francisco",
start_date: "2017-10-31T21:00", end_date: "2017-11-01T02:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506301994/pexels-photo-196652_dfkf95.jpg",
description:"Live concert performance on Halloween by up&coming group ABC!
Join us for the launch day of ABC's 2017 comeback nationwide tour. Tickets go on sale now! More details to come...
Opening: Maroon Kitty
Sound by: Mouse Over Obsession
Free admission before 9:00 PM, $10 cover charge",
category: "Music", event_type: "Concert"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u2.id, title: "Japanese Tea Ceremony Class", location: "Toyko",
start_date: "2017-10-25T10:00", end_date: "2017-10-25T14:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506301999/pexels-photo-461428_x5sjyy.jpg",
description:"Japanese Tea Ceremony Class.
 The Japanese tea ceremony is a cultural activity dating back to the 9th century. The tea ceremony, also called Chanoyu or Sado in Japanese, is way of preparing and presenting matcha, powdered green tea. It is one of the three classical Japanese arts of refinement.
 Join us for weekly classes in the Japanese traditional of Chanoyu. Enjoy excellent tea prepared by our resident sensei and learn to host your own tea ceremony
 For more information, please contact learn-more@chanoyu.com",
 category: "Food&Drink", event_type: "Class"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u2.id, title: "First Class Cooking: Introductory Class", location: "Chicago",
start_date: "2017-11-19T18:00", end_date: "2017-11-19T21:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506302339/pexels-photo-129523_ecimym.jpg",
description:"Learn to be a first class chef with this introductory class.
Impress your family and friends with delicious and flavourful culinary dishes from around the world. Learn to present your food to appeal to the eyes and stomach of many.
For a limited time, take the introductory lesson to our First Class Cooking course for free.",
category: "Food&Drink", event_type: "Class"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u3.id, title: "Color Me Wine", location: "New York",
start_date: "2017-10-12T18:00", end_date: "2017-10-12T21:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506301993/pexels-photo-66636_wom3s2.jpg",
description:"Color Me Wine.
Do you like wine? Do you like art? Enjoy fancy wine and painting with your fellow wine and art lovers at our Wine Night Event!
Learn to paint beautiful portraits during our three hour workshop where we will be reconstructing painting by famous wine lovers. We will teach you brush techniques, walk through painting step by step and all while enjoy fine wine from Napa Valley.
All sales go towards donations to fund local school arts programs.",
category: "Arts", event_type: "Other"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u3.id, title: "Innovative Business", location: "Seattle",
start_date: "2017-11-02T07:00", end_date: "2017-11-04T17:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506302039/business-innovation-money-icon-40218_ucuzcr.jpg",
description:"Learn better business.
How can your business become more successful? Join us for a three day convention exploring the modern business model and ways to be competitive in today's growing economy. Learn innovative techniques from leading industry speakers and participate in workshops to plan your business approach.
Panelist including Bill Gates, Elon Musk, Sarah Monroe, and more!",
category: "Business", event_type: "Convention"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u3.id, title: "Photography: 101", location: "Los Angeles",
start_date: "2017-12-19T14:00", end_date: "2017-12-19T17:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506301994/pexels-photo-297648_j98bwn.jpg",
description:"Want to take awesome photographs? Have a digit camera but don't know how to use it? Then this is the class for you!
Become a better digital photograph during our three hour crash course. Learn the basic starting from exposure, aperture, ISO and shutter speed. Find out what all those knobs and dials on your DSLR do, what settings to use in any lighting condition and more.
No prior experience or camera equipment needed to attend.",
category: "Arts", event_type: "Class"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u2.id, title: "Relaxation Sensation: Beginning Yoga", location: "San Francisco",
start_date: "2017-10-11T14:00", end_date: "2017-10-11T16:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506301997/pexels-photo-374632_o2srbi.jpg",
description:"Stressed? Come check out Relaxation Sensation's beginning yoga course.
Relaxation Sensation is the premiere yogo studio in the San Francisco Bay Area with top yoga instructors from around the globe and top of the line facility and equipment. Our mission is to bring peace and personal growth to every student through our highest quality yoga programs for people of all ages.
For a limit time, try the first course for free.
For more information, please contact firstcourse@relaxationsensation.com",
category: "Sports&Fitness", event_type: "Class"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u4.id, title: "2018 NYE Extravaganza", location: "Las Vegas",
start_date: "2017-12-31T21:00", end_date: "201-01-01T02:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506301993/lights-party-dancing-music_mzf7nv.jpg",
description:"2018 New Years Eve Extravaganza! Come celebrate the coming of the new year with the best of the best!
Lineup: DJ Catz, Huski3sInTheHouse, UnicornAreReal and more!
Sound by: TopOfTheLine
Tickets on sale now! Doors open at 9:00 PM. Early bird admission until 10:00 PM.",
category: "Music", event_type: "Party"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u2.id, title: "Kathlene & Trevor's Wedding", location: "Orange County",
start_date: "2018-07-26T14:00", end_date: "2017-07-26T20:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506309662/lwift8rihzvot9b8fcnq.jpg",
description:"Friends and family, we're getting married!
Thank you all for the love and support you've given us all these years. It has been a long engagement, but we have finally set a date! Please join us on July 26th, 2018 at Arlington House, Orange County to celebrate our union.
Doors open at 1:30 PM, ceremony begins at 2:00 PM.
Location: Arlington House, Orange County
Reception: Grand Harbor Seafood
Please RSVP by May 17th.
Registry: www.kathleneandtrevor@weddingregistry.com",
category: "Other", event_type: "Party"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u5.id, title: "2018 Nike Women's Marathon", location: "San Francisco",
start_date: "2018-01-11T07:00", end_date: "2018-10-11T16:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506302039/relay-race-competition-stadium-sport_ulsmjq.jpg",
description:"Join us this year for Nike's annual Women's Marathon!
Unite for the world's largest women's marathon series! Show your passion and release your inner athlete at the annual race held in San Francisco, featuring exclusive Nike race gear and equipment.

[Entry Level]
College/University Registration | 12:00, Dec 1 - 23:59, Dec 15
Public Registration | 12:00 Dec 16 - 23:59, Jan 1
*College/University Registration only for eligible full-time students with valid student ID's.
For enquiry, please contact womens2018@nike-marathon.com",
category: "Sports&Fitness", event_type: "Other"})

# --------------------------------------------------------------------------------------------------------------------
#
Event.create({organizer_id: u5.id, title: "Nintendo Expo 2018", location: "San Diego",
start_date: "2018-03-11T07:00", end_date: "2017-03-14T17:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506302338/pexels-photo-442576_tgfytz.jpg",
description:"Nintendo Expo 2018
Check out the newest games from Nintendo. Get the first look at Nintendo's new 4DSLite scheduled to be released this summer!
Featuring new games from our most beloved franchises like Super Mario Bros, Pokemon and Legend of Zelda!
Come join the fun with awesome food, stellar prizes and fantastic performances!
Tickets on sale starting Dec 1st, 2017",
category: "Other", event_type: "Convention"})
