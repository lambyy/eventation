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


Event.create({organizer_id: u1.id, title: "Lantern Festival", location: "Salt Lake City",
start_date: "2017-09-30T21:00", end_date: "2017-09-30T23:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506301997/pexels-photo-431722_fd1vpv.jpg",
description:"Lantern festival. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel pretium metus. Fusce sit amet tempor leo. Aenean porttitor molestie ante, sit amet imperdiet velit commodo at. Vivamus a diam interdum, cursus lorem et, ullamcorper augue. Vestibulum sit amet mi eros. Suspendisse eget mi nec velit rutrum mattis in a velit. Praesent mattis hendrerit velit, nec consequat nulla mollis non. Pellentesque dictum aliquam condimentum. Vestibulum iaculis posuere lectus, eu auctor turpis mattis non. Aliquam congue consectetur enim, ac porttitor lorem accumsan in. Praesent non tempus metus. Morbi pellentesque ex sed neque pellentesque placerat. Nulla ac maximus risus, at maximus lorem. Nulla vehicula ultricies lectus, ut interdum mi euismod eu. Donec sed aliquam nunc.
Aenean mattis pellentesque nisi, eget porta arcu rhoncus eget. In et est ipsum. Vivamus egestas molestie quam, nec semper nunc fermentum vel. Morbi eu nisl vel ligula condimentum semper id vel mauris. Fusce feugiat accumsan massa ac fringilla. In accumsan accumsan nisi, quis gravida mi tempus in. Pellentesque id sapien ac est tincidunt malesuada. Donec ac elit non eros porttitor vulputate quis at ex. Aenean et quam non massa pulvinar accumsan. Cras nec dolor sem.",
category: "Holiday", event_type: "Festival"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u1.id, title: "ABC Halloween Live Concert", location: "San Francisco",
start_date: "2017-10-31T21:00", end_date: "2017-11-01T02:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506301994/pexels-photo-196652_dfkf95.jpg",
description:"Live concert performance on Halloween by ABC! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel pretium metus. Fusce sit amet tempor leo. Aenean porttitor molestie ante, sit amet imperdiet velit commodo at. Vivamus a diam interdum, cursus lorem et, ullamcorper augue. Vestibulum sit amet mi eros. Suspendisse eget mi nec velit rutrum mattis in a velit. Praesent mattis hendrerit velit, nec consequat nulla mollis non. Pellentesque dictum aliquam condimentum. Vestibulum iaculis posuere lectus, eu auctor turpis mattis non. Aliquam congue consectetur enim, ac porttitor lorem accumsan in. Praesent non tempus metus. Morbi pellentesque ex sed neque pellentesque placerat. Nulla ac maximus risus, at maximus lorem. Nulla vehicula ultricies lectus, ut interdum mi euismod eu. Donec sed aliquam nunc.
Aenean mattis pellentesque nisi, eget porta arcu rhoncus eget. In et est ipsum. Vivamus egestas molestie quam, nec semper nunc fermentum vel. Morbi eu nisl vel ligula condimentum semper id vel mauris. Fusce feugiat accumsan massa ac fringilla. In accumsan accumsan nisi, quis gravida mi tempus in. Pellentesque id sapien ac est tincidunt malesuada. Donec ac elit non eros porttitor vulputate quis at ex. Aenean et quam non massa pulvinar accumsan. Cras nec dolor sem.",
category: "Music", event_type: "Concert"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u2.id, title: "Japanese Tea Ceremony Class", location: "Toyko",
start_date: "2017-10-25T10:00", end_date: "2017-10-25T14:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506301999/pexels-photo-461428_x5sjyy.jpg",
description:"Japanese Tea Ceremony Class. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel pretium metus. Fusce sit amet tempor leo. Aenean porttitor molestie ante, sit amet imperdiet velit commodo at. Vivamus a diam interdum, cursus lorem et, ullamcorper augue. Vestibulum sit amet mi eros. Suspendisse eget mi nec velit rutrum mattis in a velit. Praesent mattis hendrerit velit, nec consequat nulla mollis non. Pellentesque dictum aliquam condimentum. Vestibulum iaculis posuere lectus, eu auctor turpis mattis non. Aliquam congue consectetur enim, ac porttitor lorem accumsan in. Nulla ac maximus risus, at maximus lorem. Nulla vehicula ultricies lectus, ut interdum mi euismod eu. Donec sed aliquam nunc.
Vivamus egestas molestie quam, nec semper nunc fermentum vel. Morbi eu nisl vel ligula condimentum semper id vel mauris. Fusce feugiat accumsan massa ac fringilla. In accumsan accumsan nisi, quis gravida mi tempus in. Pellentesque id sapien ac est tincidunt malesuada. Donec ac elit non eros porttitor vulputate quis at ex. Aenean et quam non massa pulvinar accumsan. Cras nec dolor sem.",
category: "Food&Drink", event_type: "Class"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u2.id, title: "First Class Cooking: Introductory Class", location: "Chicago",
start_date: "2017-11-19T18:00", end_date: "2017-11-19T21:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506302339/pexels-photo-129523_ecimym.jpg",
description:"Learn to be a first class chef with this introductory class. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel pretium metus. Fusce sit amet tempor leo. Aenean porttitor molestie ante, sit amet imperdiet velit commodo at. Vivamus a diam interdum, cursus lorem et, ullamcorper augue. Vestibulum sit amet mi eros. Suspendisse eget mi nec velit rutrum mattis in a velit. Praesent mattis hendrerit velit, nec consequat nulla mollis non. Pellentesque dictum aliquam condimentum. Vestibulum iaculis posuere lectus, eu auctor turpis mattis non. Aliquam congue consectetur enim, ac porttitor lorem accumsan in. Praesent non tempus metus. Morbi pellentesque ex sed neque pellentesque placerat. Nulla ac maximus risus, at maximus lorem. Nulla vehicula ultricies lectus, ut interdum mi euismod eu. Donec sed aliquam nunc.
Aenean mattis pellentesque nisi, eget porta arcu rhoncus eget. In et est ipsum. Vivamus egestas molestie quam, nec semper nunc fermentum vel. Morbi eu nisl vel ligula condimentum semper id vel mauris. Fusce feugiat accumsan massa ac fringilla. In accumsan accumsan nisi, quis gravida mi tempus in. Pellentesque id sapien ac est tincidunt malesuada. Donec ac elit non eros porttitor vulputate quis at ex. Aenean et quam non massa pulvinar accumsan. Cras nec dolor sem.
Donec at tortor eget lorem feugiat dignissim tincidunt vel risus. Nam ante metus, varius eget lacinia et, gravida consequat sem. Aenean molestie justo sit amet tortor condimentum, in eleifend arcu consectetur. Fusce et imperdiet massa. Mauris efficitur lectus a augue mollis, vitae tincidunt nisi sodales. Nulla facilisi. Vivamus est est, finibus eget tempus non, euismod non sapien.",
category: "Food&Drink", event_type: "Class"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u3.id, title: "Color Me Wine", location: "New York",
start_date: "2017-10-12T18:00", end_date: "2017-10-12T21:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506301993/pexels-photo-66636_wom3s2.jpg",
description:"Enjoy fancy wine and discussion with your fellow wine lovers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel pretium metus. Fusce sit amet tempor leo. Aenean porttitor molestie ante, sit amet imperdiet velit commodo at. Vivamus a diam interdum, cursus lorem et, ullamcorper augue. Vestibulum sit amet mi eros. Suspendisse eget mi nec velit rutrum mattis in a velit. Praesent mattis hendrerit velit, nec consequat nulla mollis non. Pellentesque dictum aliquam condimentum. Vestibulum iaculis posuere lectus, eu auctor turpis mattis non. Aliquam congue consectetur enim, ac porttitor lorem accumsan in. Praesent non tempus metus. Morbi pellentesque ex sed neque pellentesque placerat. Nulla ac maximus risus, at maximus lorem. Nulla vehicula ultricies lectus, ut interdum mi euismod eu. Donec sed aliquam nunc.
Aenean mattis pellentesque nisi, eget porta arcu rhoncus eget. In et est ipsum. Vivamus egestas molestie quam, nec semper nunc fermentum vel. Morbi eu nisl vel ligula condimentum semper id vel mauris. Fusce feugiat accumsan massa ac fringilla. In accumsan accumsan nisi, quis gravida mi tempus in. Pellentesque id sapien ac est tincidunt malesuada. Donec ac elit non eros porttitor vulputate quis at ex. Aenean et quam non massa pulvinar accumsan. Cras nec dolor sem.",
category: "Food&Drink", event_type: "Other"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u3.id, title: "Innovative Business", location: "Seattle",
start_date: "2017-11-02T07:00", end_date: "2017-11-04T17:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506302039/business-innovation-money-icon-40218_ucuzcr.jpg",
description:"Learn better business. How to be innovative and succeed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel pretium metus. Fusce sit amet tempor leo. Aenean porttitor molestie ante, sit amet imperdiet velit commodo at. Vivamus a diam interdum, cursus lorem et, ullamcorper augue. Vestibulum sit amet mi eros. Suspendisse eget mi nec velit rutrum mattis in a velit. Praesent mattis hendrerit velit, nec consequat nulla mollis non. Pellentesque dictum aliquam condimentum. Vestibulum iaculis posuere lectus, eu auctor turpis mattis non. Aliquam congue consectetur enim, ac porttitor lorem accumsan in. Praesent non tempus metus. Morbi pellentesque ex sed neque pellentesque placerat. Nulla ac maximus risus, at maximus lorem. Nulla vehicula ultricies lectus, ut interdum mi euismod eu. Donec sed aliquam nunc.
Aenean mattis pellentesque nisi, eget porta arcu rhoncus eget. In et est ipsum. Vivamus egestas molestie quam, nec semper nunc fermentum vel. Morbi eu nisl vel ligula condimentum semper id vel mauris. Fusce feugiat accumsan massa ac fringilla. In accumsan accumsan nisi, quis gravida mi tempus in. Pellentesque id sapien ac est tincidunt malesuada. Donec ac elit non eros porttitor vulputate quis at ex. Aenean et quam non massa pulvinar accumsan. Cras nec dolor sem.
Donec at tortor eget lorem feugiat dignissim tincidunt vel risus. Nam ante metus, varius eget lacinia et, gravida consequat sem. Aenean molestie justo sit amet tortor condimentum, in eleifend arcu consectetur. Fusce et imperdiet massa. Mauris efficitur lectus a augue mollis, vitae tincidunt nisi sodales. Nulla facilisi. Vivamus est est, finibus eget tempus non, euismod non sapien.",
category: "Business", event_type: "Convention"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u3.id, title: "Photography: 101", location: "Los Angeles",
start_date: "2017-12-19T14:00", end_date: "2017-12-19T17:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506301994/pexels-photo-297648_j98bwn.jpg",
description:"Want to take awesome photographs? Then this is the class for you!
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel pretium metus. Fusce sit amet tempor leo. Aenean porttitor molestie ante, sit amet imperdiet velit commodo at. Vivamus a diam interdum, cursus lorem et, ullamcorper augue. Vestibulum sit amet mi eros. Suspendisse eget mi nec velit rutrum mattis in a velit. Praesent mattis hendrerit velit, nec consequat nulla mollis non. Pellentesque dictum aliquam condimentum. Vestibulum iaculis posuere lectus, eu auctor turpis mattis non. Aliquam congue consectetur enim, ac porttitor lorem accumsan in. Praesent non tempus metus. Morbi pellentesque ex sed neque pellentesque placerat. Nulla ac maximus risus, at maximus lorem. Nulla vehicula ultricies lectus, ut interdum mi euismod eu. Donec sed aliquam nunc.
Aenean mattis pellentesque nisi, eget porta arcu rhoncus eget. In et est ipsum. Vivamus egestas molestie quam, nec semper nunc fermentum vel. Morbi eu nisl vel ligula condimentum semper id vel mauris. Fusce feugiat accumsan massa ac fringilla. In accumsan accumsan nisi, quis gravida mi tempus in. Pellentesque id sapien ac est tincidunt malesuada. Donec ac elit non eros porttitor vulputate quis at ex. Aenean et quam non massa pulvinar accumsan. Cras nec dolor sem.",
category: "Arts", event_type: "Class"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u2.id, title: "Relaxation Sensation: Beginning Yoga", location: "San Francisco",
start_date: "2017-10-11T14:00", end_date: "2017-10-11T16:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506301997/pexels-photo-374632_o2srbi.jpg",
description:"Stressed? Come check out Relaxation Sensations beginning yoga course. For a limit time, the first course is free.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel pretium metus. Fusce sit amet tempor leo. Aenean porttitor molestie ante, sit amet imperdiet velit commodo at. Vivamus a diam interdum, cursus lorem et, ullamcorper augue. Vestibulum sit amet mi eros. Suspendisse eget mi nec velit rutrum mattis in a velit. Praesent mattis hendrerit velit, nec consequat nulla mollis non. Pellentesque dictum aliquam condimentum. Vestibulum iaculis posuere lectus, eu auctor turpis mattis non. Aliquam congue consectetur enim, ac porttitor lorem accumsan in. Praesent non tempus metus. Morbi pellentesque ex sed neque pellentesque placerat. Nulla ac maximus risus, at maximus lorem. Nulla vehicula ultricies lectus, ut interdum mi euismod eu. Donec sed aliquam nunc.
Aenean mattis pellentesque nisi, eget porta arcu rhoncus eget. In et est ipsum. Vivamus egestas molestie quam, nec semper nunc fermentum vel. Morbi eu nisl vel ligula condimentum semper id vel mauris. Fusce feugiat accumsan massa ac fringilla. In accumsan accumsan nisi, quis gravida mi tempus in. Pellentesque id sapien ac est tincidunt malesuada. Donec ac elit non eros porttitor vulputate quis at ex. Aenean et quam non massa pulvinar accumsan. Cras nec dolor sem.",
category: "Sports&Fitness", event_type: "Class"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u4.id, title: "2018 NYE Extravaganza", location: "Las Vegas",
start_date: "2017-12-31T21:00", end_date: "201-01-01T02:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506301993/lights-party-dancing-music_mzf7nv.jpg",
description:"Come celebrate the new year with the best of the best! DJ Catz, Huski3sInTheHouse, and more!
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel pretium metus. Fusce sit amet tempor leo. Aenean porttitor molestie ante, sit amet imperdiet velit commodo at. Vivamus a diam interdum, cursus lorem et, ullamcorper augue. Vestibulum sit amet mi eros. Suspendisse eget mi nec velit rutrum mattis in a velit. Praesent mattis hendrerit velit, nec consequat nulla mollis non. Pellentesque dictum aliquam condimentum. Vestibulum iaculis posuere lectus, eu auctor turpis mattis non.",
category: "Music", event_type: "Party"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u2.id, title: "Kathlene & Trevor's Wedding", location: "Orange County",
start_date: "2018-07-26T14:00", end_date: "2017-07-26T20:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506309662/lwift8rihzvot9b8fcnq.jpg",
description:"We're getting married! Please RSVP to our wedding.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel pretium metus. Fusce sit amet tempor leo. Aenean porttitor molestie ante, sit amet imperdiet velit commodo at. Vivamus a diam interdum, cursus lorem et, ullamcorper augue. Vestibulum sit amet mi eros. Suspendisse eget mi nec velit rutrum mattis in a velit. Praesent mattis hendrerit velit, nec consequat nulla mollis non. Pellentesque dictum aliquam condimentum. Vestibulum iaculis posuere lectus, eu auctor turpis mattis non.",
category: "Other", event_type: "Party"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u5.id, title: "2018 Nike Women's Marathon", location: "San Francisco",
start_date: "2018-01-11T07:00", end_date: "2018-10-11T16:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506302039/relay-race-competition-stadium-sport_ulsmjq.jpg",
description:"Join us this year for Nike's annual Women's Marathon!
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel pretium metus. Fusce sit amet tempor leo. Aenean porttitor molestie ante, sit amet imperdiet velit commodo at. Vivamus a diam interdum, cursus lorem et, ullamcorper augue. Vestibulum sit amet mi eros. Suspendisse eget mi nec velit rutrum mattis in a velit. Praesent mattis hendrerit velit, nec consequat nulla mollis non. Pellentesque dictum aliquam condimentum. Vestibulum iaculis posuere lectus, eu auctor turpis mattis non.",
category: "Sports&Fitness", event_type: "Other"})

# --------------------------------------------------------------------------------------------------------------------

Event.create({organizer_id: u5.id, title: "Nintendo Expo 2018", location: "San Diego",
start_date: "2018-03-11T07:00", end_date: "2017-03-14T17:00",
image_url: "http://res.cloudinary.com/drdaiyfdt/image/upload/v1506302338/pexels-photo-442576_tgfytz.jpg",
description:"Check out the newest games from Nintendo. Get the first look at the Nintendo's0 4DSLite!
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel pretium metus. Fusce sit amet tempor leo. Aenean porttitor molestie ante, sit amet imperdiet velit commodo at. Vivamus a diam interdum, cursus lorem et, ullamcorper augue. Vestibulum sit amet mi eros. Suspendisse eget mi nec velit rutrum mattis in a velit. Praesent mattis hendrerit velit, nec consequat nulla mollis non. Pellentesque dictum aliquam condimentum. Vestibulum iaculis posuere lectus, eu auctor turpis mattis non.",
category: "Other", event_type: "Convention"})
