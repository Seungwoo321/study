/*
  서비스 워커 등록 -> 브라우저 Push 가 등록되어 있는 지 확인 -> 등록 안되어 있는 경우
  Push 를 등록 -> 등록된 단말기 key 값을 서버에 저장 -> 서버에서 해당 Key로 Push 전송 


  1. 웹 앱 매이니페스트 JSON 파일 : sender_id (파이어베이스 설정)
  2. Serer Key (파이어 베이스 설정)
   - 참고 : Legacy Server Key 는 GCM 키이므로 사용하지 않을 것 
  3. Device Key (파이어베이스 데이터 베이스 안에 저장되어 있는 단말기의 유일한 키) 

*/


var request = require('request');

var serverKey = "key=" + "AAAAFlB-R-M:APA91bFOFgMpDUfgiH9d5Uwhx7g0h5cSUTEaLl_wi5DO5FFYgZFSKQ-IsstlFS_8EotEvKRutkAsx4267rPhaApQwcpcLQuZeux_XjV34zZ_6rWC5heVHeEhC7eYUMLM8m0upP6AAxAi";
var deviceKey = "ckD_NIVZtaE:APA91bGgbgqduutXeL5OgKQkpXeDX28VHwWDmrBBGTXXynMpEmB1m_k1sCTlYhE5tuVUEb0YBzCnSFJjHy_56zUvh_cI0-q-qNgL0H33CVgmlwjYaCyecuGnatnkTkTmUgK-nQxtqlcw";
sendMessageToUser(serverKey, deviceKey);

function sendMessageToUser(serverKey, deviceKey, message) {
  request({
    url: 'https://fcm.googleapis.com/fcm/send',
    method: 'POST',
    headers: {
      'Content-Type' :' application/json',
      'Authorization': serverKey,
    },
    body: JSON.stringify(
      {
        "registration_ids": [
          deviceKey
        ]
      }
    )
  }, function(error, response, body) {
    console.log("Result Log - ", body);
    if (error) {
      console.error(error, response, body);
    } else if (response.statusCode >= 400) {
      console.error('HTTP Error: '+response.statusCode+' - '+response.statusMessage+'\n'+body);
    } else {
      console.log('Done!');
    }
  });
};
