
'use strict';

var pushButton = document.querySelector('.js-push-btn');
var isSubscribed = false;
var swRegistration = null;

// 화면 UI 초기화 
function initialiseUI() {
  pushButton.addEventListener('click', function () {
    pushButton.disabled = true;
    if (isSubscribed) {
      unSubscribeUser();
    } else {
      subscribeUser();
    }
  });

  swRegistration.pushManager.getSubscription()
    .then(function (subscription) {
      isSubscribed = !(subscription === null);

      if (isSubscribed) {
        console.log('User IS subscribed.');
      } else {
        console.log('User is NOT subscribed.');
      }

      updateBtn();
    });
}

// 브라우저를 Push 서버에 등록
function subscribeUser() {
  swRegistration.pushManager.subscribe({
    // 푸시 수신 시 알람 표시 속성
    userVisibleOnly: true
  })
    .then(function (subscription) {
      console.log('User is subscribed:', subscription);
      updateSubscriptionOnServer(subscription);
      isSubscribed = true;

      updateBtn();
    })
    .catch(function (err) {
      console.log('Failed to subscribe the user: ', err);
      updateBtn();
    });
}

function unSubscribeUser() {
  swRegistration.pushManager.getSubscription().then(function (subscription) {
    subscription.unsubscribe().then(function (successful) {
      console.log('User is unsubscribed : ', successful);
      console.log('Unsubscribed subscription : ', subscription);
      updateSubscriptionOnServer(null, subscription);
      isSubscribed = false;

      updateBtn();
    }).catch(function (e) {
      console.log('Failed to unsubscribe the user: ', e);
      updateBtn();
    })
  });
}

function updateSubscriptionOnServer(subscription, unsubscribed) {
  var subscriptionJson = document.querySelector('.js-subscription-json');
  var subscriptionDetails = document.querySelector('.js-subscription-details');

  if (subscription) {
    console.log(1)
    subscriptionJson.textContent = JSON.stringify(subscription);
    subscriptionDetails.classList.remove('is-invisible');
    
    sendDeviceKeytoFirebase(subscription.endpoint.split('send/')[1]);
  } else {
    subscriptionDetails.classList.add('is-invisible');

    sendDeviceKeytoFirebase(unsubscribed.endpoint.split('send/')[1]);
  }
}

// 브라우저 푸시 등록 여부에 따라 버튼 활성화 여부 결정 
function updateBtn() {
  if (Notification.permission === 'denied') {
    pushButton.textContent = 'Push Messaging Blocked.';
    pushButton.disabled = true;
    updateSubscriptionOnServer(null);
    return;
  }

  if (isSubscribed) {
    pushButton.textContent = 'Disable Push Messaging';
  } else {
    pushButton.textContent = 'Enable Push Messaging';
  }

  pushButton.disabled = false;
}

// 서비스 워커 등록 
if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');

  navigator.serviceWorker.register('sw.js')
    .then(function (swReg) {
      console.log('Service Worker is registered', swReg);

      swRegistration = swReg;
      initialiseUI();
    })
    .catch(function (error) {
      console.error('Service Worker Error', error);
    });
} else {
  console.warn('Push messaging is not supported');
  pushButton.textContent = 'Push Not Supported';
}