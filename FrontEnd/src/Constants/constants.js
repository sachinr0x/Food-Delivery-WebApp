export const CDN_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/';

export const RES_LIST = [
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
                        "collectionId": "83639",
                        "title": "Biryani",
                        "description": "Taste these delectable classics, delectable biryanis to make your day.",
                        "imageId": "COLLECTIONS/IMAGES/MERCH/2025/3/7/6b765643-8f10-4176-b1f4-5e096d4182c0_biryani nv (3) (1).png",
                        "aspectRatio": "3.44",
                        "cta": {
                            "link": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani,biryani,ads_pc_biryani",
                            "type": "collectionv2"
                        },
                        "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
                        "count": "229 restaurants",
                        "navBarConfig": {}
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
                        "sortConfigs": [
                            {
                                "key": "relevance",
                                "title": "Relevance (Default)",
                                "selected": true,
                                "defaultSelection": true
                            },
                            {
                                "key": "deliveryTimeAsc",
                                "title": "Delivery Time"
                            },
                            {
                                "key": "modelBasedRatingDesc",
                                "title": "Rating"
                            },
                            {
                                "key": "costForTwoAsc",
                                "title": "Cost: Low to High"
                            },
                            {
                                "key": "costForTwoDesc",
                                "title": "Cost: High to Low"
                            }
                        ],
                        "restaurantCount": 229,
                        "facetList": [
                            {
                                "label": "10 Mins Delivery",
                                "id": "isRestaurantBolt",
                                "selection": "SELECT_TYPE_SINGLESELECT",
                                "facetInfo": [
                                    {
                                        "label": "10 Mins Delivery",
                                        "id": "isRestaurantBoltfacetquery0",
                                        "analytics": {},
                                        "openFilter": true
                                    }
                                ],
                                "viewType": "VIEW_TYPE_FLATTENED",
                                "subLabel": "Filter by",
                                "icon": "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
                                "selectedIcon": "COLLECTIONS/IMAGES/MERCH/2024/12/26/3072d307-2f8e-471c-862d-d426fb93c0bf_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png"
                            },
                            {
                                "label": "Veg/Non-Veg",
                                "id": "isVeg",
                                "selection": "SELECT_TYPE_MULTISELECT",
                                "facetInfo": [
                                    {
                                        "label": "Non Veg",
                                        "id": "isVegfacetquery0",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Pure Veg",
                                        "id": "isVegfacetquery1",
                                        "analytics": {},
                                        "openFilter": true
                                    }
                                ],
                                "viewType": "VIEW_TYPE_HALF_CARD",
                                "subLabel": "Filter by",
                                "openFilter": true
                            },
                            {
                                "label": "Ratings",
                                "id": "rating",
                                "selection": "SELECT_TYPE_MULTISELECT",
                                "facetInfo": [
                                    {
                                        "label": "Ratings",
                                        "id": "ratingfacetquery0",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Ratings 4.0+",
                                        "id": "ratingfacetquery1",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Ratings 4.5+",
                                        "id": "ratingfacetquery2",
                                        "analytics": {},
                                        "openFilter": true
                                    }
                                ],
                                "viewType": "VIEW_TYPE_HALF_CARD",
                                "subLabel": "Filter by",
                                "openFilter": true
                            },
                            {
                                "label": "Delivery Time",
                                "id": "deliveryTime",
                                "selection": "SELECT_TYPE_MULTISELECT",
                                "facetInfo": [
                                    {
                                        "label": "Less than 30 mins",
                                        "id": "deliveryTimefacetquery0",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Less than 45 mins",
                                        "id": "deliveryTimefacetquery1",
                                        "analytics": {},
                                        "openFilter": true
                                    }
                                ],
                                "viewType": "VIEW_TYPE_HALF_CARD",
                                "subLabel": "Filter by",
                                "openFilter": true
                            },
                            {
                                "label": "Cost For Two",
                                "id": "costForTwo",
                                "selection": "SELECT_TYPE_MULTISELECT",
                                "facetInfo": [
                                    {
                                        "label": "Less than Rs. 300",
                                        "id": "costForTwofacetquery0",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Rs.300 - Rs.600",
                                        "id": "costForTwofacetquery1",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Greater than Rs. 600",
                                        "id": "costForTwofacetquery2",
                                        "analytics": {},
                                        "openFilter": true
                                    }
                                ],
                                "viewType": "VIEW_TYPE_HALF_CARD",
                                "subLabel": "Filter by",
                                "openFilter": true
                            }
                        ],
                        "widgetId": "inlineFacetFilter"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                        "layout": {
                            "rows": 1,
                            "widgetPadding": {
                                "left": 16,
                                "top": 12,
                                "right": 16
                            },
                            "widgetTheme": {
                                "defaultMode": {
                                    "backgroundColour": "#FFFFFF",
                                    "theme": "THEME_TYPE_LIGHT",
                                    "themeVariant": "THEME_VARIANT_DEFAULT"
                                },
                                "darkMode": {
                                    "backgroundColour": "#1B3028",
                                    "theme": "THEME_TYPE_DARK",
                                    "themeVariant": "THEME_VARIANT_DEFAULT"
                                }
                            }
                        },
                        "id": "restaurantCountWidget",
                        "gridElements": {
                            "infoWithStyle": {
                                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                                "text": "229 Restaurants to explore",
                                "headerStyling": {
                                    "textSize": 15,
                                    "textColor": "text_color_highest_emphasis",
                                    "textFontName": "FONT_NAME_BODY_B1_BOLD",
                                    "maxLines": 1
                                }
                            }
                        }
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "1261018",
                            "name": "Sharief Bhai Biryani",
                            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/11/13/3301e24d-ac5b-4248-aed1-a508e99c2c6f_f2123d91-1b7b-45b9-85d2-4101f1646b2c.jpg_compressed",
                            "locality": "Seshadripuram",
                            "areaName": "Malleshwaram",
                            "costForTwo": "₹250 for two",
                            "cuisines": [
                                "Biryani",
                                "shawarma",
                                "Kebabs",
                                "Mughlai",
                                "Arabian",
                                "rolls",
                                "Street Food",
                                "Tea",
                                "Desserts",
                                "Beverages"
                            ],
                            "avgRating": 4.1,
                            "parentId": "469102",
                            "avgRatingString": "4.1",
                            "totalRatingsString": "787",
                            "promoted": true,
                            "adTrackingId": "cid=00297677-9372-4b87-9649-e07cc96d852f~p=2~adgrpid=00297677-9372-4b87-9649-e07cc96d852f#ag2~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1261018~plpr=COLLECTION~eid=bf8220b5-792a-49b3-b8c1-2bbd6083ad02~srvts=1790936763077~collid=83639",
                            "sla": {
                                "deliveryTime": 49,
                                "lastMileTravel": 4.6,
                                "serviceability": "SERVICEABLE",
                                "slaString": "45-55 mins",
                                "lastMileTravelString": "4.6 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-10-03 01:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "00297677-9372-4b87-9649-e07cc96d852f",
                            "priceComparisonComms": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=1261018&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "502957",
                            "name": "Andhra Gunpowder",
                            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2026/2/5/ec1b9dee-d3ee-498d-9835-83c09be98117_e0de6fc1-6b38-49e9-91ce-94910a19bb9f.jpg",
                            "locality": "Shivananda Circle",
                            "areaName": "Malleshwaram",
                            "costForTwo": "₹350 for two",
                            "cuisines": [
                                "Andhra",
                                "Biryani",
                                "South Indian"
                            ],
                            "avgRating": 4.5,
                            "parentId": "10496",
                            "avgRatingString": "4.5",
                            "totalRatingsString": "4.1K+",
                            "sla": {
                                "deliveryTime": 35,
                                "lastMileTravel": 2.4,
                                "serviceability": "SERVICEABLE",
                                "slaString": "30-40 mins",
                                "lastMileTravelString": "2.4 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-10-03 01:00:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "brand_cards/Badges%202026/35_Best%20in%20Andhra%20Food2026.png",
                                        "description": "Top-rated for Andhra Food, based on user votes."
                                    }
                                ]
                            },
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "imageId": "brand_cards/Badges%202026/35_Best%20in%20Andhra%20Food2026.png",
                                                    "description": "Top-rated for Andhra Food, based on user votes.",
                                                    "theme": ""
                                                }
                                            }
                                        ]
                                    },
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "priceComparisonComms": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=502957&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "1066955",
                            "name": "Chickpet Donne Biryani",
                            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2026/4/2/594c53db-3636-47d8-b7d9-d687dc71dbd2_acbe7344-b104-4d3e-961f-d959c4d0c161.jpg_compressed",
                            "locality": "Indiranagar",
                            "areaName": "Indiranagar",
                            "costForTwo": "₹450 for two",
                            "cuisines": [
                                "Andhra",
                                "Biryani",
                                "South Indian",
                                "Beverages",
                                "Kebabs"
                            ],
                            "avgRating": 4.1,
                            "parentId": "60857",
                            "avgRatingString": "4.1",
                            "totalRatingsString": "473",
                            "promoted": true,
                            "adTrackingId": "cid=d56eecbb-53dd-430d-b04e-4988d52ddc10~p=3~adgrpid=d56eecbb-53dd-430d-b04e-4988d52ddc10#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1066955~plpr=COLLECTION~eid=91f97c00-97d1-499e-be37-818a3c85953d~srvts=1790936763077~collid=83639",
                            "sla": {
                                "deliveryTime": 48,
                                "lastMileTravel": 6.4,
                                "serviceability": "SERVICEABLE",
                                "slaString": "45-50 mins",
                                "lastMileTravelString": "6.4 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-10-02 17:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textExtendedBadges": {},
                                    "textBased": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "d56eecbb-53dd-430d-b04e-4988d52ddc10",
                            "priceComparisonComms": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=1066955&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "80517",
                            "name": "Savoury Restaurant",
                            "cloudinaryImageId": "64a192a718784f875ddd324b7df1a675",
                            "locality": "Frazer Town",
                            "areaName": "Central Bangalore",
                            "costForTwo": "₹450 for two",
                            "cuisines": [
                                "North Indian",
                                "South Indian",
                                "Biryani",
                                "Kerala"
                            ],
                            "avgRating": 4.4,
                            "parentId": "179209",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "25K+",
                            "sla": {
                                "deliveryTime": 46,
                                "lastMileTravel": 4.4,
                                "serviceability": "SERVICEABLE",
                                "slaString": "40-45 mins",
                                "lastMileTravelString": "4.4 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-10-03 02:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "13K+"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "priceComparisonComms": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=80517&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "1331741",
                            "name": "The Filter Coffee",
                            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2026/6/26/f14786f7-190c-4ba9-aa87-574f8655cc0f_02b6ec9e-bacf-4522-835d-769ad5667405.jpg",
                            "locality": "Central Bangalore",
                            "areaName": "Central Bangalore",
                            "costForTwo": "₹400 for two",
                            "cuisines": [
                                "South Indian",
                                "Biryani",
                                "Indian"
                            ],
                            "avgRating": 4.6,
                            "veg": true,
                            "parentId": "21001",
                            "avgRatingString": "4.6",
                            "totalRatingsString": "426",
                            "promoted": true,
                            "adTrackingId": "cid=fb5466d6-c144-44bf-8cfe-668ef907ba41~p=4~adgrpid=fb5466d6-c144-44bf-8cfe-668ef907ba41#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1331741~plpr=COLLECTION~eid=fe2198ac-9b91-43bc-b6bb-6ca57a8e98ac~srvts=1790936763077~collid=83639",
                            "sla": {
                                "deliveryTime": 32,
                                "lastMileTravel": 2,
                                "serviceability": "SERVICEABLE",
                                "slaString": "25-30 mins",
                                "lastMileTravelString": "2.0 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-10-02 22:30:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "fb5466d6-c144-44bf-8cfe-668ef907ba41",
                            "priceComparisonComms": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=1331741&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "1385459",
                            "name": "1881 Dum House: Lucknow's Legacy",
                            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/9/23/999907b8-cf3c-4c7d-9d1b-7dea78f8cbca_0d451c77-2992-423f-84d0-95cb45c80631.jpg",
                            "locality": "Gold Towers",
                            "areaName": "Richmond Town",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                                "North Indian",
                                "Biryani",
                                "Awadhi"
                            ],
                            "avgRating": 4.2,
                            "parentId": "687728",
                            "avgRatingString": "4.2",
                            "totalRatingsString": "90",
                            "sla": {
                                "deliveryTime": 25,
                                "lastMileTravel": 3,
                                "serviceability": "SERVICEABLE",
                                "slaString": "20-30 mins",
                                "lastMileTravelString": "3.0 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-10-03 02:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "isNewlyOnboarded": true,
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "priceComparisonComms": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=1385459&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "606918",
                            "name": "Chickpet Donne Biryani House",
                            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2026/4/2/594c53db-3636-47d8-b7d9-d687dc71dbd2_acbe7344-b104-4d3e-961f-d959c4d0c161.jpg_compressed",
                            "locality": "Jayanagar",
                            "areaName": "Jayanagar",
                            "costForTwo": "₹250 for two",
                            "cuisines": [
                                "Biryani",
                                "Kebabs",
                                "South Indian"
                            ],
                            "avgRating": 4.1,
                            "parentId": "5634",
                            "avgRatingString": "4.1",
                            "totalRatingsString": "1.7K+",
                            "promoted": true,
                            "adTrackingId": "cid=c3ad640e-58e4-43df-bd32-0a11926a388d~p=5~adgrpid=c3ad640e-58e4-43df-bd32-0a11926a388d#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=606918~plpr=COLLECTION~eid=28506153-4039-48bb-8345-429e5f0f69f5~srvts=1790936763077~collid=83639",
                            "sla": {
                                "deliveryTime": 45,
                                "lastMileTravel": 6.9,
                                "serviceability": "SERVICEABLE",
                                "slaString": "40-45 mins",
                                "lastMileTravelString": "6.9 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-10-02 17:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {},
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "6.3K+"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "c3ad640e-58e4-43df-bd32-0a11926a388d",
                            "priceComparisonComms": {}
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=606918&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            }
        ]

export const API_URL = 'https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING';
export const MENU_API = 'https://proxy.corsfix.com/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=';