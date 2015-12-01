if (Meteor.isClient) {
 // This code is executed on the client only
 Accounts.ui.config({
   passwordSignupFields: "USERNAME_ONLY"
 });
  // This code is executed on the client only
  Meteor.startup(function () {
    var appData = {
      users: [
        {
          name: "Aaron",
          url: "http://aaronstrick.com",
          podcasts: [
            {
              title: "99 Percent Invisible",
              blurb: "A tiny radio show about design, architecture & the 99% invisible activity that shapes our world."
            }
          ]
        },
        {
          name: "Jacob",
          url: "http://fuckcoding.com",
          podcasts: [
            {
              title: "Reply All",
              blurb: "A show about the internet, hosted by PJ Vogt and Alex Goldman."
            },
            {
              title: "Radiolab",
              blurb: "Weaving stories and science into sound and music-rich documentaries."
            }
          ]
        },
        {
          name: "Ben",
          url: "http://ben.com",
          podcasts: [
            {
              title: "Guardian Football Weekly",
              blurb: "A weekly stroll through world football."
            },
            {
              title: "Radiolab",
              blurb: "Weaving stories and science into sound and music-rich documentaries."
            },
            {
              title: "Radiolab",
              blurb: "Weaving stories and science into sound and music-rich documentaries."
            },
            {
              title: "Radiolab",
              blurb: "Weaving stories and science into sound and music-rich documentaries."
            },
            {
              title: "Radiolab",
              blurb: "Weaving stories and science into sound and music-rich documentaries."
            },
            {
              title: "Radiolab",
              blurb: "Weaving stories and science into sound and music-rich documentaries."
            },
            {
              title: "Radiolab",
              blurb: "Weaving stories and science into sound and music-rich documentaries."
            }
          ]
        }
      ]
    }
    var podcasts = {
      shows: [
        {
            "name": "99% Invisible",
            "description": "A Tiny Radio Show about Design with Roman Mars",
            "url_web": "http://99percentinvisible.org",
            "url_rss": "http://feeds.99percentinvisible.org/99percentinvisible",
            "url_itunes": "https://itunes.apple.com/us/podcast/id394775318",
            "image": "http://cdn.99percentinvisible.org/wp-content/uploads/powerpress/99invisible-logo-1400.jpg"
        },
        {
            "name": "Accidental Tech Podcast",
            "description": "Three nerds discussing tech and loosely related matters. An offshoot from Neutral, our car show.",
            "url_web": "http://atp.fm/",
            "url_rss": "http://atp.fm/episodes?format=rss",
            "url_itunes": "https://itunes.apple.com/us/podcast/accidental-tech-podcast/id617416468",
            "image": "http://static.squarespace.com/static/513abd71e4b0fe58c655c105/t/513ac9b6e4b00efcff53af07/1362807225394/1500w/ATP-logo.jpg"
        },
        {
            "name": "Amplified",
            "description": "Amplified is an award winning talk show about Apple, Mac, iPad, iPhone, iOS, guitars, amps, music, and recording. Get ready to rock. Hosted by Jim Dalrymple & Dan Benjamin.",
            "url_web": "http://5by5.tv/amplified",
            "url_rss": "http://feeds.5by5.tv/amplified",
            "url_itunes": "http://itunes.apple.com/podcast/amplified/id517325342?partnerId=30&siteID=GfpxbBXXpXE-y3gfJGyOQcSr2tOpkzD12A&uo=8&at=11laDR",
            "image": "http://icebox.5by5.tv/images/broadcasts/35/cover.jpg"
        },
        {
            "name": "Binnall of America: Audio",
            "description": "Paranormal conversations with the world's leading researchers of the strange and unusual. ",
            "url_web": "http://www.cyberears.com/index.php/Show/audio/5887",
            "url_rss": "http://www.binnallofamerica.com/podcast.xml",
            "url_itunes": "https://itunes.apple.com/us/podcast/binnall-of-america-audio/id279245126",
            "image": "http://www.cyberears.com/podcast_images/2169.jpg"
        },
        {
            "name": "Breaking Good - Breaking Bad Podcast",
            "description": "The officially unofficial podcast for AMC's Breaking Bad.  News, Episode Recaps and Analysis, your feedback and more, all about the Breaking Bad TV series.",
            "url_web": "http://baldmove.com/category/breaking-good-a-breaking-bad-podcast/",
            "url_rss": "http://feeds.feedburner.com/BreakingGood",
            "url_itunes": "https://itunes.apple.com/us/podcast/breaking-good-breaking-bad/id448641515",
            "image": "http://baldmove.com/wp-content/uploads/2011/07/269153_239835479372010_230309390324619_796258_8178839_n.jpg"
        },
        {
            "name": "Buddha at the Gas Pump » Podcast Feed",
            "description": "",
            "url_web": "http://batgap.com",
            "url_rss": "http://batgap.com/feed/podcast",
            "url_itunes": "https://itunes.apple.com/us/podcast/buddha-at-gas-pump-podcast/id602578156",
            "image": "http://batgap.com/Buddha-Gas-Pump.jpg"
        },
        {
            "name": "Common Sense with Dan Carlin",
            "description": "Loud, fast-talking and deceptively funny, this politically-independent \"forward-thinking pragmatist\" looks at the events shaping our world through a uniquely American lens. It's smarter than you think, and faster than you expect.",
            "url_web": "http://www.dancarlin.com",
            "url_rss": "http://feeds.feedburner.com/dancarlin/commonsense?format=xml",
            "url_itunes": "https://itunes.apple.com/us/podcast/common-sense-with-dan-carlin/id155974141",
            "image": "http://www.dancarlin.com/graphics/CS_DC_iTunes.jpg"
        },
        {
            "name": "Creative Briefs",
            "description": "",
            "url_web": "http://pittsburgh.aiga.org/creative-briefs/",
            "url_rss": "http://feeds.feedburner.com/CreativeBriefs",
            "url_itunes": "https://itunes.apple.com/us/podcast/pittsburgh/id561813086",
            "image": "http://pittsburgh.aiga.org/wp-content/uploads/powerpress/cb_podcast-631.jpg"
        },
        {
            "name": "Dan Carlin's Hardcore History",
            "description": "Was Alexander the Great as bad a person as Hitler? What was the greatest army of all time? Which U.S. President was the worst? Hardcore History discusses the issues and questions history fans love.",
            "url_web": "http://www.dancarlin.com",
            "url_rss": "http://feeds.feedburner.com/dancarlin/history?format=xml",
            "url_itunes": "https://itunes.apple.com/us/podcast/dan-carlins-hardcore-history/id173001861",
            "image": "http://www.dancarlin.com/graphics/DC_HH_iTunes.jpg"
        },
        {
            "name": "Debug",
            "description": "Debug is a conversational interview show about developing software and services, primarily for iPhone, iPad, Mac, and gaming. Hosted by Guy English and Rene Ritchie, it's all the great talk you get at the bar after the conference, wrapped up in convenient podcast form. Pull up a chair, hit play, join us.",
            "url_web": "http://www.imore.com/debug/",
            "url_rss": "http://feeds.feedburner.com/debugshow",
            "url_itunes": "https://itunes.apple.com/us/podcast/debug/id578812394",
            "image": "http://www.mobilenations.com/broadcasting/podcast_debug_1200.jpg"
        },
        {
            "name": "Decode DC",
            "description": "Cut through the language and procedure and focus on what matters.",
            "url_web": "http://muleradio.net/decodedc",
            "url_rss": "http://feeds.muleradio.net/decodedc",
            "url_itunes": "http://itunes.apple.com/us/podcast/id562274909",
            "image": "http://www.muleradio.net/images/shows/decodedc/itunes-1400.jpg"
        },
        {
            "name": "Developing Perspective",
            "description": "Developing Perspective is a podcast discussing the news of note in iOS Development, Apple and the like.  Hosted by David Smith, an independent iOS developer. Never longer than 15 minutes.",
            "url_web": "http://developingperspective.com",
            "url_rss": "http://developingperspective.com/feed/podcast/",
            "url_itunes": "https://itunes.apple.com/us/podcast/id452019300",
            "image": "http://developingperspective.s3.amazonaws.com/logo1400.png"
        },
        {
            "name": "Execute Podcast",
            "description": "Execute podcast features people who are executing on ideas immediately when inspired rather than following the normal rules.",
            "url_web": "http://theindustry.cc/category/podcast/",
            "url_rss": "http://feeds.feedburner.com/ExecutePodcast",
            "url_itunes": "https://itunes.apple.com/us/podcast/execute-podcast/id632829677",
            "image": "http://executeventures.co/podcast/execute-podcast-art.jpg"
        },
        {
            "name": "Expanding Mind",
            "description": "Progressiveradionetwork.com presents \"Expanding Mind\" with Erik Davis. He explores the culture of consciousness: magic, spirituality, psychology, technology.",
            "url_web": "http://expandingmind.podbean.com",
            "url_rss": "http://expandingmind.podbean.com/feed/",
            "url_itunes": "https://itunes.apple.com/us/podcast/expanding-mind/id365770501",
            "image": ""
        },
        {
            "name": "Foundation (HD MP4 - 30fps)",
            "description": "Foundation showcases interviews with influential founders, entrepreneurs and business leaders in the tech community.",
            "url_web": "http://revision3.com/foundation",
            "url_rss": "http://revision3.com/foundation/feed/mp4-hd30",
            "url_itunes": "https://itunes.apple.com/us/podcast/foundation-hd-mp4-30fps/id412887856",
            "image": "http://videos.revision3.com/revision3/images/shows/foundation/foundation.jpg"
        },
        {
            "name": "Freakonomics Radio",
            "description": "In their books \"Freakonomics\" and \"SuperFreakonomics,\" Steven D. Levitt and Stephen J. Dubner explore \"the hidden side of everything,\" with stories about cheating schoolteachers, self-dealing real-estate agents, and crack-selling mama’s boys. The Freakonomics Radio podcast, hosted by Dubner, carries on that tradition with weekly episodes. Prepare to be enlightened, engaged, perhaps enraged, and definitely surprised.",
            "url_web": "http://www.wnyc.org/articles/freakonomics-podcast/",
            "url_rss": "http://feeds.feedburner.com/freakonomicsradio",
            "url_itunes": "https://itunes.apple.com/podcast/freakonomics-radio/id354668519",
            "image": "http://media.wnyc.org/media/photologue/photos/freakonomics.jpg"
        },
        {
            "name": "Grantland Pop Culture",
            "description": "Grantland Pop Culture is a varied collection of podcasts hosted by Grantland writers and friends of the site.",
            "url_web": "http://sports.espn.go.com/espnradio/podcast/index",
            "url_rss": "http://sports.espn.go.com/espnradio/podcast/feeds/itunes/podCast?id=9179868",
            "url_itunes": "https://itunes.apple.com/us/podcast/grantland-pop-culture/id642537435",
            "image": "http://a.espncdn.com/i/espnradio/stations/espn/podcasts/grantland_popCulture_1400.jpg"
        },
        {
            "name": "hidden experience audio",
            "description": "Audio interviews, conversations and musings from the hidden experience blog. The focus is on UFO abduction phenomenon, and it’s deeply personal impact on real people.",
            "url_web": "http://hiddenexperience.podbean.com",
            "url_rss": "http://hiddenexperience.podbean.com/feed/",
            "url_itunes": "https://itunes.apple.com/us/podcast/hidden-experience-audio/id400825605",
            "image": "http://img.podbean.com/itunes-logo/284744/LOGOorange1200.jpg"
        },
        {
            "name": "In Beta",
            "description": "In Beta is a talk show about tech culture, making open source software, and how mobile, social, and web apps are changing the world. Hosted by Gina Trapani & Kevin Purdy.",
            "url_web": "http://5by5.tv/inbeta",
            "url_rss": "http://feeds.5by5.tv/inbeta",
            "url_itunes": "http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewPodcast?id=533636963&uo=8&at=11laDR",
            "image": "http://icebox.5by5.tv/images/broadcasts/37/cover.jpg"
        },
        {
            "name": "Radiolab from WNYC",
            "description": "Radiolab is a show about curiosity. Where sound illuminates ideas, and  the boundaries blur between science, philosophy, and human experience.\r\nRadiolab is heard around the country on more than 450 NPR stations. Check your local station for airtimes.\r\nEmbed the Radiolab widget on your blog or website.\r\n\r\nRadiolab is supported, in part, by the National Science Foundation and the Alfred P. Sloan Foundation, enhancing public understanding of science and technology in the modern world. More information about Sloan at www.sloan.org.\r\nAll press inquiries may be directed to Jennifer Houlihan Roussel at (646) 829-4497.",
            "url_web": "http://www.radiolab.org/series/podcasts/",
            "url_rss": "http://feeds.wnyc.org/radiolab",
            "url_itunes": "https://itunes.apple.com/podcast/radiolab-from-wnyc/id152249110?mt=2",
            "image": "http://parmenides.wnyc.org/media/photologue/photos/radiolab____.jpg"
        },
        {
            "name": "Jim Harold's Campfire",
            "description": "Share your spooky paranormal stories with Jim Harold, Host of The Paranormal Podcast",
            "url_web": "http://jimharold.com",
            "url_rss": "http://jimharold.com/?feed=jimharoldscampfire",
            "url_itunes": "https://itunes.apple.com/podcast/jim-harolds-campfire/id310656913?mt=2",
            "image": "http://jimharold.com/wp-content/uploads/2013/08/campfire_1400.jpg"
        },
      //#######
        {
            "name": "Let's Make Mistakes",
            "description": "Mike and Jessie talk about design, with a lot of tangents along the way.",
            "url_web": "http://muleradio.net/mistakes",
            "url_rss": "http://feeds.muleradio.net/mistakes",
            "url_itunes": "http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewPodcast?id=432550963",
            "image": "http://www.muleradio.net/images/shows/mistakes/itunes-1400.jpg"
        },
        {
            "name": "London Real",
            "description": "It´s About The Journey",
            "url_web": "http://www.londonreal.tv/",
            "url_rss": "http://www.londonreal.tv/feed/podcast/",
            "url_itunes": "https://itunes.apple.com/gb/podcast/london-real/id474722933",
            "image": "http://www.londonreal.tv/wp-content/uploads/powerpress/Brian_London_Real_Logo2-iTunes.jpg"
        },
        {
            "name": "MacBreak Weekly (MP3)",
            "description": "Get the latest Mac news and views from the top journalists covering Apple today. Another great show from the TWiT Netcast Network.\r\nRecords live every Tuesday at 11:00am PT/2:00pm ET.\r\n\r\n",
            "url_web": "http://twit.tv/mbw",
            "url_rss": "http://feeds.twit.tv/mbw",
            "url_itunes": "https://itunes.apple.com/us/podcast/macbreak-weekly/id179237749?ign-mpt=uo%3D4",
            "image": "http://feeds.twit.tv/podcasts/coverart/mbw1400audio.jpg"
        },
        {
            "name": "Midwest Real",
            "description": "Midwest Real is an artist collective located in Milwaukee, Wisconsin comprised of two independent writers and two independent musicians. The collective was founded in 2012 with the overarching goal of breathing depth into what Mike, Dana, Hansem, and Shane - the collective's members - concluded was lacking in their surroundings.",
            "url_web": "http://midwestreal.libsyn.com",
            "url_rss": "http://midwestreal.libsyn.com/rss",
            "url_itunes": "https://itunes.apple.com/us/podcast/midwest-real/id597282997",
            "image": "http://assets.libsyn.com/content/5329771.jpg"
        },
        {
            "name": "Mysterious Universe",
            "description": "Blog and Podcast specializing in offbeat news",
            "url_web": "http://mysteriousuniverse.org",
            "url_rss": "http://mysteriousuniverse.org/feed/podcast",
            "url_itunes": "https://itunes.apple.com/us/podcast/mysterious-universe/id329937558",
            "image": "http://mysteriousuniverse.org/wp-content/uploads/2012/05/MU_1400.jpg"
        },
        {
            "name": "NextMarket",
            "description": "The NextMarket Podcast features Michael Wolf's conversations with technology and media makers, hackers & breakers.",
            "url_web": "http://nextmarket.co",
            "url_rss": "http://feeds.feedburner.com/soundcloud/JEcj",
            "url_itunes": "https://itunes.apple.com/us/podcast/nextmarket/id579455690",
            "image": "http://i1.sndcdn.com/avatars-000028084647-xnmd4m-original.png?3eddc42"
        },
        {
            "name": "No Agenda",
            "description": "A show about politics with No Agenda, by Adam Curry and John C. Dvorak",
            "url_web": "http://noagendashow.com",
            "url_rss": "http://feed.nashownotes.com/rss.xml",
            "url_itunes": "https://itunes.apple.com/us/podcast/no-agenda/id269169796",
            "image": "http://psstatic.podshow.com/images/shows/15412/shows/med/noagenda.jpg?r=1234724943"
        },
        {
            "name": "NPR: All Songs Considered Podcast",
            "description": "Host Bob Boilen spins new music from emerging bands and musical icons.",
            "url_web": "http://www.npr.org/allsongs",
            "url_rss": "http://www.npr.org/rss/podcast.php?id=510019",
            "url_itunes": "https://itunes.apple.com/us/podcast/npr-all-songs-considered-podcast/id79687345",
            "image": "http://media.npr.org/images/podcasts/primary/icon_510019.jpg"
        },
        {
            "name": "NPR Programs: Fresh Air Podcast",
            "description": "Fresh Air from WHYY, the Peabody Award-winning weekday magazine of contemporary arts and issues, is one of public radio's most popular programs. Hosted by Terry Gross, the show features intimate conversations with today's biggest luminaries.",
            "url_web": "http://freshair.npr.org",
            "url_rss": "http://www.npr.org/rss/podcast.php?id=13",
            "url_itunes": "https://itunes.apple.com/us/podcast/npr-programs-fresh-air-podcast/id214089682",
            "image": "http://media.npr.org/images/podcasts/2013/primary/fresh_air.png"
        },
        {
            "name": "Occult of Personality",
            "description": "Peering Behind the Veil",
            "url_web": "http://occultofpersonality.net",
            "url_rss": "http://www.occultofpersonality.net/podcast",
            "url_itunes": "https://itunes.apple.com/us/podcast/occult-personality-podcast/id565667141",
            "image": "http://www.occultofpersonality.net/wp-content/uploads/double-headed-eagle.jpg"
        },
        {
            "name": "ESPN: PTI",
            "description": "Tony Kornheiser and Michael Wilbon face off on the day's hot topics.",
            "url_web": "http://sports.espn.go.com/espnradio/podcast/index",
            "url_rss": "http://espn.go.com/espnradio/feeds/rss/podcast.xml?id=2406595",
            "url_itunes": "https://itunes.apple.com/us/podcast/espn-pti/id147232181",
            "image": "http://a.espncdn.com/i/espnradio/stations/espn/podcasts/pti_1400.jpg"
        },
        {
            "name": "Quit!",
            "description": "Ever quit a job? Ever redefined yourself within one? Ever started something and won big ... or failed? QUIT! is a call-in show helping people sort out their lives, reevaluate their options, kick their crummy jobs, and start something awesome.\r\n\r\nCall in live at 512-518-5714 or leave a voicemail at 512-222-8141. Hosted by Dan Benjamin.",
            "url_web": "http://5by5.tv/quit",
            "url_rss": "http://feeds.5by5.tv/quit",
            "url_itunes": "https://itunes.apple.com/us/podcast/quit!/id581627214",
            "image": "http://icebox.5by5.tv/images/broadcasts/44/cover.jpg"
        },
        {
            "name": "Radio Misterioso",
            "description": "In-depth conversations on the paranormal alternating with weird music. Live on Sundays 8-10 PM PST @ killradio.org",
            "url_web": "http://radiomisterioso.com",
            "url_rss": "http://feeds.feedburner.com/RadioMisterioso",
            "url_itunes": "https://itunes.apple.com/us/podcast/radio-misterioso/id444424848",
            "image": "http://www.radiomisterioso.com/images/criswell.jpg"
        },
        {
            "name": "ShopTalk",
            "description": "A live show about front end web design.",
            "url_web": "http://shoptalkshow.com",
            "url_rss": "http://shoptalkshow.com/feed/podcast/",
            "url_itunes": "https://itunes.apple.com/us/podcast/shoptalk/id493890455",
            "image": "http://stscdn.paravel.netdna-cdn.com/wp-content/uploads/2012/08/shoptalk_album.jpeg"
        },
        {
            "name": "Skeptiko - Science at the Tipping Point",
            "description": "Explore controversial science with leading researchers and their critics... the leading source for intelligent skeptic-versus-believer debate... ",
            "url_web": "http://www.skeptiko.com",
            "url_rss": "http://www.skeptiko.com/feed/",
            "url_itunes": "https://itunes.apple.com/podcast/skeptiko-science-at-tipping/id210217437?mt=2",
            "image": "http://www.skeptiko.com/gfx/itunes300.jpg"
        },
        {
            "name": "The /Filmcast",
            "description": "A Film / Movie Podcast for the Masses",
            "url_web": "http://slashfilm.com/filmcast",
            "url_rss": "http://feeds.feedburner.com/filmcast",
            "url_itunes": "https://itunes.apple.com/podcast/the-filmcast/id281400220?mt=2",
            "image": "http://www.slashfilm.com/slashfilmpodcastblack.jpg"
        },
        {
            "name": "Tangentially Speaking with Dr. Christopher Ryan",
            "description": "Ever wanted to hang with a dominatrix, comedian, famous health guru, or Italian prince? Here's your chance. Tangentially Speaking is dedicated to the idea that good conversation is organic, revelatory, and free to go down unexpected paths. ",
            "url_web": "http://drchrisryanpodcast.castmate.fm",
            "url_rss": "http://www.castmate.fm/feed.php?u=drchrisryanpodcast",
            "url_itunes": "https://itunes.apple.com/us/podcast/tangentially-speaking-dr./id566908883",
            "image": "http://www.castmate.fm/itunes_images/drchrisryanpodcast1370459601.jpg"
        },
        {
            "name": "The Adam Carolla Show",
            "description": "Welcome to the Adam Carolla Podcast! The new home for the rantings and ravings of Adam Carolla, with Bald Bryan on sound effects and and Alison Rosen on news.\r\n\r\nCheck it out Adam hangs out with some his pals, like: Larry Miller, David Allen Grier, Dr. Drew Pinksy, Dana Gould, Doug Benson, and many, many more.",
            "url_web": "http://www.adamcarolla.com",
            "url_rss": "http://theadamcarollashow.libsyn.com/rss",
            "url_itunes": "https://itunes.apple.com/us/podcast/the-adam-carolla-show/id306390087",
            "image": "http://assets.libsyn.com/content/4666139.jpg"
        },
        {
            "name": "The Bryan Callen Show",
            "description": "The Bryan Callen Show is a one-on-one, one-hour interview, featuring an array of different personalities, from celebrities to authors, producers, film makers, directors and other accomplished individuals. We discuss a variety of topics, focusing on perspective and experience. The announcer voice is RenaMarie Villano. This show is brought to you by The Network Studios. A Mike Casentini production.",
            "url_web": "http://bryancallen.com",
            "url_rss": "http://feeds.feedburner.com/TheBryanCallenShow",
            "url_itunes": "https://itunes.apple.com/us/podcast/the-bryan-callen-show/id552184090",
            "image": "http://bryancallen.com/podcast-assets/bcs-1400.jpg"
        },
        {
            "name": "ESPN: The B.S. Report with Bill Simmons",
            "description": "Grantland's Bill Simmons discusses sports and pop culture with celebrities and media personalities.",
            "url_web": "http://sports.espn.go.com/espnradio/podcast/index",
            "url_rss": "http://espn.go.com/espnradio/feeds/rss/podcast.xml?id=2864045",
            "url_itunes": "https://itunes.apple.com/podcast/espn-the-b-s-report-bill-simmons/id254098743?ign-mpt=uo%3D2",
            "image": "http://a.espncdn.com/i/espnradio/stations/espn/podcasts/bs_report_1400_stamp.jpg"
        },
        {
            "name": "The Businessology Show",
            "description": "A podcast about the business of design, and the design of business.",
            "url_web": "http://www.spreaker.com/show/the_businessology_show",
            "url_rss": "http://www.spreaker.com/show/635488/episodes/feed",
            "url_itunes": "https://itunes.apple.com/us/podcast/the-businessology-show/id595500099",
            "image": "http://d1bm3dmew779uf.cloudfront.net/big/5e34c6d390726426fe719c3e7e1489ac.jpg"
        },
        {
            "name": "The Critical Path",
            "description": "Critical Path is a talk show contemplating the causality of success and failure in mobile computing. Using Apple as a lens to look at both telecom and traditional computing markets, we try to understand what it means to be great. Hosted by Horace Dediu & Moisés Chiullan.",
            "url_web": "http://5by5.tv/criticalpath",
            "url_rss": "http://feeds.5by5.tv/criticalpath",
            "url_itunes": "http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewPodcast?id=442816705&partnerId=30&siteID=GfpxbBXXpXE-y3gfJGyOQcSr2tOpkzD12A&uo=8&at=11laDR",
            "image": "http://icebox.5by5.tv/images/broadcasts/24/cover.jpg"
        },
        {
            "name": "David Seaman Hour! (FULL)",
            "description": "The full version, including all new interviews. Follow @d_seaman on Twitter.",
            "url_web": "http://davidseaman.libsyn.com",
            "url_rss": "http://davidseaman.libsyn.com/rss",
            "url_itunes": "https://itunes.apple.com/us/podcast/david-seaman-hour!-full/id561245422",
            "image": "http://assets.libsyn.com/content/5765898.jpg"
        },
        {
            "name": "The DisinfoCast With Matt Staggs",
            "description": "Interviews from the authors and filmmakers associated with The Disinformation Company, and a roundup of the most fascinating stories on www.disinfo.com.",
            "url_web": "http://www.disinfo.com/podcasts/",
            "url_rss": "http://disinfo.libsyn.com/rss",
            "url_itunes": "https://itunes.apple.com/ie/podcast/disinfocast-matt-staggs/id294855429",
            "image": "http://assets.libsyn.com/content/1483300.jpg"
        },
        {
            "name": "The Drunken Taoist Podcast",
            "description": "The Drunken Taoist is a bi-monthly podcast by writer/martial artist/college professor/whatever-label-you-feel-like-adding Daniele Bolelli. One of the monthly episodes features discussions and interviews with one or more guests. The other includes the infamous Bolelli rants and verbal Tai Chi with co-host Rich Evirs. Topics covered by the show include the common thread is whatever makes life intense, passionate and worth living. Anything that meets this requirement is fair game-regardless of whether the starting point is religion, politics, sex, martial arts, philosophy, history, ora any ofther specific field.",
            "url_web": "http://thedrunkentaoist.com/episodes/feed/itunes",
            "url_rss": "http://feeds.feedburner.com/TheDrunkenTaoistPodcast",
            "url_itunes": "https://itunes.apple.com/us/podcast/the-drunken-taoist-podcast/id567232410",
            "image": "http://thedrunkentaoist.com/static/tdt/img/logo-large.jpg"
        },
        {
            "name": "The Duncan Trussell Family Hour",
            "description": "A weekly electronic salon style super show.",
            "url_web": "http://www.duncantrussell.com",
            "url_rss": "http://lavenderhour.libsyn.com/rss",
            "url_itunes": "https://itunes.apple.com/us/podcast/duncan-trussell-family-hour/id350580455",
            "image": "http://assets.libsyn.com/content/4308226.jpg"
        },
        {
            "name": "The East Wing",
            "description": "The East Wing is a podcast brought to you by Tim Smith, that talks with industry experts about design, solving problems and the keys to creating products with value.",
            "url_web": "http://theeastwing.net",
            "url_rss": "http://theeastwing.net/feed/podcast",
            "url_itunes": "https://itunes.apple.com/us/podcast/the-east-wing/id503801143",
            "image": "http://theeastwing.s3.amazonaws.com/wp-content/uploads/2013/04/eastwing_podcast_artwork_1400.jpg"
        },
        {
            "name": "The Gently Mad",
            "description": "The Gently Mad is an interview show about what drives us as creators and connects us as people. Each week, we explore the stories, experiences and insights of awesome people who make awesome things. Hosted by Adam Clark.",
            "url_web": "http://thegentlymad.com",
            "url_rss": "http://feeds.feedburner.com/TheGentlyMad",
            "url_itunes": "https://itunes.apple.com/us/podcast/the-gently-mad/id594419508",
            "image": "http://thegentlymad.com/TGM-logo.jpg"
        },
        {
            "name": "The Higherside Chats | Conspiracy and Paranormal Podcast",
            "description": "Podcast about conspiracy, paranormal, ufos, and aliens. When Alex Jones is too much, try THC",
            "url_web": "http://thehighersidechats.com",
            "url_rss": "http://thehighersidechats.com/feed/podcast/",
            "url_itunes": "https://itunes.apple.com/us/podcast/higherside-chats-conspiracy/id419458838",
            "image": "http://thehighersidechats.com/wp-content/uploads/powerpress/higherside_iTunesiconFIN.jpg"
        },
        {
            "name": "The Industry Radio Show",
            "description": "The Industry is an independent blog and podcast highlighting design focused startups and people. We exist to give the design driven a voice in tech media.",
            "url_web": "http://theindustry.cc/",
            "url_rss": "http://feeds.feedburner.com/theindustryradio",
            "url_itunes": "https://itunes.apple.com/us/podcast/the-industry-radio-show/id505087733",
            "image": "http://theindustry.buzzsprout.com/podcasts/5269/artworks_large.jpg"
        },
        {
            "name": "The Joe Rogan Experience",
            "description": "Conduit to the Gaian Mind",
            "url_web": "http://blog.joerogan.net",
            "url_rss": "http://joeroganexp.joerogan.libsynpro.com/rss",
            "url_itunes": "https://itunes.apple.com/us/podcast/the-joe-rogan-experience/id360084272",
            "image": "http://assets.libsyn.com/content/5694397.jpg"
        },
        {
            "name": "The Labyrinth",
            "description": "The Labyrinth podcast tells the stories of the strange and unusual things that happen in our world. In each episode, host Cesar Torres interviews guests from all walks of life and asks the question, \"What's the strangest thing that's ever happened to you?\"",
            "url_web": "http://cesartorres.net",
            "url_rss": "http://thelabyrinth.libsyn.com/rss",
            "url_itunes": "https://itunes.apple.com/us/podcast/the-labyrinth/id535896322?mt=2",
            "image": "http://assets.libsyn.com/content/5168728.jpg"
        },
        {
            "name": "The New Disruptors",
            "description": "The New Disruptors tries to tell stories that provide practical inspiration about the way that creative people and producers connect with audiences to perform, cajole, convince, sell, and interact using new methods. ",
            "url_web": "http://newdisrupt.org/",
            "url_rss": "http://feeds.newdisrupt.org/nd",
            "url_itunes": "https://itunes.apple.com/us/podcast/the-new-disruptors/id584939697?mt=2",
            "image": "http://newdisruptors.s3.amazonaws.com/images/ND_full_iTunes.jpg"
        },
        {
            "name": "The Non Breaking Space Show",
            "description": "Interviewing the Best and Brightest on the Web at nonbreakingspace.tv",
            "url_web": "http://nonbreakingspace.tv",
            "url_rss": "http://feeds.feedburner.com/nbsp-new",
            "url_itunes": "https://itunes.apple.com/us/podcast/the-non-breaking-space-show/id507162981",
            "image": "http://assets.libsyn.com/images/ssktn/nbsptv-logo-1200x1200.jpg"
        },
        {
            "name": "The Ones Who Knock - A Breaking Bad Podcast",
            "description": "A weekly discussion of the plots, themes and highlights of the AMC series \"Breaking Bad.\" Your hosts Dave Chen (The /Filmcast and The Tobolowsky Files) and Joanna Robinson (Features Editor for Pajiba.com) will cook up praise and criticism.  Questions, comments or a brand new recipe for crystal?  Email theoneswhoknock@gmail.com, yo.",
            "url_web": "http://www.slashfilm.com/category/features/slashfilmcast/the-ones-who-knock/",
            "url_rss": "http://feeds.feedburner.com/theoneswhoknock",
            "url_itunes": "https://itunes.apple.com/us/podcast/ones-who-knock-breaking-bad/id544599736",
            "image": "https://lh6.googleusercontent.com/-1sknQmqAv90/UeFktnWyudI/AAAAAAAADbY/1F4enB0xnFY/s912/TheOnesWhoKnock_GreenHat_Square.jpg"
        },
        {
            "name": "The Talk Show With John Gruber",
            "description": "Sort of like the director's commentary track for Daring Fireball.",
            "url_web": "http://muleradio.net/thetalkshow",
            "url_rss": "http://feeds.muleradio.net/thetalkshow",
            "url_itunes": "http://itunes.apple.com/us/podcast/id528458508",
            "image": "http://www.muleradio.net/images/shows/thetalkshow/itunes-1400.jpg"
        },
        {
            "name": "Warrior Poet Project",
            "description": "The Warrior Poet Project Podcast is not about the creator Aubrey Marcus, but rather about an idea. The idea of bringing balance back into a world that is increasingly polarized, and a sense of tribe back to a people growing increasingly solipsistic. True to the concept this channel blends humor with gravity and levity with depth, as we explore the realms of the mind, psychedelics, athletics, MMA and Sexuality. Buckle up and enjoy the ride!  Be sure to check out host Aubrey Marcus on the Joe Rogan Experience Podcast and follow him on twitter @WarriorPoetUS.",
            "url_web": "http://warriorpoet.podomatic.com",
            "url_rss": "http://warriorpoet.podomatic.com/rss2.xml",
            "url_itunes": "https://itunes.apple.com/us/podcast/warrior-poet-project/id521945322",
            "image": "http://assets.podomatic.net/mymedia/thumb/pro/2089241/1400x1400_6250815.jpg"
        },
        {
            "name": "This American Life",
            "description": "Official free, weekly podcast of the award-winning radio show \"This American Life.\" First-person stories and short fiction pieces that are touching, funny, and surprising. Hosted by Ira Glass, from WBEZ Chicago Public Radio. In mp3 and updated Mondays.",
            "url_web": "http://www.thisamericanlife.org",
            "url_rss": "http://feeds.thisamericanlife.org/talpodcast",
            "url_itunes": "https://itunes.apple.com/us/podcast/this-american-life/id201671138",
            "image": "http://www.thisamericanlife.org/sites/all/themes/thislife/images/logo-square-1400.jpg"
        },
        {
            "name": "This Week in Google (MP3)",
            "description": "Leo Laporte, Gina Trapani, Jeff Jarvis and their guests talk about the latest Google and cloud computing news.\r\n\r\nRecords live every Wednesday at 1:00pm PT/4:00pm ET.\r\n",
            "url_web": "http://twit.tv/twig",
            "url_rss": "http://leo.am/podcasts/twig",
            "url_itunes": "https://itunes.apple.com/us/podcast/this-week-in-google-mp3/id326120877?mt=2",
            "image": "http://feeds.twit.tv/podcasts/coverart/twig1400audio.jpg"
        },
        {
            "name": "This Week in Tech (MP3)",
            "description": "\r\nYour first podcast of the week is the last word in tech. Join Leo Laporte, Patrick Norton, Kevin Rose, John C. Dvorak, and other tech luminaries in a roundtable discussion of the latest trends in digital technology. Winner of the 2005 People's Choice Podcast Award for best overall podcast and Best Technology Podcast. Released every Sunday by midnight Pacific.\r\n",
            "url_web": "http://twit.tv/twit",
            "url_rss": "http://leo.am/podcasts/twit",
            "url_itunes": "https://itunes.apple.com/podcast/this-week-in-tech-mp3/id73329404?mt=2",
            "image": "http://feeds.twit.tv/podcasts/coverart/twit1400audio.jpg"
        },
        {
            "name": "Triangulation (MP3)",
            "description": "Every week Leo Laporte talks to the smartest people in the world about the most important topics in technology.\r\nRecords live every Wednesday at 3:00pm PT/6:00pm ET.\r\n",
            "url_web": "http://twit.tv/tri",
            "url_rss": "http://leo.am/podcasts/tri",
            "url_itunes": "https://itunes.apple.com/us/podcast/triangulation-mp3/id415842414",
            "image": "http://feeds.twit.tv/podcasts/coverart/tri1400audio.jpg"
        },
        {
            "name": "UIE Brain Sparks",
            "description": "UIE\\'s latest insights on the world of design",
            "url_web": "http://www.uie.com/brainsparks",
            "url_rss": "http://www.uie.com/brainsparks/feed/",
            "url_itunes": "https://itunes.apple.com/us/podcast/uie-brain-sparks/id119728465",
            "image": "http://www.uie.com/BSAL/Artwork/bsalart144x.jpg"
        },
        {
            "name": "Unfinished Business",
            "description": "A weekly discussion show about the business end, the sharp end of web, design and creative industries. Hosted by Andrew Clarke, Anna Debenham and guests",
            "url_web": "http://unfinished.bz",
            "url_rss": "http://feeds.feedburner.com/buzzsprout/uJEz",
            "url_itunes": "https://itunes.apple.com/us/podcast/unfinished-business/id593298707",
            "image": "http://www.buzzsprout.com/podcasts/8778/artworks_large.jpg"
        },
        {
            "name": "Welcome to Night Vale",
            "description": "Twice-monthly community updates for the small desert town of Night Vale, featuring local weather, news, announcements from the Sheriff's Secret Police, mysterious lights in the night sky, dark hooded figures with unknowable powers, and cultural events. Turn on your radio and hide. Welcome to Night Vale. (Produced by Commonplace Books. Written by Joseph Fink and Jeffrey Cranor. Narrated by Cecil Baldwin. On Twitter as NightValeRadio)",
            "url_web": "http://welcometonightvale.com",
            "url_rss": "http://nightvale.libsyn.com/rss",
            "url_itunes": "https://itunes.apple.com/us/podcast/welcome-to-night-vale/id536258179",
            "image": "http://assets.libsyn.com/content/5896287.jpg"
        },
        {
            "name": "WTF with Marc Maron Podcast",
            "description": "Comedian Marc Maron is tackling the most complex philosophical question of our day - WTF? He'll get to the bottom of it with help from comedian friends, celebrity guests and the voices in his own head.",
            "url_web": "http://wtfpod.com",
            "url_rss": "http://wtfpod.libsyn.com/rss",
            "url_itunes": "https://itunes.apple.com/us/podcast/wtf-with-marc-maron-podcast/id329875043",
            "image": "http://assets.libsyn.com/content/1827929.jpg"
        },
        {
            "name": "Young Guns Show",
            "description": "The Young Guns Show aims to feature and inspire the young guns in the web industry — the guys and gals that aren't waiting for \"someday\" to do amazing things.",
            "url_web": "http://younggunsshow.com/",
            "url_rss": "http://feeds.feedburner.com/younggunsshow",
            "url_itunes": "https://itunes.apple.com/us/podcast/young-guns-show/id507917469",
            "image": "http://younggunsshow.s3.amazonaws.com/assets/ygs-itunes.png"
        },
        {
            "name": "This Week in Startups - Audio",
            "description": "Entrepreneur Jason Calacanis and a rotating group of guests experts bring you this weekly take on the best, wors, most outrageous and interesting stories from the world of the Web companies. Calacanis, a podcaster pioneer, gives you an insider's look at what's happening in the tech industry with his trademark blunt style and good humor. Looking to start your own company? Need strategies for improving your business or motivating your team? Just want to catch up on what's happening on Silicon Valley and beyond? Your jurney begins here.",
            "url_web": "http://thisweekinstartups.com",
            "url_rss": "http://feeds.feedburner.com/twist-audio",
            "url_itunes": "https://itunes.apple.com/us/podcast/this-week-in-startups-audio/id315114957",
            "image": "http://www.thisweekin.com/featured/FeatureBox_Startups.jpg"
        }
      ]
    }
    // needs a Meteor.call(xmlGetter('http://feeds.feedburner.com/buzzsprout/uJEz')) on the client somewhere.
    // Use Meteor.startup to render the component after the page is ready
    ReactDOM.render(<App {...appData} />, document.getElementById("render-target"));
  });
}
