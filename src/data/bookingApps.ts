export type BookingApp = {
  id: string;
  name: string;
  url: string;
  color: string;
  logo: string;
};

export const bookingApps: BookingApp[] = [
  {
    id: "agoda",
    name: "Agoda",
    url: "https://th.trip.com/m/hotels/detail/?hotelId=101482459&subStamp=3001547&checkIn=2026-07-21&checkOut=2026-07-22&adult=2&children=0&ages=&types=&crn=1&travelpurpose=0&UniqueKey=H4sIAAAAAAAA_-Ny42KSYBJi4mCUsuFY_mzOJDaL34IBHDMYb__faLCDkekiY_-hrxoxla0ODxnTQMCt0-EF465J37czLmBhXMgKln0f4SDF45uTE1aZWRRhGBxgosCo8e3ln0tsHoxBbMZuRmYmjlEyXMwhHk6CpdFK4nMOnrSXAvEUYbwk1pIM3RCPjGOiXYxMHoyrGNm5mA2MjASYPjHyI5sbb2wMAIOYfFuxAAAA&hasAidInUrl=1&roomKey=1648833319__0_0_022_2__0&roomToken=RMNFW8-H-1&masterhotelid_tracelogid=29855d91d4314191b3c4d4a5102f796f&source=landing&cityId=359&minCurr=THB&minPrice=808.80&listScene=4&fromMeta=1&fromPageId=10320671706&trip_sub1=21_07_2026_1_mapresults_101482459_TH_mobile_default_21340450966_9160597251_1_0-LANG_TH-landing&fgt=1&display=incavg&msr=%255B%257B%2522roomId%2522%253A%25221648833319%2522%252C%2522rateID%2522%253A%2522022%2522%252C%2522ratePlanId%2522%253A%2522%2522%252C%2522childAgeList%2522%253A%255B%255D%252C%2522adult%2522%253A2%252C%2522xPkgToken%2522%253A%2522%2522%257D%255D&fromList=1",
    color: "#5392F9",
    logo: "/images/booking/agoda.svg",
  },
  {
    id: "booking",
    name: "Booking.com",
    url: "https://www.booking.com/searchresults.th.html?dest_id=9242476&highlighted_hotels=9242476&dest_type=hotel&checkin=2026-07-21&checkout=2026-07-22&group_adults=2&req_adults=2&show_room=924247601_364199995_2_0_0&lang=th&selected_currency=THB&exrt=1.00000000&ext_price_total=1073.17&ext_price_tax=155.93&xfc=THB&hca=m&group_children=0&req_children=0&&ts=1784624528&no_rooms=1&edgtid=SetyA1HzSeCYZ6DATVwctg&efpc=kXskoQc7F6dv&utm_source=metagha&utm_medium=mapresults&utm_campaign=TH&utm_term=hotel-9242476&utm_content=dev-mobile_los-1_bw-0_dow-Tuesday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-21404701668_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20260721_ppt-Cg&aid=1288374&label=metagha-link-MRTH-hotel-9242476_dev-mobile_los-1_bw-0_dow-Tuesday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-21404701668_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20260721_ppt-Cg_lp-2764_r-14166636317296647951&gclid=CjwKCAjwsfzSBhB5EiwAOGyqSf59K5JbIQWT18SuNP_XHcr5_hIY9OkcNMAVbNoBdOoRqx-ycTUhbhoCF5kQAvD_BwE&gad_source=6&gad_campaignid=21404701668",
    color: "#003580",
    logo: "/images/booking/booking.svg",
  },
  {
    id: "traveloka",
    name: "Traveloka",
    url: "https://www.traveloka.com/th-th/hotel/search?spec=21-07-2026.22-07-2026.1.1.HOTEL_GEO.10000045.Bangkok.2&hotelId=9000001107823&contexts=%7B%22accessCode%22:%2293024GHAM2590mobile%22%2C%22metasearchRequestId%22%3A%2261521633-9ee3-4309-bae4-e529c66f051c%22%2C%22dateSelectionType%22%3A%22default%22%2C%22plc%22%3A%22b6CDcJKi6nfr005DH8Xn8wDEzIVYTBfRzyspLYRnHTS1eObVd7meP1pAKdKORiQLBWv%2FyyNqxwSTU%2BJIJQepEg%3D%3D%22%2C%22pvlc%22%3A%22Ht4cMTfXKjLHzBZ04ycHWydm5yBP59UBp5rT2kr3cRR2%2BbsTinmKHjFxI3ErQ5X1%22%7D&metasearchId=GoogleHotelAdsUser&metasearchRateId=desktop&metasearchRatekey=sgyUU2M0LrnnpXh1LPwoI&priceDisplay=TOTAL&metasearchRefid=12345678910abcdefghijk@-&adType=1&PPA=0&hotelCampaign=1&id=16453272049567543602&adloc=id-id&kw=16453272049567543602_&gn=g&gd=m&gdm=&pc=1&cp=16453272049567543602_TH_HO_MS_AU_AL_Google_BLA_TH_CPC_Prio_EXP_16453272049567543602_&aid=188042253750&wid=hpi-2436001334069&gclid=CjwKCAjwsfzSBhB5EiwAOGyqSc91BkMqgGngrIbwJzyQvKJeGJ7M3lW2cBIfgp8IAdQmQG99r-E0ghoCV84QAvD_BwE&gid=2764&utm_id=q5MOHS74&target_id=hpi-2436001334069&click_id=CjwKCAjwsfzSBhB5EiwAOGyqSc91BkMqgGngrIbwJzyQvKJeGJ7M3lW2cBIfgp8IAdQmQG99r-E0ghoCV84QAvD_BwE&campaign_id=22910797197&adgroup_id=188042253750&hotelcenter_id=22910797197&hotel_id=9000001107823&hotel_partition_id=2436001334069&hotel_adtype=hotel&price_displayed_total=406915.00&adtype=booking&gad_source=6&gad_campaignid=22910797197",
    color: "#0194F3",
    logo: "/images/booking/traveloka.svg",
  },
  {
    id: "expedia",
    name: "Expedia",
    url: "https://www.expedia.co.th/en/Bangkok-Hotels-ABCHOTEL-LADPRAO36.h89145842.Hotel-Information",
    color: "#FBCE04",
    logo: "/images/booking/expedia.svg",
  },
];

export const hotelInfo = {
  name: "ABC@48 Ladprao",
  phone: "085-195-6662",
  email: "abc48hs@gmail.com",
  line: "@ivorygrand",
  facebook: "https://www.facebook.com/share/18wtu6uY4U/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/abc48hotelladprao?igsh=MTBlNTl0ZzVnMWt1MA==",
  checkIn: "14:00",
  checkOut: "12:00",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.7631099089986!2d100.5844175!3d13.793149099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29d07c11bd547%3A0x56cc5187f6176f4!2sABC%4048!5e0!3m2!1sth!2sth!4v1784624081096!5m2!1sth!2sth",
  googleMapsLink: "https://maps.app.goo.gl/qpWtcPKHVugqmV7V6?g_st=al",
};
