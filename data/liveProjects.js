// =========================================================
// FILE: data/liveProjects.js
// =========================================================

const liveProjects = [

    {
        title: "Dual Camera Capture",
        description:
            "Simultaneous front and rear 4K recording with live processing, compression and protected uploads to Firebase Storage.",
        image: "images/dualcamera.png",
        link: "https://www.youtube.com/watch?v=7cVl1fcF2Tc",
        highlights: [
            "Dual AVCaptureSession pipeline at 4K 60fps",
            "Password-protected ZIP upload workflow"
        ],
        tags: [
            "UIKit",
            "AVCaptureSession",
            "AVFoundation",
            "Firebase Storage",
            "Live Processing"
        ],
        flagship: true
    },

    {
        title: "Local Deals & Rewards Platform",
        description:
            "Location-aware deals app helping users unlock nearby offers, loyalty rewards and merchant promotions on the map.",
        image: "images/dashible.png",
        link: "https://apps.apple.com/us/app/dashible-deals/id1475022894",
        highlights: [
            "Geo-fenced offer discovery with MapKit",
            "Push-driven deal alerts and redemption flow"
        ],
        tags: [
            "SwiftUI",
            "MapKit",
            "Core Location",
            "Push Notifications",
            "Loyalty Engine"
        ]
    },

    {
        title: "Transport & Logistics Platform",
        description:
            "Fleet and trip management for vehicle booking, route coordination and live status across customer and operator roles.",
        image: "images/desh.png",
        link: "https://apps.apple.com/in/app/desh-parivahan/id1471516595",
        highlights: [
            "Real-time trip and vehicle status sync",
            "Scalable booking and dispatch modules"
        ],
        tags: [
            "UIKit",
            "REST APIs",
            "Live Tracking",
            "Trip Booking",
            "MVVM"
        ]
    },

    {
        title: "Community & Events App",
        description:
            "Local events, business listings and community updates with integrated radio streaming and announcement feeds.",
        image: "images/local.png",
        link: "https://apps.apple.com/us/app/local-happenings/id1524588247",
        highlights: [
            "Event discovery with category filters",
            "In-app radio streaming and live announcements"
        ],
        tags: [
            "SwiftUI",
            "Firebase",
            "Audio Streaming",
            "Event Feeds",
            "Deep Linking"
        ]
    },

    {
        title: "Car Rental Ecosystem",
        description:
            "Customer and dealer apps for rentals, fleet visibility, booking lifecycle and payment-ready trip workflows.",
        image: "images/rydezilla.png",
        link: "https://rydezilla.com/",
        highlights: [
            "Dual-app ecosystem: customer + dealer",
            "Live fleet availability and booking sync"
        ],
        tags: [
            "UIKit",
            "In-App Payments",
            "Booking Engine",
            "Fleet Management",
            "Socket Updates"
        ]
    },

    {
        title: "Insurance Management App",
        description:
            "Central hub for policies, claims, payment history and secure insurance workflows on mobile.",
        image: "images/insure.png",
        link: "https://apps.apple.com/in/app/just-insure/id1540086699",
        highlights: [
            "Policy vault with claim submission flow",
            "Secure session and document handling"
        ],
        tags: [
            "SwiftUI",
            "Keychain",
            "REST APIs",
            "Claims Workflow",
            "Fintech UX"
        ]
    },

    {
        title: "Diet Planner App",
        description:
            "Health tracking for meals, water intake, reminders and personalized diet plans with daily goal insights.",
        image: "images/diet.png",
        link: "https://www.youtube.com/shorts/JFIbh6RCxlQ",
        highlights: [
            "Smart reminders for meals and hydration",
            "Personalized plan builder with progress view"
        ],
        tags: [
            "SwiftUI",
            "Local Notifications",
            "Health Tracking",
            "Charts",
            "Core Data"
        ]
    },

    {
        title: "Auction & Stadium Management",
        description:
            "Event operations platform for ticketing, live bidding, seating maps and stadium-side coordination.",
        image: "images/auction.png",
        link: "https://www.facebook.com/Cymmons/photos",
        highlights: [
            "Live bidding with seat allocation logic",
            "Ticketing and on-site event controls"
        ],
        tags: [
            "UIKit",
            "Live Bidding",
            "Payments",
            "Seat Maps",
            "Real-time Sync"
        ]
    },

    {
        title: "Marketplace App",
        description:
            "Agricultural marketplace for cattle, tractors, crops and equipment with high-traffic listing and chat flows.",
        image: "images/piplana.png",
        link: "https://apps.apple.com/in/app/piplana-pane/id1409110407",
        highlights: [
            "10L+ user scale with optimized media uploads",
            "Category listings with seller messaging"
        ],
        tags: [
            "UIKit",
            "Marketplace Feed",
            "Image Compression",
            "Performance Tuning",
            "Firebase"
        ]
    },

    {
        title: "Crypto Wallet App",
        description:
            "Web3 wallet for balances, token management and transaction flows with security-first storage patterns.",
        image: "images/crypto.png",
        link: "https://youtube.com/shorts/rCbtzJ246aw?feature=share",
        highlights: [
            "Web3 SDK integration for wallet actions",
            "Token portfolio and transaction history UI"
        ],
        tags: [
            "SwiftUI",
            "Web3 SDK",
            "Blockchain",
            "Keychain",
            "Transaction Engine"
        ]
    },

    {
        title: "Digital Recipe Manager App",
        description:
            "Recipe library with meal planning, ingredient search, offline access and shopping list automation.",
        image: "images/cookbook.png",
        link: "https://apps.apple.com/us/app/mycookbook/id1218876038",
        highlights: [
            "Offline-first recipe cache with Core Data",
            "Ingredient search and shopping list export"
        ],
        tags: [
            "UIKit",
            "Offline-first",
            "Core Data",
            "Smart Search",
            "Meal Planning"
        ]
    },

    {
        title: "Laundry Booking App",
        description:
            "On-demand laundry with pickup scheduling, order tracking and seamless checkout for recurring users.",
        image: "images/laundry.png",
        link: "https://apps.apple.com/in/app/moon-laundry/id1541635952",
        highlights: [
            "Pickup slot booking with live order status",
            "Payment and notification-driven updates"
        ],
        tags: [
            "SwiftUI",
            "Order Tracking",
            "Payments",
            "Push Notifications",
            "Booking Flow"
        ]
    },

    {
        title: "Visual Learning Healthcare App",
        description:
            "Medical learning through visual mnemonics, illustrated modules and structured healthcare categories.",
        image: "images/medinaz.png",
        link: "https://apps.apple.com/in/app/medinaz/id1532692978",
        highlights: [
            "Visual mnemonic learning paths",
            "Cached media for smooth module playback"
        ],
        tags: [
            "SwiftUI",
            "Healthcare UX",
            "Media Caching",
            "Education Modules",
            "Search"
        ]
    },

    {
        title: "Telemedicine & Healthcare Platform",
        description:
            "Doctor consultations, appointment booking and home lab test scheduling in one healthcare super-app.",
        image: "images/healwell.png",
        link: "https://www.facebook.com/HealWell24/photos",
        highlights: [
            "Video consult and appointment scheduling",
            "Lab test booking with status tracking"
        ],
        tags: [
            "UIKit",
            "Video Calls",
            "Healthcare APIs",
            "Appointments",
            "Real-time Chat"
        ]
    },

    {
        title: "Donation & Campaign Tracking App",
        description:
            "Charity platform for campaigns, donations and contribution tracking with companion watch experiences.",
        image: "images/irusa.png",
        link: "https://irusa.app/",
        highlights: [
            "Campaign dashboards with live donation totals",
            "watchOS companion for quick giving updates"
        ],
        tags: [
            "SwiftUI",
            "Campaign Analytics",
            "Firebase",
            "watchOS",
            "Donation Flow"
        ]
    },

    {
        title: "E-Commerce Shopping App",
        description:
            "Perfume storefront with collections, rich product detail and end-to-end mobile checkout.",
        image: "images/eshal.png",
        link: "https://github.com/dev1008iharsh/Harsh-iShop",
        highlights: [
            "Catalog browsing with variant selection",
            "Cart, coupons and checkout integration"
        ],
        tags: [
            "SwiftUI",
            "E-Commerce",
            "Payments",
            "REST APIs",
            "Cart System"
        ]
    },

    {
        title: "Trading & Agent Management App",
        description:
            "Business app for commission agents to track deals, transactions and daily trading operations.",
        image: "images/trading.png",
        link: "https://apps.apple.com/in/app/repairmint-business/id1596447429",
        highlights: [
            "Deal pipeline with commission calculations",
            "Transaction ledger and reporting views"
        ],
        tags: [
            "UIKit",
            "Business Logic",
            "MVVM",
            "Reports",
            "Data Sync"
        ]
    },

    {
        title: "Reel: Video Streaming Platform",
        description:
            "YouTube-style streaming with uploads, subscriptions, channels and personalized recommendation feeds.",
        image: "images/ubvideos.png",
        link: "https://apps.apple.com/us/app/ubvideos/id1571532210",
        highlights: [
            "Upload pipeline with channel subscriptions",
            "Recommendation-driven home feed"
        ],
        tags: [
            "UIKit",
            "Video Streaming",
            "Upload Pipeline",
            "CDN Playback",
            "Subscriptions"
        ]
    },

    {
        title: "Video Streaming Platform",
        description:
            "Adaptive video platform with media uploads, playback optimization and personalized viewer journeys.",
        image: "images/video.png",
        link: "https://apps.apple.com/us/app/",
        highlights: [
            "HLS-style adaptive streaming playback",
            "Background-friendly media session handling"
        ],
        tags: [
            "SwiftUI",
            "HLS Playback",
            "Media Upload",
            "Recommendations",
            "Performance"
        ]
    },

    {
        title: "Art Marketplace (iOS Version)",
        description:
            "Art discovery marketplace with galleries, artist profiles and auction-style listing experiences.",
        image: "images/7arts.png",
        link: "https://apkpure.net/7-arts/com.fatima.app.sevenarts.enterprise",
        highlights: [
            "Artist profiles with gallery collections",
            "Auction listings and artwork discovery"
        ],
        tags: [
            "UIKit",
            "Marketplace",
            "REST APIs",
            "Media Gallery",
            "Auction UX"
        ]
    }

];
