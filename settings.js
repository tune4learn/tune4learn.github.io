/* =====================================================================
   TUNE4LEARN · SITE SETTINGS  (settings.js)
   To add a new song, edit ONLY this file.
   ---------------------------------------------------------------------
   VIDEOS: one line per YouTube video (newest first).
     id     = YouTube id (the part after watch?v=)
     t / s  = title / subtitle      e = emoji
     cat    = math | science | values | health | inclusion | literacy | art | seasonal
     age    = "prek k2" etc.        date = "Nov 20" for special days
     series = routines | math | songs | days   (kids page bands)
     new: 1 = shows a NEW badge
   PACKS: free printables on the Families & Teachers page.
     files: [{label, id}]  id = Google Drive file id (preview + download)
            [{label, url}] any other link
   ===================================================================== */
window.T4L = {
  CHANNEL: "https://www.youtube.com/@Tune4Learn",
  TPT: "https://www.teacherspayteachers.com/store/tune4learn",
  SPOTIFY: "https://open.spotify.com/artist/0RtYX9g5U4x5OBQBbZ7gUh",
  APPLE: "https://music.apple.com/us/artist/tune4learn/1781419056",
  INSTAGRAM: "https://www.instagram.com/Tune4Learn",
  TIKTOK: "https://www.tiktok.com/@tune4learn",

  /* Featured free TPT products (shown at the top of Free Printables). */
  FEATURED: [
    { t:"World Children's Day FREE Bundle", s:"97 pages · use it with the song My Day, My Rights, My Future!, without it, or both", e:"🌍", vid:"urN70lClFOI", url:"" }
  ],

  /* character voices: file n plays with line n of that character (kids.js LINES) */
  VOICES: {
    t4l: ['assets/voice/t4l_1.mp3'],
    timza: ['assets/voice/timza_1.mp3'],
    clacka: ['assets/voice/clacka_1.mp3'],
    labba: ['assets/voice/labba_1.mp3'],
    hugza: ['assets/voice/hugza_1.mp3'],
    jigla: ['assets/voice/jigla_1.mp3'],
    abza: ['assets/voice/abza_1.mp3'],
    amara: ['assets/voice/amara_1.mp3'],
    ella: ['assets/voice/ella_1.mp3'],
    kenji: ['assets/voice/kenji_1.mp3'],
    layla: ['assets/voice/layla_1.mp3'],
    leo: ['assets/voice/leo_1.mp3'],
    mateo: ['assets/voice/mateo_1.mp3'],
    nora: ['assets/voice/nora_1.mp3'],
    priya: ['assets/voice/priya_1.mp3'],
    omar: ['assets/voice/omar_1.mp3'],
  },

  VIDEOS: [
    {"id": "urN70lClFOI", "t": "My Day, My Rights, My Future!", "s": "World Children's Day · Nov 20", "e": "🌍", "cat": "values", "label": "Values", "age": "prek k2", "date": "Nov 20", "new": 1, "series": "days"},
    {"id": "L2FuS6K9W30", "t": "What's the Weather?", "s": "Look Outside Song · Weather & Seasons Circle Time", "e": "☀️", "cat": "values", "label": "Routines", "age": "prek k2", "new": 1, "series": "routines"},
    {"id": "hmRgj73ulZQ", "t": "Are You Here?", "s": "Morning Attendance Song · Count Your Friends", "e": "🙋", "cat": "values", "label": "Routines", "age": "prek k2", "new": 1, "series": "routines"},
    {"id": "SMF7CvnOzKg", "t": "How Are You Feeling?", "s": "Feelings Check-In Song · Calm Down Strategies", "e": "💛", "cat": "values", "label": "Routines", "age": "prek k2", "new": 1, "series": "routines"},
    {"id": "wkZ2irzG2u0", "t": "Fill the Basket!", "s": "K Math Series · Counting Objects to 10", "e": "🧺", "cat": "math", "label": "Math", "age": "prek k2", "series": "math"},
    {"id": "O3zYb6j0_VY", "t": "Line Them Up!", "s": "K Math Series · More, Fewer or the Same", "e": "📏", "cat": "math", "label": "Math", "age": "prek k2", "series": "math"},
    {"id": "dY6UXZ7PG10", "t": "Start at the Top!", "s": "K Math Series · How to Write Numbers 0 to 5", "e": "✏️", "cat": "math", "label": "Math", "age": "prek k2", "series": "math"},
    {"id": "WYG6CBQqsd4", "t": "Apple Numbers", "s": "K Math Series · Meet the Numbers 0 to 5", "e": "🍎", "cat": "math", "label": "Math", "age": "prek k2", "series": "math"},
    {"id": "vE7jYLY8VMY", "t": "Which One Is Greater?", "s": "K Math Series · Comparing Numbers to 10", "e": "⚖️", "cat": "math", "label": "Math", "age": "prek k2", "series": "math"},
    {"id": "6S-x4fILpag", "t": "Five and Some More", "s": "K Math Series · Numbers 6 to 10 with a Ten Frame", "e": "🔟", "cat": "math", "label": "Math", "age": "prek k2", "series": "math"},
    {"id": "QFW7NsOTZEA", "t": "One More, One Less!", "s": "K Math Series · One More & One Less to 10", "e": "➕", "cat": "math", "label": "Math", "age": "prek k2", "series": "math"},
    {"id": "vqUNHuVbxxU", "t": "One More, One Less! (Part 2)", "s": "K Math Series · One More & One Less to 10", "e": "➖", "cat": "math", "label": "Math", "age": "prek k2", "series": "math"},
    {"id": "f7D1059dvIQ", "t": "Global Handwashing Day Song", "s": "Global Handwashing Day · Oct 15", "e": "🧼", "cat": "health", "label": "Health", "age": "prek k2", "date": "Oct 15", "series": "days"},
    {"id": "H9uHCSzXslc", "t": "How Do You Say Hello?", "s": "Morning Greeting Song · Classroom Arrival Routine", "e": "👋", "cat": "values", "label": "Routines", "age": "prek k2", "new": 1, "series": "routines"},
    {"id": "dBlmpwgaYLs", "t": "Pumpkin Life Cycle Song", "s": "Water and Light · Science & Movement", "e": "🎃", "cat": "science", "label": "Science", "age": "prek k2", "series": "songs"},
    {"id": "vl4M6dH9gJM", "t": "Grandma, Grandpa, I Love You!", "s": "Grandparents Day Song", "e": "👵", "cat": "values", "label": "Values", "age": "prek k2", "series": "songs"},
    {"id": "WfCNdKO7QdA", "t": "Back to School Math Fun", "s": "Back to School Week · Math", "e": "🔢", "cat": "math", "label": "Math", "age": "prek k2", "series": "math"},
    {"id": "F0mTCTG1dBM", "t": "Goal! Soccer Champions", "s": "Soccer Celebration · Summer 2026", "e": "⚽", "cat": "seasonal", "label": "Sports", "age": "prek k2", "series": "songs"},
    {"id": "b0gZtSLmw4M", "t": "Mona Lisa, Why Are You Smiling?", "s": "World Art Day · Apr 15", "e": "🎨", "cat": "art", "label": "Art", "age": "prek k2 k3", "date": "Apr 15", "series": "days"},
    {"id": "Ym44okqehWM", "t": "Drip Drip Drip", "s": "World Day for Glaciers · Mar 21", "e": "🧊", "cat": "science", "label": "Science", "age": "prek k2", "date": "Mar 21", "series": "days"},
    {"id": "_gxOLYe7Kp8", "t": "Math and Hope", "s": "International Day of Mathematics · Mar 14", "e": "🔢", "cat": "math", "label": "Math", "age": "prek k2", "date": "Mar 14", "series": "math"},
    {"id": "a1KlR2jL4mY", "t": "The Engineers Dance", "s": "World Engineering Day · Mar 4", "e": "🛠️", "cat": "science", "label": "STEM", "age": "k2", "date": "Mar 4", "series": "days"},
    {"id": "-BRgbQrGc5s", "t": "My Day, My Rights!", "s": "World Children's Day · Nov 20", "e": "❤️", "cat": "values", "label": "Values", "age": "k2", "date": "Nov 20", "series": "days"},
    {"id": "smToX54V-lI", "t": "We All Move Together", "s": "Inclusion & Diversity", "e": "🤝", "cat": "inclusion", "label": "Inclusion", "age": "prek k2", "series": "songs"},
    {"id": "HPO3FSgBE9c", "t": "Wash Your Hands!", "s": "World Hand Hygiene Day · May 5", "e": "💚", "cat": "health", "label": "Health", "age": "prek k2", "date": "May 5", "series": "days"},
    {"id": "8xI5c50MrEA", "t": "Our Power, Our Planet", "s": "Earth Day Song · Apr 22", "e": "🌍", "cat": "science", "label": "Earth Day", "age": "prek k2", "date": "Apr 22", "series": "days"},
    {"id": "foJWDSjK9kA", "t": "Hello Earth Day", "s": "Earth Day · April 22", "e": "🌍", "cat": "science", "label": "Nature", "age": "prek k2", "date": "Apr 22", "series": "days"},
    {"id": "Nrp-bJxOs8U", "t": "Buzz Buzz Busy Bee!", "s": "World Bee Day · May 20", "e": "🐝", "cat": "science", "label": "Nature", "age": "prek k2", "date": "May 20", "series": "days"},
    {"id": "DItuuTXwd6s", "t": "Science Girls Can!", "s": "Women & Girls in Science · Feb 11", "e": "🔬", "cat": "science", "label": "Science", "age": "k2", "date": "Feb 11", "series": "days"},
    {"id": "mY6tfeNutLQ", "t": "Six Little Dots", "s": "World Braille Day · January 4", "e": "🖐️", "cat": "inclusion", "label": "Inclusion", "age": "prek k2", "date": "Jan 4", "series": "days"},
    {"id": "OltNBXnKv6Q", "t": "My New Year Wish", "s": "Happy New Year Song", "e": "✨", "cat": "seasonal", "label": "Seasonal", "age": "prek k2", "series": "songs"},
    {"id": "O3CcNF8pYss", "t": "Ready for Winter", "s": "Winter Song for Kids", "e": "❄️", "cat": "seasonal", "label": "Seasonal", "age": "prek k2", "series": "songs"},
    {"id": "-cs3DnlUlbw", "t": "Our Rocky Peak", "s": "International Mountain Day · Dec 11", "e": "⛰️", "cat": "science", "label": "Nature", "age": "prek k2", "date": "Dec 11", "series": "days"},
    {"id": "L4wkp_vJggg", "t": "Human Rights Day Song", "s": "Human Rights Day · Dec 10", "e": "🌍", "cat": "values", "label": "Values", "age": "k2", "date": "Dec 10", "series": "days"},
    {"id": "2iuzNiVTqto", "t": "No Bully!", "s": "International Day Against Bullying", "e": "🧡", "cat": "values", "label": "Values", "age": "prek k2", "series": "songs"},
    {"id": "pOHMN2IY9T8", "t": "World Coding Day Fun!", "s": "World Coding Day · Oct 29", "e": "💻", "cat": "science", "label": "STEM", "age": "k2", "date": "Oct 29", "series": "days"},
    {"id": "HPZ88JwLqVU", "t": "Halloween Pumpkin Dance!", "s": "Halloween · Oct 31", "e": "🎃", "cat": "seasonal", "label": "Seasonal", "age": "prek k2", "date": "Oct 31", "series": "days"},
    {"id": "L-k2IL-2_Ds", "t": "Hickory Dickory Rock!", "s": "Geodiversity Day · Oct 6", "e": "🪨", "cat": "science", "label": "Nature", "age": "prek", "date": "Oct 6", "series": "days"},
    {"id": "ir8wiwSBv3o", "t": "World Teachers' Day Dance!", "s": "World Teachers' Day · Oct 5", "e": "👩‍🏫", "cat": "values", "label": "Values", "age": "k2", "date": "Oct 5", "series": "days"},
    {"id": "YJot-PYxZbE", "t": "Day and Night Are Same!", "s": "Equinox · September 22", "e": "🌓", "cat": "science", "label": "Science", "age": "k2", "date": "Sep 22", "series": "days"},
    {"id": "f2YXfj56YII", "t": "Autumn Colors Dance!", "s": "Fall Colors Kids' Party", "e": "🍂", "cat": "seasonal", "label": "Seasonal", "age": "prek k2", "series": "songs"},
    {"id": "WiDmPsvnAA8", "t": "World Cleanup Day!", "s": "World Cleanup Day · Sep 20", "e": "🌿", "cat": "science", "label": "Nature", "age": "prek k2", "date": "Sep 20", "series": "days"},
    {"id": "3BJKJOod96Q", "t": "Back to School Dance!", "s": "Back to School", "e": "📚", "cat": "seasonal", "label": "Seasonal", "age": "prek", "series": "songs"},
    {"id": "76mujwgF98E", "t": "Waffle Wiggle!", "s": "Waffle Day · March 25", "e": "🧇", "cat": "seasonal", "label": "Fun", "age": "prek", "date": "Mar 25", "series": "days"},
    {"id": "lz4U_7Ot548", "t": "Kids Disco Dance Party!", "s": "June & July 2025 Hits", "e": "🫧", "cat": "seasonal", "label": "Dance", "age": "prek k2", "series": "songs"},
    {"id": "c8ztV2r547s", "t": "Dance with Papa!", "s": "Father's Day Dance", "e": "👨‍👧", "cat": "values", "label": "Values", "age": "prek", "date": "Jun 21", "series": "days"},
    {"id": "D1Miijxgc6o", "t": "My Mother My Sunshine!", "s": "Mother's Day Song", "e": "💖", "cat": "values", "label": "Values", "age": "prek", "series": "songs"},
    {"id": "VcIOGzFAaQI", "t": "Animated April Kids Songs", "s": "April 2025 Full Collection", "e": "🌸", "cat": "seasonal", "label": "Seasonal", "age": "prek k2", "series": "songs"},
    {"id": "zxBJ54lD04Q", "t": "Spring Boogie Dance", "s": "Spring Song for Kids", "e": "🌱", "cat": "seasonal", "label": "Seasonal", "age": "prek k2", "series": "songs"},
    {"id": "b8O_dVbvI0w", "t": "Lily's Health Glow", "s": "World Health Day · April 7", "e": "💚", "cat": "health", "label": "Health", "age": "prek k2", "date": "Apr 7", "series": "days"},
    {"id": "ERDCuvvseD8", "t": "My Very Excellent Mother", "s": "Space Flight Day · Apr 12", "e": "🚀", "cat": "science", "label": "Science", "age": "prek k2", "date": "Apr 12", "series": "days"},
    {"id": "BwUGbZgWr2Y", "t": "Blue Light Sammy", "s": "World Autism Awareness Day · April 2", "e": "💙", "cat": "inclusion", "label": "Inclusion", "age": "prek k2", "date": "Apr 2", "series": "days"},
    {"id": "djJQRka-Qbw", "t": "Read Across America Day", "s": "Celebrate Books & Reading!", "e": "📖", "cat": "literacy", "label": "Literacy", "age": "prek k2", "series": "songs"},
    {"id": "cTWsZngya9Q", "t": "Snowman Parade!", "s": "Fun Winter Song for Kids", "e": "⛄", "cat": "seasonal", "label": "Seasonal", "age": "prek", "series": "songs"},
    {"id": "jt3qAG7ds1A", "t": "Chubby Little Snowman", "s": "Winter Fun Song", "e": "☃️", "cat": "seasonal", "label": "Seasonal", "age": "prek", "series": "songs"},
    {"id": "F09Kz6SDhpI", "t": "Say Hello Dance!", "s": "World Hello Day · Nov 21", "e": "👋", "cat": "values", "label": "Values", "age": "prek k2", "date": "Nov 21", "series": "days"},
    {"id": "RzXV94EhO4g", "t": "International Girls Day Power!", "s": "International Day of the Girl Child · Oct 11", "e": "👧", "cat": "inclusion", "label": "Inclusion", "age": "prek k2", "date": "Oct 11", "series": "days"}
  ],

  PACKS: [
    {"t": "What's the Weather?", "e": "☀️", "cat": "values", "label": "SEL", "age": "Pre-K · K–2", "s": "Classroom Routine · Look Outside Song · Weather & Seasons Circle Time", "vid": "L2FuS6K9W30"},
    {"t": "Are You Here?", "e": "🙋", "cat": "values", "label": "SEL", "age": "Pre-K · K–2", "s": "Classroom Routine · Morning Attendance Song · Count Your Friends", "vid": "hmRgj73ulZQ"},
    {"t": "How Are You Feeling?", "e": "💛", "cat": "values", "label": "SEL", "age": "Pre-K · K–2", "s": "Classroom Routine · Feelings Check-In Song · Calm Down Strategies", "vid": "SMF7CvnOzKg"},
    {"t": "Fill the Basket!", "e": "🧺", "cat": "math", "label": "Math", "age": "K", "s": "Kindergarten Math Series · Counting Objects to 10", "vid": "wkZ2irzG2u0"},
    {"t": "Line Them Up!", "e": "📏", "cat": "math", "label": "Math", "age": "K", "s": "Kindergarten Math Series · More, Fewer or the Same", "vid": "O3zYb6j0_VY"},
    {"t": "Start at the Top!", "e": "✏️", "cat": "math", "label": "Math", "age": "K", "s": "Kindergarten Math Series · How to Write Numbers 0 to 5", "vid": "dY6UXZ7PG10"},
    {"t": "Apple Numbers", "e": "🍎", "cat": "math", "label": "Math", "age": "K", "s": "Kindergarten Math Series · Meet the Numbers 0 to 5", "vid": "WYG6CBQqsd4"},
    {"t": "Which One Is Greater?", "e": "⚖️", "cat": "math", "label": "Math", "age": "K", "s": "Kindergarten Math Series · Comparing Numbers to 10", "vid": "vE7jYLY8VMY"},
    {"t": "Five and Some More", "e": "🔟", "cat": "math", "label": "Math", "age": "K", "s": "Kindergarten Math Series · Numbers 6 to 10 with a Ten Frame", "vid": "6S-x4fILpag"},
    {"t": "One More, One Less!", "e": "➕", "cat": "math", "label": "Math", "age": "K", "s": "Kindergarten Math Series · One More & One Less to 10", "vid": "QFW7NsOTZEA"},
    {"t": "One More, One Less! (Part 2)", "e": "➖", "cat": "math", "label": "Math", "age": "K", "s": "Kindergarten Math Series · One More & One Less to 10", "vid": "vqUNHuVbxxU"},
    {"t": "Global Handwashing Day Song", "e": "🧼", "cat": "science", "label": "Health", "age": "Pre-K · K–2", "s": "Global Handwashing Day · Oct 15", "vid": "f7D1059dvIQ"},
    {"t": "How Do You Say Hello? – Morning Greeting Song", "e": "👋", "cat": "values", "label": "SEL", "age": "Pre-K · K–2", "s": "Classroom Arrival Routine", "vid": "H9uHCSzXslc"},
    {"t": "Pumpkin Life Cycle Song", "e": "🎃", "cat": "science", "label": "Science", "age": "Pre-K · K–2", "s": "Water and Light · Science & Movement", "vid": "dBlmpwgaYLs"},
    {"t": "Grandma, Grandpa, I Love You!", "e": "👵", "cat": "values", "label": "SEL", "age": "Pre-K · K–2", "s": "Grandparents Day Song", "vid": "vl4M6dH9gJM"},
    {"t": "Back to School Math Fun", "e": "🔢", "cat": "math", "label": "Math", "age": "Pre-K · K–2", "s": "Back to School Week · EN + ES", "vid": "WfCNdKO7QdA", "files": [{"label": "Activity Book (EN)", "id": "1ZGWB6s3sAZXVLl2vFB0NcW8KKFUChC4W"}, {"label": "Actividades (ES)", "id": "1syp_zyCCQAZeE9gQsbSVwbpZMQVXSmub"}]},
    {"t": "Goal! Soccer Champions", "e": "⚽", "cat": "seasonal", "label": "Sports", "age": "Pre-K · K–2", "s": "Soccer Celebration · Summer 2026", "vid": "F0mTCTG1dBM", "files": [{"label": "Activity Book", "id": "19ltXbNdWL522K7yL2PdgTe9g7PKhhKLj"}]},
    {"t": "Wash Your Hands! – World Hand Hygiene Day", "e": "💚", "cat": "science", "label": "Health", "age": "Pre-K · K–2", "s": "World Hand Hygiene Day · May 5", "vid": "HPO3FSgBE9c", "files": [{"label": "Activity Book", "id": "17h0XaPKVvAbivHz1u8yXqD3nrQU-BMc7"}]},
    {"t": "Buzz Buzz Busy Bee! – World Bee Day", "e": "🐝", "cat": "science", "label": "Nature", "age": "Pre-K · K–2", "s": "World Bee Day · May 20", "vid": "Nrp-bJxOs8U", "files": [{"label": "Activity Book", "id": "1zilnKzQXWoMyAm8F0c7BX-5isMZ2Q1U4"}]},
    {"t": "Our Power, Our Planet – Earth Day Song", "e": "🌍", "cat": "science", "label": "Earth Day", "age": "Pre-K · K–2", "s": "Earth Day Song · Apr 22", "vid": "8xI5c50MrEA", "files": [{"label": "Activity Pack", "id": "18DOA0vT_mx1QTT2JDLr2CsMMNbEgxFNV"}]},
    {"t": "Hello Earth Day – Intro Video", "e": "🌎", "cat": "science", "label": "Earth Day", "age": "Pre-K · K–2", "s": "Earth Day Intro · Apr 22", "vid": "foJWDSjK9kA", "files": [{"label": "Activity Pack", "id": "18DOA0vT_mx1QTT2JDLr2CsMMNbEgxFNV"}]},
    {"t": "My Very Excellent Mother – Planet Song", "e": "🚀", "cat": "science", "label": "Science", "age": "Pre-K · K–2", "s": "Space Flight Day · Apr 12", "vid": "ERDCuvvseD8", "files": [{"label": "Activity Book", "id": "1HDB4mO8JlW7Tv9-54IjAvtzTFfwBqu7J"}, {"label": "Teacher Guide", "id": "1-1YNHCr679kNza9tB0OIYw8HNHJSh6ts"}]},
    {"t": "Mona Lisa, Why Are You Smiling?", "e": "🎨", "cat": "art", "label": "Art", "age": "Pre-K · K–2 · K–3", "s": "World Art Day · Apr 15", "vid": "b0gZtSLmw4M", "files": [{"label": "Activity Book", "id": "1RXNTPNE-sT3Ilfy9Qr9WHTqB8LWE1BDk"}, {"label": "Teacher Guide", "id": "1CSa1bbKZ1uwKCF3Dp9ibIjge77H5Y6OT"}]},
    {"t": "Blue Light Sammy", "e": "💙", "cat": "inclusion", "label": "Inclusion", "age": "Pre-K · K–2", "s": "World Autism Awareness Day · Apr 2", "vid": "BwUGbZgWr2Y", "files": [{"label": "Activity Book", "id": "14nekopHCBWGw5KbjyRGgrhDHAfoLcsQ4"}, {"label": "Teacher Guide", "id": "1LoXVhYsDl6iZkhnUj-WyRcVH7BMTueWd"}]},
    {"t": "Drip Drip Drip", "e": "🧊", "cat": "science", "label": "Science", "age": "Pre-K · K–2", "s": "World Day for Glaciers · Mar 21", "vid": "Ym44okqehWM", "files": [{"label": "Activity Pack", "id": "1ZaNrlcDenzl-YcnxAabb1d9kBSkZc7pl"}]},
    {"t": "International Day of Mathematics", "e": "🔢", "cat": "math", "label": "Math", "age": "Pre-K · K–2", "s": "Pi Day · Mar 14", "vid": "_gxOLYe7Kp8", "files": [{"label": "Activity Pack", "id": "14l-fbSbc72FXutlVgsnOfJiOdHRjsftj"}]},
    {"t": "World Engineering Day", "e": "🛠️", "cat": "science", "label": "STEM", "age": "K–2", "s": "Mar 4", "vid": "a1KlR2jL4mY", "files": [{"label": "Activity Pack", "id": "11_Ocijbk2kkGP4CkJPAkEPJMsS3JjGDY"}]},
    {"t": "My Day, My Rights!", "e": "🌍", "cat": "values", "label": "Values", "age": "K–2", "s": "World Children's Day · Nov 20", "vid": "-BRgbQrGc5s", "files": [{"label": "Activity Pack", "id": "1WnD_jycHthUL8hZOXtpcMHrImPjarmYY"}]},
    {"t": "We All Move Together", "e": "🌍", "cat": "inclusion", "label": "Inclusion", "age": "Pre-K · K–2", "s": "International Day of Persons with Disabilities · Dec 3", "vid": "smToX54V-lI"},
    {"t": "Say Hello Dance", "e": "👋", "cat": "values", "label": "SEL", "age": "Pre-K", "s": "World Hello Day · Nov 21", "files": [{"label": "Activity Pack", "id": "1GAuhdKkQwWktWOD-nmS7MVw165buFihA"}]},
    {"t": "Friends All Day", "e": "💛", "cat": "values", "label": "SEL", "age": "Pre-K", "s": "Friendship & SEL", "files": [{"label": "Activity Pack", "id": "1xFIdhsf9GxGJTBFLybGJG_bwei3cYHlr"}]},
    {"t": "Science for Peace Coloring Book", "e": "🕊️", "cat": "science", "label": "Science", "age": "Pre-K · K–2", "s": "Science & Peace", "vid": "0W_RQYIT_tA", "files": [{"label": "Activity Pack", "id": "1is4e2QvtEyArqX6_jpGt04km7ye-C76a"}]},
    {"t": "No Bullying Day", "e": "🛡️", "cat": "values", "label": "SEL", "age": "K–2", "s": "Anti-Bullying Awareness", "vid": "2iuzNiVTqto", "files": [{"label": "Activity Pack", "id": "1-5_RpuUSf0V1P8MuwcAuPLgUQfAu_f7n"}]},
    {"t": "World Coding Day Coloring Book", "e": "💻", "cat": "science", "label": "STEM", "age": "K–2", "s": "World Coding Day · Mar 7", "vid": "pOHMN2IY9T8", "files": [{"label": "Activity Pack", "id": "1OgvpjBT_m6hAEb5-YpyIUlTwRi2qme_Z"}]},
    {"t": "International Day of the Girl Child", "e": "👧", "cat": "values", "label": "Inclusion", "age": "Pre-K · K–2", "s": "Oct 11", "vid": "RzXV94EhO4g", "files": [{"label": "Activity Pack", "id": "1JSgRFxO6V_CLs4s3pboKEU2t78vvFy2w"}]},
    {"t": "World Space Week Coloring Book", "e": "🚀", "cat": "science", "label": "Science", "age": "Pre-K · K–2", "s": "Oct 4–10", "vid": "-cs3DnlUlbw", "files": [{"label": "Activity Pack", "id": "1jRvP71TVVYCh58okl63XCWCy5rkmQEaf"}]},
    {"t": "Hickory Dickory Rock Coloring Book", "e": "🐭", "cat": "literacy", "label": "Literacy", "age": "Pre-K", "s": "Nursery Rhyme Fun", "vid": "L-k2IL-2_Ds", "files": [{"label": "Activity Pack", "id": "1xUuNSO9HS8L9M2nJELDWB1NhUjdjPlC_"}]},
    {"t": "World Smile Day", "e": "😊", "cat": "values", "label": "SEL", "age": "Pre-K", "s": "First Friday of Oct", "vid": "lz4U_7Ot548", "files": [{"label": "Activity Pack", "id": "1HMBPqzGy8LRjLSImGt8hvN8NcgqHWJuK"}]},
    {"t": "Nature's Colors Dance Coloring Book", "e": "🍂", "cat": "science", "label": "Nature", "age": "Pre-K", "s": "Seasons & Nature", "vid": "f2YXfj56YII", "files": [{"label": "Activity Pack", "id": "1gcdijGuFuRDTHD4oVrooHdOvzJxjk22e"}]},
    {"t": "Day and Night Are Same", "e": "🌓", "cat": "science", "label": "Science", "age": "K–2", "s": "Equinox Science", "vid": "YJot-PYxZbE", "files": [{"label": "Activity Pack", "id": "1wa-2sEL-lP_EoKT2IA5paZ9dn4zC7fhI"}]},
    {"t": "Autumn Coloring Book", "e": "🍁", "cat": "seasonal", "label": "Seasonal", "age": "Pre-K", "s": "Seasonal · Fall", "vid": "f2YXfj56YII", "files": [{"label": "Activity Pack", "id": "1diyfrt-4TrK6_xm12mMS6l-ikLuWBx_8"}]},
    {"t": "World Cleanup Day", "e": "🌿", "cat": "science", "label": "Environment", "age": "Pre-K · K–2", "s": "Sep 20", "vid": "WiDmPsvnAA8", "files": [{"label": "Activity Pack", "id": "12zRl7aaoLdAHSwTcivN2Tp5ZHSxzGAOr"}]},
    {"t": "Back to School Coloring Book", "e": "🎒", "cat": "seasonal", "label": "Seasonal", "age": "Pre-K", "s": "Back to School", "vid": "3BJKJOod96Q", "files": [{"label": "Activity Pack", "id": "1_zX5zlOtb7mrqu98x7szVYqZM4-5vilC"}]},
    {"t": "Waffle Day", "e": "🧇", "cat": "seasonal", "label": "Fun", "age": "Pre-K", "s": "Mar 25 · Fun & Food", "vid": "76mujwgF98E", "files": [{"label": "Activity Pack", "id": "1zM_mWkwqQQwXadtQgnAPj3b3U4nttA01"}]}
  ]
};
