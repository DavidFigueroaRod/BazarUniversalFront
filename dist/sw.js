if(!self.define){let e,i={};const a=(a,o)=>(a=new URL(a+".js",o).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(o,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let d={};const s=e=>a(e,n),c={module:{uri:n},exports:d,require:s};i[n]=Promise.all(o.map((e=>c[e]||s(e)))).then((e=>(r(...e),d)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-CIG87eWH.js",revision:null},{url:"assets/index-CsrsdSME.css",revision:null},{url:"index.html",revision:"a0e7a9387744b29374ce424b0876f745"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"android/android-launchericon-144-144.png",revision:"87963b6f9e32107c9292b79e94c5a7df"},{url:"android/android-launchericon-192-192.png",revision:"7e2ef2784bac97767713ba51d2b4882f"},{url:"android/android-launchericon-48-48.png",revision:"974dfc04e6bccdd4fe79a2067d460de3"},{url:"android/android-launchericon-512-512.png",revision:"04f38497a00a893d907a5e3c27422197"},{url:"android/android-launchericon-72-72.png",revision:"b76f5d13d446977a4d5bbbbfff883e67"},{url:"android/android-launchericon-96-96.png",revision:"fe7979e565ed0e729e89a1db9574f7d7"},{url:"ios/100.png",revision:"d11f9e583af2845ad17ceb8b724b4fc6"},{url:"ios/1024.png",revision:"a89b6c79fb1d879a861f8eaaa0725aee"},{url:"ios/114.png",revision:"d39feccb83b9213685d9f70231be03db"},{url:"ios/120.png",revision:"83cf64efb7c025f92f910a2d8d27a0d4"},{url:"ios/128.png",revision:"df539d4c39d86c39d6d0bb16665a4f82"},{url:"ios/144.png",revision:"87963b6f9e32107c9292b79e94c5a7df"},{url:"ios/152.png",revision:"24ba86ab7d46e642d949a2f76e1ef844"},{url:"ios/16.png",revision:"bc82dce22b177c9a6c78b702248e386b"},{url:"ios/167.png",revision:"31795976d972dfdb191a2ce1f665a87f"},{url:"ios/180.png",revision:"09b6d3839497b6ba1e12a235a1827a2a"},{url:"ios/192.png",revision:"7e2ef2784bac97767713ba51d2b4882f"},{url:"ios/20.png",revision:"ad99850f320f58d38e0f016bf7c8ee8f"},{url:"ios/256.png",revision:"96319eed8fc42fec6264cd907e9f7798"},{url:"ios/29.png",revision:"0d887084395c3009f2682f3797899e28"},{url:"ios/32.png",revision:"e6b02aa529a86fce72617bda131e448a"},{url:"ios/40.png",revision:"eec5cadbc7c4c0e0806f7e42a33dab16"},{url:"ios/50.png",revision:"b760ac839ee76d2006156257274b20d6"},{url:"ios/512.png",revision:"04f38497a00a893d907a5e3c27422197"},{url:"ios/57.png",revision:"22f9a9f010c52ef50359cdc3ec3a8d9a"},{url:"ios/58.png",revision:"83215866865b011cec519e5af544533d"},{url:"ios/60.png",revision:"082dd254bd7f41f408f1d6990d2474c9"},{url:"ios/64.png",revision:"0430975aa8c49b4fbf4cd869b59024dd"},{url:"ios/72.png",revision:"b76f5d13d446977a4d5bbbbfff883e67"},{url:"ios/76.png",revision:"cf737e838a373dc3ec1f94572b6938c9"},{url:"ios/80.png",revision:"ed055e135da0ffb76f094251f04bfae6"},{url:"ios/87.png",revision:"cf7238116c493bc3221df04a5faacccc"},{url:"windows11/LargeTile.scale-100.png",revision:"02650f8a12ae438a04a843e691b39934"},{url:"windows11/LargeTile.scale-125.png",revision:"df1c5af719041bce954d4ebee1774eec"},{url:"windows11/LargeTile.scale-150.png",revision:"a1681d1e85c94f0d33fa6f2ef5ab3ca9"},{url:"windows11/LargeTile.scale-200.png",revision:"1c2f20389aedc0ae6bffa519ca9f8069"},{url:"windows11/LargeTile.scale-400.png",revision:"3147f42963f81412c66d486ca85ef501"},{url:"windows11/SmallTile.scale-100.png",revision:"10677e8523d917b9544545c1f2bfec1a"},{url:"windows11/SmallTile.scale-125.png",revision:"51800b9f4ead7a69275dc9fdce3eccd2"},{url:"windows11/SmallTile.scale-150.png",revision:"0f75a17821428c96ad1e12668b4f308d"},{url:"windows11/SmallTile.scale-200.png",revision:"d3b1cd5d0302dd952bace769c0b49186"},{url:"windows11/SmallTile.scale-400.png",revision:"b1bab4071bad00bbcd611dc954685ee4"},{url:"windows11/SplashScreen.scale-100.png",revision:"bcde32da7b2af9bfce5cae16949fb9c5"},{url:"windows11/SplashScreen.scale-125.png",revision:"93cee059e052d59d1ec25fd71abcb24e"},{url:"windows11/SplashScreen.scale-150.png",revision:"df6be837e98f2dfaf3f14ff8daa50efb"},{url:"windows11/SplashScreen.scale-200.png",revision:"2a5b68b70d1454d46d02d70d2a62d907"},{url:"windows11/SplashScreen.scale-400.png",revision:"154a4374d2f904f56fa7dd643a690d5d"},{url:"windows11/Square150x150Logo.scale-100.png",revision:"980d11c88d86bca2ece8a854302f2d3d"},{url:"windows11/Square150x150Logo.scale-125.png",revision:"d9863b3efbe9da5696b38eb525456966"},{url:"windows11/Square150x150Logo.scale-150.png",revision:"345677c7a376ee0d2b12aa0aa69b4ec9"},{url:"windows11/Square150x150Logo.scale-200.png",revision:"79b2832ad8dfb7785c32942e48d8fead"},{url:"windows11/Square150x150Logo.scale-400.png",revision:"98c4a9e7d692100beef0df4267938ab8"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"bd73f124d5ef6a2b8faf39890fe8761c"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"56eeae4542903a0a426ba1ca8effc56b"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"cf58ccc58bf808db6525982b7dd57878"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"ba234582f5780da9926d69fc8c55b479"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"5d1b0db882a2581e5ab7937720a6a3c7"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"b295ef17a74200c4fa0d5eb2e910109b"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"879bb569c0e5c890598229c60b28f5d9"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"6a1c3faf18e505c8362092b9e240fc66"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"22449403c804950270c1592edfeb83b2"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"f7baa63e4216de747223e6c6129dc525"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"0480b9d80da97346ad49eba49fcd4d15"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"da3eee28368bc81398b8e5dc37d27f07"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"c1667031e0c3f406ed95f11d303cd362"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"b14799719d2ce27e32a63c00ebb30754"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"084684bf255fb2b9adbae9e9277b7b90"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"bd73f124d5ef6a2b8faf39890fe8761c"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"56eeae4542903a0a426ba1ca8effc56b"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"cf58ccc58bf808db6525982b7dd57878"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"ba234582f5780da9926d69fc8c55b479"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"5d1b0db882a2581e5ab7937720a6a3c7"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"b295ef17a74200c4fa0d5eb2e910109b"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"879bb569c0e5c890598229c60b28f5d9"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"6a1c3faf18e505c8362092b9e240fc66"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"22449403c804950270c1592edfeb83b2"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"f7baa63e4216de747223e6c6129dc525"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"0480b9d80da97346ad49eba49fcd4d15"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"da3eee28368bc81398b8e5dc37d27f07"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"c1667031e0c3f406ed95f11d303cd362"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"b14799719d2ce27e32a63c00ebb30754"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"084684bf255fb2b9adbae9e9277b7b90"},{url:"windows11/Square44x44Logo.scale-100.png",revision:"22449403c804950270c1592edfeb83b2"},{url:"windows11/Square44x44Logo.scale-125.png",revision:"d88bd1bfdb2b4df2a238a3830b6cec52"},{url:"windows11/Square44x44Logo.scale-150.png",revision:"8f6938d452a9ef0aa73ca92afa04c379"},{url:"windows11/Square44x44Logo.scale-200.png",revision:"42bc19ccde81710f3ac27c0c79b80b74"},{url:"windows11/Square44x44Logo.scale-400.png",revision:"e38cefa30a59ecd0cc313693d1a85193"},{url:"windows11/Square44x44Logo.targetsize-16.png",revision:"bd73f124d5ef6a2b8faf39890fe8761c"},{url:"windows11/Square44x44Logo.targetsize-20.png",revision:"56eeae4542903a0a426ba1ca8effc56b"},{url:"windows11/Square44x44Logo.targetsize-24.png",revision:"cf58ccc58bf808db6525982b7dd57878"},{url:"windows11/Square44x44Logo.targetsize-256.png",revision:"ba234582f5780da9926d69fc8c55b479"},{url:"windows11/Square44x44Logo.targetsize-30.png",revision:"5d1b0db882a2581e5ab7937720a6a3c7"},{url:"windows11/Square44x44Logo.targetsize-32.png",revision:"b295ef17a74200c4fa0d5eb2e910109b"},{url:"windows11/Square44x44Logo.targetsize-36.png",revision:"879bb569c0e5c890598229c60b28f5d9"},{url:"windows11/Square44x44Logo.targetsize-40.png",revision:"6a1c3faf18e505c8362092b9e240fc66"},{url:"windows11/Square44x44Logo.targetsize-44.png",revision:"22449403c804950270c1592edfeb83b2"},{url:"windows11/Square44x44Logo.targetsize-48.png",revision:"f7baa63e4216de747223e6c6129dc525"},{url:"windows11/Square44x44Logo.targetsize-60.png",revision:"0480b9d80da97346ad49eba49fcd4d15"},{url:"windows11/Square44x44Logo.targetsize-64.png",revision:"da3eee28368bc81398b8e5dc37d27f07"},{url:"windows11/Square44x44Logo.targetsize-72.png",revision:"c1667031e0c3f406ed95f11d303cd362"},{url:"windows11/Square44x44Logo.targetsize-80.png",revision:"b14799719d2ce27e32a63c00ebb30754"},{url:"windows11/Square44x44Logo.targetsize-96.png",revision:"084684bf255fb2b9adbae9e9277b7b90"},{url:"windows11/StoreLogo.scale-100.png",revision:"b760ac839ee76d2006156257274b20d6"},{url:"windows11/StoreLogo.scale-125.png",revision:"643dbe27369cd90ffa84774d3bf8bec1"},{url:"windows11/StoreLogo.scale-150.png",revision:"3aa12c44ed1e7d06b6e54a9b2bb6731c"},{url:"windows11/StoreLogo.scale-200.png",revision:"d11f9e583af2845ad17ceb8b724b4fc6"},{url:"windows11/StoreLogo.scale-400.png",revision:"49ae2bd08371cb2037bf4d144ab3c670"},{url:"windows11/Wide310x150Logo.scale-100.png",revision:"4f13ccb58758a8fd18b83aba9f9d5553"},{url:"windows11/Wide310x150Logo.scale-125.png",revision:"666fe8c98aa969223236c25af06e4d9c"},{url:"windows11/Wide310x150Logo.scale-150.png",revision:"fc16370f36107f673401ddc05f1ab828"},{url:"windows11/Wide310x150Logo.scale-200.png",revision:"bcde32da7b2af9bfce5cae16949fb9c5"},{url:"windows11/Wide310x150Logo.scale-400.png",revision:"2a5b68b70d1454d46d02d70d2a62d907"},{url:"manifest.webmanifest",revision:"02dd736a44c9d1b6bece372aff7d68ca"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
