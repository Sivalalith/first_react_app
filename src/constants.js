// export const restaurantList = [
//   {
//     name: "KFC",
//     id: "1a",
//     imageId: "8b3a3993448aeba5ee8e6f63be94bb60",
//     cuisines: ["American", "Burger"],
//     rating: "4.0",
//   },
//   {
//     name: "Burger King",
//     id: "2b",
//     imageId: "evu59l76addywfczvlb9",
//     cuisines: ["American", "Burger"],
//     rating: "3.0",
//   },
//   {
//     name: "Chings Chinese Hut",
//     id: "3c",
//     imageId: "ea2e7885d42f25e9ff5760eaa04c0450",
//     cuisines: ["Chinese", "Noodles"],
//     rating: "4.5",
//   },
//   {
//     name: "Anand Villa",
//     id: "4d",
//     imageId: "18d8b8fb6bac8063a6fa886e20148110",
//     cuisines: ["Indian", "Veg"],
//     rating: "4.2",
//   },
//   {
//     name: "Ravi Fast Food Joint",
//     id: "5e",
//     imageId: "ocjdo70bxancyrwv1wkd",
//     cuisines: ["Indian", "Veg", "Non-Veg"],
//     rating: "3.0",
//   },
// ];

export const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const FETCH_RESTAURANT_INFO_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=";

export const FETCH_RESTAURANTS_LIST_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const restaurantList = [
  {
    id: "658841",
    name: "La Pino'z Pizza",
    cloudinaryImageId: "d20fdc8c86aa8bd0638f47dd013d46f9",
    locality: "Rajendra Nagar",
    areaName: "Attapur",
    costForTwo: "₹400 for two",
    cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
    avgRating: 4.1,
    parentId: "4961",
    avgRatingString: "4.1",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 2,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "2.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-07-18 02:00:00", opened: true },
    badges: {
      imageBadges: [
        { imageId: "Rxawards/_CATEGORY-Pizza.png", description: "Delivery!" },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Pizza.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹100" },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "11091",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/0ea1daf5-b64e-43d2-80db-b460ed92e05c_11091.jpg",
    locality: "Attapur",
    areaName: "Attapur",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4,
    parentId: "721",
    avgRatingString: "4.0",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 28,
      lastMileTravel: 1.4,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "1.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-07-18 04:00:00", opened: true },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
    },
    aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹189" },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "400157",
    name: "The Belgian Waffle Co.",
    cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
    locality: "Somi Reddy Nagar",
    areaName: "Attapur",
    costForTwo: "₹200 for two",
    cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
    avgRating: 4.4,
    veg: true,
    parentId: "2233",
    avgRatingString: "4.4",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 1.3,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "1.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-07-17 23:45:00", opened: true },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: { header: "20% OFF", subHeader: "UPTO ₹50" },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "659668",
    name: "UBQ by Barbeque Nation",
    cloudinaryImageId: "ffe4084febdec52732dffd3624f4e6c1",
    locality: "COMMERCIAL CENTRE",
    areaName: "Attapur",
    costForTwo: "₹300 for two",
    cuisines: [
      "North Indian",
      "Barbecue",
      "Biryani",
      "Kebabs",
      "Mughlai",
      "Desserts",
    ],
    avgRating: 3.6,
    parentId: "10804",
    avgRatingString: "3.6",
    totalRatingsString: "100+",
    sla: {
      deliveryTime: 41,
      lastMileTravel: 4.3,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "4.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-07-17 23:30:00", opened: true },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
    },
    aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹100" },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "541933",
    name: "Great Indian Khichdi by EatFit",
    cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
    locality: "Beside KFC",
    areaName: "Manikonda",
    costForTwo: "₹200 for two",
    cuisines: ["Indian", "Home Food", "Healthy Food", "Snacks"],
    avgRating: 4.2,
    parentId: "319582",
    avgRatingString: "4.2",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 9.7,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "9.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-07-18 00:00:00", opened: true },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.png",
          description: "pureveg",
        },
      ],
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "brand",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "brand",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: { header: "60% OFF", subHeader: "UPTO ₹120" },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: { aggregatedRating: { rating: "--" } },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "378344",
    name: "Theobroma",
    cloudinaryImageId: "63dd75492c47fcec191132b8eb299ea5",
    locality: "Banjara Hills",
    areaName: "Banjara Hills",
    costForTwo: "₹400 for two",
    cuisines: ["Desserts"],
    avgRating: 4.5,
    parentId: "1040",
    avgRatingString: "4.5",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 31,
      lastMileTravel: 6.4,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "6.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: { nextCloseTime: "2024-07-17 22:45:00", opened: true },
    badges: {
      imageBadges: [
        {
          imageId: "v1669879258/GFF_logo_new_xbycg6.png",
          description: "gourmet",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "gourmet",
                imageId: "v1669879258/GFF_logo_new_xbycg6.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: { header: "20% OFF", discountTag: "FLAT DEAL" },
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: { rating: "4.0", ratingCount: "100+" },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
];
