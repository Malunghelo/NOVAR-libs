'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5e234f9b71df028ebcaf672c0d9420bc",
"assets/AssetManifest.bin.json": "1b205cd6e346c4fa7a0d3c139a1bce4f",
"assets/AssetManifest.json": "b77374cb06fe84d914316f76d6d1aa32",
"assets/assets/icons/Bubbles%252008.jpg": "8a7d18ac39287a53606e2afa55ac7f34",
"assets/assets/icons/Bubbles%252009.jpg": "b75bc7aa3507fd5e0b1078dd46017b93",
"assets/assets/icons/Bubbles%252010.jpg": "6fa2781c5f5cba2c6f4d29045d1f9d96",
"assets/assets/icons/Bubbles%252011.jpg": "1c2eee702f637d14a45055a465e127ad",
"assets/assets/icons/Bubbles%252012.jpg": "d7b83e79b2db2e239f15677debb7f52e",
"assets/assets/icons/chat_group.png": "395a49b65524892b33c0614677597e5a",
"assets/assets/icons/checklist.png": "b336de80419485182b20bce357b5c0fe",
"assets/assets/icons/checkmark.png": "f2780abe6a362a6ec89c89f7b78e5d64",
"assets/assets/icons/Clubs08.jpg": "5b27ad53573fc4abeb50db13f8492f20",
"assets/assets/icons/comment.png": "885335d06279063fa8a86818ef5f7aeb",
"assets/assets/icons/g09.jpg": "7a4fe1baf4cfe441aacaa40ad29f2379",
"assets/assets/icons/g10.jpg": "ba49a52b24ba2342f1ca522124860c55",
"assets/assets/icons/G10_phys.jpg": "a68bb3f4b40aa0439fe75301050f9f98",
"assets/assets/icons/g11.jpg": "2ac2d24d377651e5e2cf3fbe477fd813",
"assets/assets/icons/g12.jpg": "edb77deec09eac16bfcc389f92867cff",
"assets/assets/icons/G8%25209_Maths.jpg": "275d9a2f207fd878a765e4821d44e1b3",
"assets/assets/icons/Hubs08.jpg": "13f9bf1c30412fdf731d825288e383d2",
"assets/assets/icons/Hubs09.jpg": "3eff528671a37b69647bcf1acafb55df",
"assets/assets/icons/Hubs10.jpg": "16a4e41612e616cea0e3cdd2f807ca1f",
"assets/assets/icons/Hubs11.jpg": "be16dfb155e861669cd0a5167ce263a2",
"assets/assets/icons/Hubs12.jpg": "ec3c22099366336102b3ff8a54f86241",
"assets/assets/icons/HubsTick.png": "9b61881092ae7aee72efdfb4d37479dc",
"assets/assets/icons/HubTick.jpg": "1e2006c78e07b48139060b204c57936c",
"assets/assets/icons/mAbove.jpg": "c4d145368fca6fea4a9a6725b3db4020",
"assets/assets/icons/math_groupa.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/math_groupb.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/math_groupu.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/mUnder50.jpg": "da6b5e18138651d2a996ee9501bc035d",
"assets/assets/icons/mUpgrade.jpg": "ec7782e3587aecfa39c72788ecb4fc98",
"assets/assets/icons/mUpgrading.jpg": "529791043f8569f8da6f8281a2f7cd1d",
"assets/assets/icons/pAbove50.jpg": "da6b5e18138651d2a996ee9501bc035d",
"assets/assets/icons/phys_groupa.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/phys_groupb.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/phys_groupu.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/share-arrow.png": "e6cc6b67720c9dbb59b5d6ab78574b79",
"assets/assets/icons/test.png": "6eb5f1bd9e12df697773b6032b8d2104",
"assets/assets/icons/W.jpg": "33bf66df6f0ebe98e82294105b76c4de",
"assets/assets/icons/WA0001.jpg": "bf29c9125ef57eff265a9a712627096d",
"assets/assets/icons/Wh.jpg": "63e0cb2b616e25935a8030623c579aaf",
"assets/assets/icons/Wha.jpg": "48780937140614b8312d0ed796d162a3",
"assets/assets/icons/What.jpg": "450c7baf7cb3c700fc478ddd4e3e3087",
"assets/assets/logo/eye.png": "0dab6a30fb9b6c4c47ee235507394170",
"assets/assets/logo/Grade09_home.jpg": "260f5a4523760b987dbff12c0c07429c",
"assets/assets/logo/Grade10_home.jpg": "3b541dbca9b6bc30184279ac6cae8c00",
"assets/assets/logo/Grade11_home.jpg": "f7597adcbb59fadc934a256131dfd291",
"assets/assets/logo/Grade12_home.jpg": "6b5497e1e277668e5df516afc43568a7",
"assets/assets/logo/live.png": "f5f5c312919f224d889b9d06017a13c1",
"assets/assets/logo/live_icon.png": "a8cf3e6cc6abd5b22344764add335403",
"assets/assets/logo/my_study_portal.png": "f8a1087129b3a6c517546af873e64e0d",
"assets/assets/logo/NovaFinal.png": "e6434acc7650ceb4f724f785a4a549c4",
"assets/assets/logo/Novar.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/logo/novar.png": "2438e3a39d72937ba4f9e3fc1a865d72",
"assets/assets/logo/NovarLogo.png": "6daa9b018b223c79c910df2758bf59ca",
"assets/assets/logo/send_comments.png": "ccccf65a42b666b6feadc67a7fc68e17",
"assets/assets/logo/visible.png": "06ceb9a9e7a32cae8e661a825d24fcc4",
"assets/assets/lottie/ai_animation.json": "0de162b555dd61bd885e724960069c03",
"assets/assets/lottie/global_live.json": "aa21bac0bd8ab59f7899359b5bdb69a2",
"assets/assets/lottie/Live-GiISf.json": "58611b3531a68891007930c83e1f3fcb",
"assets/assets/lottie/Live.json": "ad3d41e85c396681757afffc7530aa43",
"assets/assets/lottie/Live3-4NA6n.json": "c7c4df6c222f870846fd1a6b19ea739d",
"assets/assets/lottie/live_streaming.json": "d53e3baf22250a1227a4b3521341d45c",
"assets/assets/lottie/loading_live.json": "62709bc6eb6b4fa6c41c5116eec7672b",
"assets/assets/lottie/online_classes.json": "74c3139045ff187e46af0697aa8441c5",
"assets/assets/lottie/online_tutoring.json": "22b8262b9e7998ef8d2a5cc9bd63ffbd",
"assets/assets/lottie/register_welcome.json": "80b313f922c6c7928bb860f18c826f1e",
"assets/assets/lottie/science_shop.json": "b8f8adebdd8e68e1427f363a1d718c23",
"assets/assets/lottie/stream.json": "7694fabef10459fa0118ba598576a4a1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "00141f85fe948973f789a2847b022fc6",
"assets/NOTICES": "d0dd33ca7a45c818aba5dc5ac34376f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "961abee8a087fa947d5a02c65436d518",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/zego_express_engine/assets/ZegoExpressWebFlutterWrapper.js": "269a2438c9a30608cc0dd04b9faa73ae",
"assets/packages/zego_uikit/assets/icons/2.0x/back.png": "3a15fb4e9557ed72c77543500486c5fb",
"assets/packages/zego_uikit/assets/icons/2.0x/invite_reject.png": "f967ba275f67032b14a0383d8eff0779",
"assets/packages/zego_uikit/assets/icons/2.0x/invite_video.png": "7246561fa86cc404de866e76d9737110",
"assets/packages/zego_uikit/assets/icons/2.0x/invite_voice.png": "24970c6bf9acf13244d9b749e3ea8b4f",
"assets/packages/zego_uikit/assets/icons/2.0x/member_camera_normal.png": "0a0decead6773a2ae1b1fc726cb2dba7",
"assets/packages/zego_uikit/assets/icons/2.0x/member_camera_off.png": "fab9cc0caa1ed63244039a2ac50af5a4",
"assets/packages/zego_uikit/assets/icons/2.0x/member_mic_normal.png": "e2788b3c2302b8b561e29c064e9a99ff",
"assets/packages/zego_uikit/assets/icons/2.0x/member_mic_off.png": "4eda86a0a0a6ae75cf8521f63834a54d",
"assets/packages/zego_uikit/assets/icons/2.0x/member_mic_speaking.png": "16b678656c45cd19cd11baec8c8ac751",
"assets/packages/zego_uikit/assets/icons/2.0x/message_fail.png": "d0fb57427a0074f574aef0d474f213d8",
"assets/packages/zego_uikit/assets/icons/2.0x/message_loading.png": "dc31511440f51dbf93422c6288644247",
"assets/packages/zego_uikit/assets/icons/2.0x/nav_close.png": "faf29b14204b46842cc095efc4131686",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_camera_normal.png": "f9749113cfcdcf507dba5962aa71efec",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_camera_off.png": "c0901dd816919eb4e6ffffd5f7239184",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_end.png": "cb7886e14a43a4d7c6315025032a0272",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_flip_camera.png": "a5e90392059a2957af9e255023ab7c73",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_mic_normal.png": "bb82e53aa5e2da3ee06e82f1d788c992",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_mic_off.png": "0e0d07c9e48304166ba2963ce85c1cba",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_more_checked.png": "86a57573701177bf50526ddf8919257d",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_more_normal.png": "e8cf0cb5b4ae57f3634325200b340aef",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_speaker_bluetooth.png": "d24d7aeca55782323f36427f9f68889f",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_speaker_normal.png": "f280aecd1664df5ddb9b41a3265fbc96",
"assets/packages/zego_uikit/assets/icons/2.0x/s1_ctrl_bar_speaker_off.png": "3d36462e98a3dd959cdede0b81c3d311",
"assets/packages/zego_uikit/assets/icons/2.0x/send.png": "ade012f5e004a41459da5d44bfd2957f",
"assets/packages/zego_uikit/assets/icons/2.0x/send_disable.png": "8e810767d851b09a84eb05580e7e83d4",
"assets/packages/zego_uikit/assets/icons/2.0x/share_screen_start.png": "dab73df5268a057e660fcab1861a11ca",
"assets/packages/zego_uikit/assets/icons/2.0x/share_screen_stop.png": "28751ac6943d6195c81351dd954c9d7e",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_camera_off.png": "a5c8ecf7492e0f8a1487513a4c0ceef9",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_camera_on.png": "ceb2dfe462b738ad547939b553ff314d",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_full_screen_close.png": "e5d96585b746432238b0c6eec6857526",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_full_screen_open.png": "655a9f372024d96fca06c6a39d7e80d7",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_mic_off.png": "ab6fdc4bef804d7470fa95ab724a3493",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_mic_on.png": "85b79b0c60b1781019350176881d2006",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_mic_speaking.png": "017fb1acbfeafeab17d3119af65dc61b",
"assets/packages/zego_uikit/assets/icons/2.0x/video_view_wifi.png": "d201ad7f9e9401f7fe60f79cd69e807c",
"assets/packages/zego_uikit/assets/icons/3.0x/back.png": "c9d6e68a3c3d1b3b49723eb745b15e09",
"assets/packages/zego_uikit/assets/icons/3.0x/invite_reject.png": "50fe4208eaf232329d725b6be760ad05",
"assets/packages/zego_uikit/assets/icons/3.0x/invite_video.png": "b3fd4d33ffcc9e0c05ac8353657faf0f",
"assets/packages/zego_uikit/assets/icons/3.0x/invite_voice.png": "f191776d49da7ce3d3f06a557aee74ea",
"assets/packages/zego_uikit/assets/icons/3.0x/member_camera_normal.png": "e0eecc41b8db3333d6e0b73c71af64fb",
"assets/packages/zego_uikit/assets/icons/3.0x/member_camera_off.png": "0527fda34af9d6369549d7ae54ec467a",
"assets/packages/zego_uikit/assets/icons/3.0x/member_mic_normal.png": "8a0ab49718e61d010bf1830f697511ec",
"assets/packages/zego_uikit/assets/icons/3.0x/member_mic_off.png": "a7489c5b6deafcb4eb10a02226bc3d9b",
"assets/packages/zego_uikit/assets/icons/3.0x/member_mic_speaking.png": "e1cea5ddeba80a0a16e608f75dcceac5",
"assets/packages/zego_uikit/assets/icons/3.0x/message_fail.png": "1904f578c97fc26b7ab85980495bb439",
"assets/packages/zego_uikit/assets/icons/3.0x/message_loading.png": "567cf9465ee6f9b501bb6438207ae3aa",
"assets/packages/zego_uikit/assets/icons/3.0x/nav_close.png": "6dd30082ee4dd26b634f2d107a320cda",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_camera_normal.png": "be38e8cacecd08727f98b23a2cc1b297",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_camera_off.png": "a1676a233c3fdf883b1b9525c52272c6",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_end.png": "c0dc110bb095effd61589390546351d3",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_flip_camera.png": "06b289a7d6de55c6f7a5b43d7244afce",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_mic_normal.png": "93436ec1f8389307c037521ce840f0a2",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_mic_off.png": "d7b3619803222f891f8d1487e2dd95af",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_more_checked.png": "c3162cc37bc41fb13957b70b06476c3e",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_more_normal.png": "45f7fe05bac7f3c1106d63c1078d7a7f",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_speaker_bluetooth.png": "d15c31d947ce16f9f08ed2066542c629",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_speaker_normal.png": "2037c7dec37882bf30049d75dd3740c4",
"assets/packages/zego_uikit/assets/icons/3.0x/s1_ctrl_bar_speaker_off.png": "4f9bd995c5123400a3f13b4e4f1ed90c",
"assets/packages/zego_uikit/assets/icons/3.0x/send.png": "024f9c9faa2127335926a4037e23a684",
"assets/packages/zego_uikit/assets/icons/3.0x/send_disable.png": "61577087db110346c44498944d1f491c",
"assets/packages/zego_uikit/assets/icons/3.0x/share_screen_start.png": "be1c3f30eef1e9777618df830e8c406f",
"assets/packages/zego_uikit/assets/icons/3.0x/share_screen_stop.png": "210873b802db239aec4c790855ef6d60",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_camera_off.png": "5275a3c18503c20b5a6238450272d2be",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_camera_on.png": "7369f517f02618f0ba7fe5c1e4fe55fd",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_full_screen_close.png": "8dafedc394aa80ab9370073413e89be7",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_full_screen_open.png": "e4e91ee80390a53294a20c1e12dd783c",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_mic_off.png": "33d5afecd9378cf570271818d4c56667",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_mic_on.png": "2b8b980b6e013bcfdbb0b58f1e5f0640",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_mic_speaking.png": "18354ef4c2606bcf96d4a0b3b9065193",
"assets/packages/zego_uikit/assets/icons/3.0x/video_view_wifi.png": "0b78795289c2165bd6646f714cd2159c",
"assets/packages/zego_uikit/assets/icons/back.png": "1cc8237aa89ef773a1e65d57293a5c06",
"assets/packages/zego_uikit/assets/icons/invite_reject.png": "aef7ea169c2aa2c1abfaa366fec54da0",
"assets/packages/zego_uikit/assets/icons/invite_video.png": "8278efa5e15b6ea4e3af4b408611fe62",
"assets/packages/zego_uikit/assets/icons/invite_voice.png": "849a299fd3670fc6693da77d392d4e45",
"assets/packages/zego_uikit/assets/icons/member_camera_normal.png": "0c9b7ef19613acc4f7b45b03eaa8c05a",
"assets/packages/zego_uikit/assets/icons/member_camera_off.png": "7e4da8fda7851b9c07bdb16e54532021",
"assets/packages/zego_uikit/assets/icons/member_mic_normal.png": "9c6cc34ee53802ea794e0d9e55b92124",
"assets/packages/zego_uikit/assets/icons/member_mic_off.png": "da54635dfe0e424047509267c747c683",
"assets/packages/zego_uikit/assets/icons/member_mic_speaking.png": "cf6b2e626ec6571f11d8638ae3fb8609",
"assets/packages/zego_uikit/assets/icons/message_fail.png": "c4f7303a3963fa31acd74ca482d4e097",
"assets/packages/zego_uikit/assets/icons/message_loading.png": "41913c24ab8f26819589af76852f6f4c",
"assets/packages/zego_uikit/assets/icons/nav_close.png": "d5a4f6a62cf4761f787d0b2e718e535e",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_camera_normal.png": "101da6ff95cb34d25aaef7a1c058c473",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_camera_off.png": "47c428aed459e061d743f6286c61b0ba",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_end.png": "3db1588b978af3720d74a5a6dbdb4cff",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_flip_camera.png": "6929bd51a1655cf7df3a23a2f3133ec8",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_mic_normal.png": "05b63e5db51f06fcf2fe8d8f2ffe9669",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_mic_off.png": "d522490af830e751a9735927194c2e8b",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_more_checked.png": "3573c99e2a7720ff2092e4f572b00012",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_more_normal.png": "96fb3eb790757ec86896cbdd56953e97",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_speaker_bluetooth.png": "c803bf03b3df3af7a34d36f895c8d0bb",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_speaker_normal.png": "3783636d5601e7cba03cbefbfc9d9e93",
"assets/packages/zego_uikit/assets/icons/s1_ctrl_bar_speaker_off.png": "941cd4e186d9feeda35b793a55ab05cf",
"assets/packages/zego_uikit/assets/icons/send.png": "b6f3a4923052cce9db8ef6fc39d2c90b",
"assets/packages/zego_uikit/assets/icons/send_disable.png": "7e80b5c74959ba84cbc7e50beb0e34f1",
"assets/packages/zego_uikit/assets/icons/share_screen_start.png": "0cd5f14df5e1bb573d2aef1de2ed32b6",
"assets/packages/zego_uikit/assets/icons/share_screen_stop.png": "abef995e3768c42d16ac5e1b05120cb5",
"assets/packages/zego_uikit/assets/icons/video_view_camera_off.png": "00241c1e4517457be35ec8235b848633",
"assets/packages/zego_uikit/assets/icons/video_view_camera_on.png": "767c529173c084143074a6a97e32f16f",
"assets/packages/zego_uikit/assets/icons/video_view_full_screen_close.png": "347b5c7e154224cbe561f5d7a4a02bab",
"assets/packages/zego_uikit/assets/icons/video_view_full_screen_open.png": "c0fdccb5b807c1d25e9de110a2f24e46",
"assets/packages/zego_uikit/assets/icons/video_view_mic_off.png": "ffcd14ed2c2e4d68554bbab32ca83a7e",
"assets/packages/zego_uikit/assets/icons/video_view_mic_on.png": "5f4a10f968013313145e45051cb20bf7",
"assets/packages/zego_uikit/assets/icons/video_view_mic_speaking.png": "f36f281fee197efe2eabc76b1355bc88",
"assets/packages/zego_uikit/assets/icons/video_view_wifi.png": "15ceb63b27034d03ae339e78c63238a6",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/back.png": "3a15fb4e9557ed72c77543500486c5fb",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/bg.png": "4c7c5181f0edc3cb1cabfacc36a1bef5",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/bottombar_more.png": "f888373d1b9741a3b56a4701f10eefbe",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/effect_reset.png": "2666ff2def65e8a281e16ab73b4e360a",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/face_beauty_rosy.png": "8830105eaf3019015f9333c14aa2d30d",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/face_beauty_sharpen.png": "c2c638a9f0c2eba2def92db57b415ed6",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/face_beauty_smooth.png": "7b182c9bfe5c52ea8d43a902187476b6",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/face_beauty_whiten.png": "1bcc3c381e3aff7ef287538fcf4afd5f",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/member_more.png": "9d1f40c15baf1a87845efa5d7a3f5f0f",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/minimizing.png": "a61f210b1f445bfeecf7a23a54e69703",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/page_back.png": "2c8b0e62f05456cde0b616db3695c642",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/preview_flip_camera.png": "a5289a39270c442001cf55b1a6168f63",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/reverb_preset_basement.png": "93e7430bee05e1661afcf35a6020a41e",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/reverb_preset_concert.png": "f6623588f16fc9812e1d5ba0a98eda66",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/reverb_preset_gramophone.png": "182217bd275d013de99d8ee7b31b11a1",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/reverb_preset_hall.png": "0bd166cb0d18715f0a1839e489d4fc9c",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/reverb_preset_ktv.png": "17b0ee28bdb15fbf0ad7f6e1514432b6",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/reverb_preset_largeRoom.png": "74f81fb5af623d30507fd05de06ad252",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/reverb_preset_none.png": "32c045a867607e16593a9885b811ee73",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/reverb_preset_popular.png": "66551bb42f5ab16600dfccb0587d0b96",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/reverb_preset_recordingStudio.png": "67630d5c214946175fd995a98e11cbf4",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/reverb_preset_rock.png": "65613f2924e7134463bcbe31db8bd8f6",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/reverb_preset_smallRoom.png": "58d78d9522db5fd6939f4a8d80665111",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/reverb_preset_valley.png": "1c0454a55543c2addced0283147de6ac",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/toolbar_beauty.png": "ea2cdf6e3fb2c1c8386a3698e9322a1d",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/toolbar_camera_normal.png": "aee8549f4b12e29458093ee35dfe7060",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/toolbar_camera_off.png": "34c7fab7ed5313530a3734266533ed71",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/toolbar_cohost.png": "74d72a5d1041c0ad2dee4a50b932edb3",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/toolbar_disable_chat.png": "b262a38ac41d27f5be52ca97a9ae4871",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/toolbar_enable_chat.png": "58f7cebf66cf9507a56fedf59607fa0d",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/toolbar_flip_camera.png": "7066f7c64b499e65fab098cdedaa225d",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/toolbar_im.png": "5419f695006e601b7bcc4e85e94d177f",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/toolbar_im_disabled.png": "0b156593564f816ecf92f9a130436ab1",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/toolbar_mic_normal.png": "3ce1ae4cf03d6c2477b709ee75c35fa3",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/toolbar_mic_off.png": "afd1004bf04655f2620a06d4893dd469",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/toolbar_sound.png": "e1f5d346e3599e3c4b0a75f1229f4368",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/voice_changer_aMajor.png": "011cde25aaf8b511b48dc514ab933133",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/voice_changer_cMajor.png": "5fde83fe2c9e31a74527712db4d2e397",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/voice_changer_crystalClear.png": "a1e877fe0b9dc9dd8a5683815f5511d9",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/voice_changer_deep.png": "b52372c35e98c25c82483432fdc36486",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/voice_changer_ethereal.png": "c69e053fd734dece26b18b9f25131bc3",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/voice_changer_female.png": "00892f95c2c6ff5fe8bd7620a969ba52",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/voice_changer_harmonicMinor.png": "734fdb49391ec63f03074fb5edda90b8",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/voice_changer_littleBoy.png": "693fa23b990e96f209b737afb19da755",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/voice_changer_littleGirl.png": "307af2b65a7d9cd8ce44db877eae7ba1",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/voice_changer_male.png": "e1bd802bbed2c91df340c31116c647d8",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/voice_changer_none.png": "fef3be502e98daf9d9ed8a9b40f07efb",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/voice_changer_optimusPrime.png": "1f00d32f094bc36e70da567cdcdda0af",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/2.0x/voice_changer_robot.png": "dfb1887860f92ba8eccbddc005c5db87",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/back.png": "c9d6e68a3c3d1b3b49723eb745b15e09",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/bg.png": "8271574223a98576ae28b1639f183976",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/bottombar_more.png": "72928b922eca5c56627a89a206cfa090",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/effect_reset.png": "a618d09b6e007bd0f0455c45a2e45efe",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/face_beauty_rosy.png": "f2c54ac69cc89b8af8b7b72752559f21",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/face_beauty_sharpen.png": "b9e88855d27f3e5f11a9f200587a07e8",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/face_beauty_smooth.png": "f0d01433b66ef3aac5dd1d73f2206851",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/face_beauty_whiten.png": "6e3ea3bda336dd65b308b3f3ef359ef4",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/member_more.png": "f8c91265cfd3790e72c0b79e078c948f",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/minimizing.png": "3c3bed57d57bb8bb2ca02fd1427842a8",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/page_back.png": "7b5794948e132d79cccf231a4ab5b378",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/preview_flip_camera.png": "43ab48a59e167ca4aebe5de08bb33ca7",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/reverb_preset_basement.png": "c554c71d2cbe15fca8a45107c1483200",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/reverb_preset_concert.png": "00f8c1f3dc80e9ea831c750c3302bee5",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/reverb_preset_gramophone.png": "1228c599f3d4132e6472dd5b2d2b179c",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/reverb_preset_hall.png": "9ae1edc53c88d8278e30fb3d0c818227",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/reverb_preset_ktv.png": "41731583279aff849ff6d504510eb694",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/reverb_preset_largeRoom.png": "f63e5f77654e8c1edfaf85c0c75a59ff",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/reverb_preset_none.png": "365a13466c16cd47d66ba2344f702939",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/reverb_preset_popular.png": "b083051bcb0a7663dfaee95799c627e8",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/reverb_preset_recordingStudio.png": "bfcdb1e76b97e8ae199b762ff1f7aee4",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/reverb_preset_rock.png": "790ea6ebe10303747a6c2ad7c28882a4",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/reverb_preset_smallRoom.png": "b1cd346213b81f5121e24ce1ccf5a7e2",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/reverb_preset_valley.png": "ad3f1fa3f7897d6063d3f4f53e4ec273",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/toolbar_beauty.png": "475d3770c479c9b3c94473e819a1764c",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/toolbar_camera_normal.png": "f95fa0243f425dbf6bccf479afb9f45e",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/toolbar_camera_off.png": "043d5b09a0e573158ce05127c063d4b7",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/toolbar_cohost.png": "6b3473b3d02a26133a61dfb7d3d46a46",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/toolbar_disable_chat.png": "115d833dd119fab1e869b02de547f562",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/toolbar_enable_chat.png": "b1ead637b461973c1fa6a92f7417df13",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/toolbar_flip_camera.png": "02d4b2f714ce3423f9c7d66120edf853",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/toolbar_im.png": "a204a9ee814519e5405e5faa4c3c723e",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/toolbar_im_disabled.png": "9eaa229d6de183617a295cba6b4c6d04",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/toolbar_mic_normal.png": "1b25d34cee1464a8a367fbddf51b7004",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/toolbar_mic_off.png": "0898ebc02f5bb041307106ae70de7b59",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/toolbar_sound.png": "abd3907b4cdc62e0df03514f146c5105",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/voice_changer_aMajor.png": "9ce03ec5bc9a83d8fce2a19c1f2945fe",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/voice_changer_cMajor.png": "01e0e75b8c50e4b34871b80285f821b0",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/voice_changer_crystalClear.png": "6cfd77baefaa3cf7ad03c02e7d1b325c",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/voice_changer_deep.png": "e01e65e07a90e5ed15b0faec85432f4f",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/voice_changer_ethereal.png": "d3f859ea9c50221b0a96795aa67be67d",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/voice_changer_female.png": "e320240fe4a820206dc08c008663e561",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/voice_changer_harmonicMinor.png": "9a8c17fa6bc894f4b95eb592690ceda7",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/voice_changer_littleGirl.png": "c31a474de3e0139214ce1e408c55575b",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/voice_changer_male.png": "cbc091194cff935d5c34bf6fcc140061",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/voice_changer_none.png": "8c4e9ebf9651fb81e6a3078c8593ef23",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/voice_changer_optimusPrime.png": "d23ebe11aad55f3cd15530f7a2ce80cc",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/3.0x/voice_changer_robot.png": "0c29beeee0f933342bc23271cab1c284",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/back.png": "1cc8237aa89ef773a1e65d57293a5c06",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/bg.png": "39f2aad363edb5c61d5b55e0f0cf3b63",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/bottombar_more.png": "9d179b7892c5a57f34213a19595460f8",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/effect_reset.png": "3a7a93374d30b4b8f8f43bfb127f6034",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/face_beauty_rosy.png": "ec65300078f87b8f30f71634aca53a2c",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/face_beauty_sharpen.png": "bb1335335d3a00296b798905dc39ddc3",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/face_beauty_smooth.png": "4c8b674947425db57d0be26dc4f7fe23",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/face_beauty_whiten.png": "5ef9952125bc8c810cd8d95c93feee6d",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/member_more.png": "60764faabf37983108d8aa620e968765",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/minimizing.png": "de79eb6c8dd6c9e458136bbe6edef3d2",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/page_back.png": "0116dd94705884d88bb44a74dec09469",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/pip.png": "c8e9067ddae865460b996d646a174ca9",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/preview_flip_camera.png": "8b9ccb1da2db017ff27ff2cd48e71462",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/reverb_preset_basement.png": "a65658b4a3ea5afb2072edcfe4020b8e",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/reverb_preset_concert.png": "077664722133d813171dc253757ffe2d",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/reverb_preset_gramophone.png": "636f6d797079e6f6b0980d42168cee6a",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/reverb_preset_hall.png": "bcffc6864ff474b99065c810514308d9",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/reverb_preset_ktv.png": "e4cc909b4013dab20a4ac7fab9979055",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/reverb_preset_largeRoom.png": "9e4e554ee9af05420e7c0bca9d0c7200",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/reverb_preset_none.png": "de634617761d70a3365e52a99ca0d9de",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/reverb_preset_popular.png": "ef587ae29fe65e07a50b622184a6c491",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/reverb_preset_recordingStudio.png": "f26a5667d829d4be03a4153f68ccdf61",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/reverb_preset_rock.png": "f241663ae6ef90b0797a2dba607b9089",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/reverb_preset_smallRoom.png": "339c1b8207e52e51cc6cba681149742e",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/reverb_preset_valley.png": "c0dd2097a6f612cd21b105cb5e511ca5",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/toolbar_beauty.png": "96118eefc817d95ba4128c917e9367f6",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/toolbar_camera_normal.png": "77217671990b277caa6d1f3b1a1ddbf2",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/toolbar_camera_off.png": "75b4c9169b7706ab81460dc037ad6dfb",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/toolbar_cohost.png": "0ec52dadfb3939ff5120e60e54e3eff8",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/toolbar_disable_chat.png": "ce0556d2f0927552ba136bd318fb7d9d",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/toolbar_enable_chat.png": "41ff84815fc816367622715d76bded90",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/toolbar_flip_camera.png": "b46c9773e3a5b4262c0924884890816b",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/toolbar_im.png": "e69aca2198610729852a6571f06633cb",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/toolbar_im_disabled.png": "a2dad18abce3489c1416340d92a75fb8",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/toolbar_mic_normal.png": "6736c30b6b6f362c6d7f7ac665f62473",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/toolbar_mic_off.png": "f06757963cdf195dd2426b267f7bfa9d",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/toolbar_sound.png": "d8f312b7b2b599fff096148ec9c3d46b",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/voice_changer_aMajor.png": "030070dc46d37e289450f449352a3561",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/voice_changer_cMajor.png": "8e757d359d4c87604ee6d1aacfd25ebc",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/voice_changer_crystalClear.png": "7e59f9c7d71bee52111666a29bd50cad",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/voice_changer_deep.png": "d6c911ebd1e1c99745a25f7cbe3563e9",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/voice_changer_ethereal.png": "4b7ae0ccc70d3d20bdbd02418b959441",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/voice_changer_female.png": "8bab155f6cd8f683c08bebb0e600c20f",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/voice_changer_harmonicMinor.png": "5b8be3359d65f64072719608437de4c9",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/voice_changer_littleBoy.png": "27608915d17c61ba45234ff070163f3d",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/voice_changer_littleGirl.png": "ceb1568a1fd2a8f78175fc4a630edc1d",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/voice_changer_male.png": "b99d6b8abeb6d60d524150880529513c",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/voice_changer_none.png": "430231fde4ae736ef74c5cd0fd51d4a3",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/voice_changer_optimusPrime.png": "0a053221abf30862170f0e224ab60247",
"assets/packages/zego_uikit_prebuilt_live_streaming/assets/icons/voice_changer_robot.png": "fb7261581bfbc2dc8cea90f9273669d3",
"assets/packages/zego_zim/assets/index.js": "2a8ea3057adaaf69f338ccd13fa15a34",
"assets/packages/zego_zpns/assets/zpns.js": "b83a7288dbdd4914da1b0b78576f0ee6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "428c6705dd0eb3b1c3040c6dec229d0e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d3f7a00b45399c5ae88a9e9200be848c",
"/": "d3f7a00b45399c5ae88a9e9200be848c",
"main.dart.js": "a6d077bb6e83319a2152e04c5320c590",
"manifest.json": "08522dfd724dcd14b9acdbc1636b043a",
"version.json": "2ee6e52a13062ffec1652cc1cd0ced4c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
